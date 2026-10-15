#!/usr/bin/env node
/* Builds dist/artifact.html: the same app as a page body, for publishing as an
   Artifact. The Artifact platform supplies the document skeleton, so this strips
   the doctype/html/head/body wrapper and inlines the stylesheet. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

const html = read('index.html');
const css = read('css/app.css');

const body = html
  .slice(html.indexOf('<body>') + '<body>'.length, html.indexOf('</body>'))
  .trim();

const title = html.match(/<title>([^<]*)<\/title>/)[1];
const fonts = html.match(/<link rel="stylesheet" href="https:\/\/fonts[^>]*>/)[0];

const out = `<title>${title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${fonts}
<style>
${css}
</style>

${body}
`;

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/artifact.html'), out);

const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
console.log(`dist/artifact.html written (${(out.length / 1024).toFixed(1)} KB)`);
console.log(`references ${scripts.length} scripts to publish alongside:`);
scripts.forEach(s => console.log('  ' + s));
