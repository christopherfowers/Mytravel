#!/usr/bin/env node
/* Loads the app in Chromium and checks it: no JS errors, no horizontal overflow,
   every section renders, and every country's data matches docs/SCHEMA.md.
   Usage: node tools/check.js   (serves the project on a free port itself) */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

function serve() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
      const file = path.join(root, rel);
      if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404).end('not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      res.end(fs.readFileSync(file));
    });
    server.listen(0, () => resolve({ server, port: server.address().port }));
  });
}

const KNOWN_TAGS = ['meat','pork','beef','chicken','fish','raw_fish','raw_meat','raw_egg','shellfish',
  'organ','insects','lard','gelatin','fish_broth','dairy','egg','honey','nuts','peanuts','soy',
  'soy_sauce','sesame','gluten','spicy','alcohol','meat_dairy','garlic','coconut','wheat'];

(async () => {
  const { server, port } = await serve();
  const base = `http://localhost:${port}/index.html`;
  const launch = { executablePath: process.env.CHROMIUM_PATH || undefined };
  const browser = await chromium.launch(launch);
  const failures = [];
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  page.on('pageerror', e => failures.push('JS error: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') failures.push('Console error: ' + m.text()); });

  await page.goto(base + '#/', { waitUntil: 'networkidle' });

  /* ---- data contract ---- */
  const data = await page.evaluate(knownTags => {
    const T = window.TRAVEL;
    const problems = [];
    const tags = new Set(knownTags);
    const interests = new Set(T.vocab.interests.map(i => i.id));
    const stats = { countries: 0, full: 0, dishes: 0, activities: 0, phrases: 0, signs: 0, scenarios: 0 };

    T.data.all().forEach(c => {
      stats.countries++;
      if (!c.emergency || !Object.keys(c.emergency).length) problems.push(c.code + ': no emergency numbers');
      if (!c.advisorySlug) problems.push(c.code + ': no advisory slug');
      if (!c.currency || !c.plugs || !c.voltage) problems.push(c.code + ': incomplete baseline');
      if (c.depth !== 'full') return;
      stats.full++;

      ['overview','entry','money','connectivity','transport','safety','health','food',
       'activities','language','scenarios','links'].forEach(k => {
        if (!c[k]) problems.push(c.code + ': missing section ' + k);
      });

      ((c.food && c.food.dishes) || []).forEach(d => {
        stats.dishes++;
        if (!d.id || !d.name || !d.blurb) problems.push(c.code + '/' + (d.id || d.name) + ': missing core field');
        if (!Array.isArray(d.contains)) problems.push(c.code + '/' + d.id + ': contains must be an array');
        if (typeof d.spice !== 'number') problems.push(c.code + '/' + d.id + ': missing spice level');
        [].concat(d.contains || [], d.mayContain || []).forEach(t => {
          if (!tags.has(t)) problems.push(c.code + '/' + d.id + ': unknown ingredient tag "' + t + '"');
        });
        Object.keys(d.omit || {}).forEach(t => {
          if (!(d.contains || []).includes(t) && !(d.mayContain || []).includes(t)) {
            problems.push(c.code + '/' + d.id + ': omit key "' + t + '" is not an ingredient of this dish');
          }
        });
      });

      (c.activities || []).forEach(a => {
        stats.activities++;
        if (!a.id || !a.name || !a.blurb || !a.city) problems.push(c.code + '/' + (a.id || a.name) + ': missing core field');
        if (!a.hours) problems.push(c.code + '/' + a.id + ': missing hours');
        if (!['low','moderate','high'].includes(a.energy)) problems.push(c.code + '/' + a.id + ': bad energy');
        if (!['easy','some','hard'].includes(a.language)) problems.push(c.code + '/' + a.id + ': bad language');
        if (!['no','recommended','required'].includes(a.bookAhead)) problems.push(c.code + '/' + a.id + ': bad bookAhead');
        (a.tags || []).forEach(t => {
          if (!interests.has(t)) problems.push(c.code + '/' + a.id + ': unknown tag "' + t + '"');
        });
      });

      ((c.language && c.language.phrasebook) || []).forEach(g => (g.items || []).forEach(ph => {
        stats.phrases++;
        if (!ph.en || !ph.native || !ph.say) problems.push(c.code + ': incomplete phrase "' + (ph.en || '?') + '"');
      }));
      stats.signs += ((c.language && c.language.signs) || []).length;
      (c.scenarios || []).forEach(s => {
        stats.scenarios++;
        if (!s.situation || !(s.steps || []).length) problems.push(c.code + ': incomplete scenario');
      });

      const ids = [].concat(((c.food && c.food.dishes) || []).map(d => d.id), (c.activities || []).map(a => a.id));
      const dupes = ids.filter((v, i) => ids.indexOf(v) !== i);
      if (dupes.length) problems.push(c.code + ': duplicate item ids ' + dupes.join(', '));
    });
    return { problems, stats };
  }, KNOWN_TAGS);

  failures.push(...data.problems);

  /* ---- the engine actually discriminates ---- */
  await page.evaluate(() => window.TRAVEL.store.update(s => {
    s.travelers = [{ name: 'child', age: 5 }, { name: 'adult', age: 40 }];
    s.diet = { shellfish_allergy: true, no_pork: true };
    s.mobility = { stroller: true };
  }));
  await page.goto(base + '#/country/JP/food', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const skips = await page.locator('.status-avoid').count();
  if (skips === 0) failures.push('Engine: a shellfish allergy and no pork flagged nothing in Japan');

  /* ---- every section of every full guide renders ---- */
  const tabs = ['overview','food','activities','language','safety','health','embassy','around','help'];
  const codes = await page.evaluate(() => window.TRAVEL.data.all().filter(c => c.depth === 'full').map(c => c.code));
  for (const code of codes) {
    for (const tab of tabs) {
      await page.goto(`${base}#/country/${code}/${tab}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(150);
      const len = (await page.locator('main').innerText()).length;
      if (len < 500) failures.push(`Thin section: ${code}/${tab} rendered only ${len} characters`);
    }
  }

  /* ---- other views, and a baseline country ---- */
  for (const route of ['/', '/travelers', '/trip', '/prep', '/country/IS/overview', '/country/IS/food']) {
    await page.goto(base + '#' + route, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    if ((await page.locator('main').innerText()).length < 200) failures.push('Empty view: ' + route);
  }

  /* ---- phone width, dark theme, no sideways scroll ---- */
  const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' });
  phone.on('pageerror', e => failures.push('Mobile JS error: ' + e.message));
  for (const route of ['/', '/country/JP/food', '/country/JP/activities', '/travelers', '/prep']) {
    await phone.goto(base + '#' + route, { waitUntil: 'networkidle' });
    await phone.waitForTimeout(250);
    const overflow = await phone.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 0) failures.push(`Horizontal overflow of ${overflow}px at 390px on ${route}`);
  }

  await browser.close();
  server.close();

  const s = data.stats;
  console.log(`${s.countries} countries, ${s.full} full guides`);
  console.log(`${s.dishes} dishes, ${s.activities} activities, ${s.phrases} phrases, ${s.signs} signs, ${s.scenarios} scenarios`);
  if (failures.length) {
    console.error(`\n${failures.length} problem(s):`);
    failures.forEach(f => console.error('  ' + f));
    process.exit(1);
  }
  console.log('\nAll checks passed.');
})();
