/* Country dossier. Nine sections, switched by the board at the top.
   Food and activities are scored against the traveler profile. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;
  var ui = TRAVEL.ui;

  var TABS = [
    { id: 'overview', label: 'Overview' },
    { id: 'food', label: 'Food' },
    { id: 'activities', label: 'Activities' },
    { id: 'language', label: 'Language' },
    { id: 'safety', label: 'Safety & alerts' },
    { id: 'health', label: 'Health' },
    { id: 'embassy', label: 'Embassy & papers' },
    { id: 'around', label: 'Getting around' },
    { id: 'help', label: 'If it goes wrong' }
  ];

  /* ------------------------------ live links ------------------------------ */
  /* Each government spells countries differently, and some do not cover a given
     country at all: the UK publishes no advice about the UK, and neither the UK
     nor the State Department covers Puerto Rico, which is US territory. So a
     country may override any slug, or set it to false to drop that source.
     All of these are verified against the live sites by tools/check-links.sh. */
  var SOURCES = [
    { key: 'stateSlug', label: 'US State Department advisory (current level)',
      url: function (s) { return 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/' + s + '-travel-advisory.html'; } },
    { key: 'cdcSlug', label: 'CDC travel health notices and vaccines',
      url: function (s) { return 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/' + s; } },
    { key: 'fcdoSlug', label: 'UK FCDO travel advice',
      url: function (s) { return 'https://www.gov.uk/foreign-travel-advice/' + s; } },
    { key: 'gcSlug', label: 'Canada travel advice',
      url: function (s) { return 'https://travel.gc.ca/destinations/' + s; } }
  ];

  function officialLinks(country) {
    var links = [];
    if (country.embassyDomain) {
      links.push({ label: 'Your embassy in ' + country.name, url: 'https://' + country.embassyDomain + '/' });
    }
    SOURCES.forEach(function (source) {
      var slug = country[source.key] === undefined ? country.advisorySlug : country[source.key];
      if (!slug) return;
      links.push({ label: source.label, url: source.url(slug) });
    });
    links.push({ label: 'Enroll in STEP so your embassy can reach you', url: 'https://step.state.gov/' });
    return links;
  }

  function emergencyBlock(country) {
    var e = country.emergency || {};
    var rows = [];
    var labels = {
      general: 'All emergencies', police: 'Police', ambulance: 'Ambulance', fire: 'Fire',
      fireAmbulance: 'Fire and ambulance', ambulanceFire: 'Ambulance and fire',
      touristPolice: 'Tourist police', mobile: 'From a mobile', alt: 'Also works', gendarmerie: 'Rural police'
    };
    Object.keys(labels).forEach(function (key) {
      if (e[key]) rows.push([labels[key], el('strong', { class: 'mono', style: 'font-size:1.05rem', text: e[key] })]);
    });
    return ui.card([
      el('h3', { text: 'Emergency numbers' }),
      el('p', { class: 'muted', style: 'font-size:.85rem;margin-top:4px', text: 'Save these in your phone before you fly, and teach them to your children.' }),
      el('div', { style: 'margin-top:8px' }, [ui.specList(rows)])
    ], 'stripe stripe-alert');
  }

  /* ------------------------------- overview ------------------------------- */
  function overviewSection(country) {
    var nodes = [];
    var o = country.overview;

    if (o) {
      nodes.push(ui.card([
        el('h2', { text: 'What to expect' }),
        el('p', { class: 'prose', style: 'margin-top:8px', text: o.intro }),
        el('div', { style: 'margin-top:12px' }, [ui.specList([
          ['When to go', o.bestTime],
          ['Dates to avoid', o.avoidDates],
          ['Trip length', o.typicalTrip],
          ['Time zone', o.timeZone],
          ['With children', o.withKids]
        ])])
      ]));
    }

    var lb = country.languageBarrier;
    if (lb) {
      nodes.push(ui.card([
        el('div', { class: 'section-head' }, [
          el('h2', { text: 'The language barrier' }),
          ui.statusChip(lb.level === 'high' ? 'ask' : 'ok', lb.level === 'high' ? 'Expect a real barrier' : 'Manageable')
        ]),
        el('p', { class: 'prose', text: lb.summary }),
        el('div', { class: 'grid grid-2', style: 'margin-top:14px' }, [
          el('div', {}, [
            el('span', { class: 'eyebrow', text: 'What gets you through' }),
            ui.bulletList(lb.whatWorks)
          ]),
          el('div', {}, [
            el('span', { class: 'eyebrow', text: 'Where it actually bites' }),
            ui.bulletList(lb.hardMoments)
          ])
        ])
      ], 'stripe stripe-ask'));
    }

    nodes.push(el('div', { class: 'grid grid-2' }, [
      ui.card([
        el('h3', { text: 'The basics' }),
        el('div', { style: 'margin-top:8px' }, [ui.specList([
          ['Currency', country.currency],
          ['Languages', country.languages.join(', ')],
          ['English', country.englishPrevalence === 'widely' ? 'Widely spoken in tourist settings' :
            country.englishPrevalence === 'some' ? 'Some, mostly in cities and hotels' : 'Limited. Plan around it.'],
          ['Plugs', (country.plugs || []).map(function (p) { return 'Type ' + p; }).join(', ')],
          ['Power', country.voltage],
          ['Driving', 'Drives on the ' + country.drivingSide],
          ['Tap water', country.tapWater === 'safe' ? 'Safe to drink' :
            country.tapWater === 'caution' ? 'Usually safe in cities, ask locally' : 'Do not drink it. Buy bottled.'],
          ['Main destinations', (country.cities || []).join(', ')]
        ])])
      ]),
      emergencyBlock(country)
    ]));

    if (country.entry) {
      nodes.push(ui.card([
        el('h2', { text: 'Getting in' }),
        el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:4px', text: country.entry.note }),
        el('div', { style: 'margin-top:10px' }, [ui.specList(country.entry.rows)]),
        country.entry.links ? el('div', { style: 'margin-top:12px' }, [
          el('span', { class: 'eyebrow', text: 'Official sources' }),
          ui.linkList(country.entry.links)
        ]) : null
      ]));
    }

    if (country.etiquette) {
      nodes.push(ui.card([
        el('h2', { text: 'Not getting it wrong' }),
        el('div', { class: 'stack-sm', style: 'margin-top:10px' }, country.etiquette.map(function (item) {
          return el('div', { style: 'padding-bottom:8px;border-bottom:1px solid var(--line)' }, [
            el('p', { style: 'font-weight:600;font-size:.93rem', text: item.rule }),
            el('p', { class: 'muted', style: 'font-size:.86rem', text: item.why })
          ]);
        }))
      ]));
    }

    nodes.push(ui.card([
      el('h2', { text: 'Live official pages' }),
      el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:4px', text: 'Advisory levels, entry rules and health notices change constantly, so this app links them rather than copying them. Check these a week before you fly and again the night before.' }),
      el('div', { style: 'margin-top:10px' }, [ui.linkList(officialLinks(country))])
    ], 'stripe stripe-accent'));

    if (country.depth !== 'full') {
      nodes.unshift(ui.card([
        el('h3', { text: 'This country has the essentials, not the full guide' }),
        el('p', { class: 'prose', style: 'margin-top:6px;font-size:.92rem', text: 'Verified basics, emergency numbers, your embassy and every live official link are here. The written-out food, activity and phrasebook sections have not been researched for ' + country.name + ' yet. Ask for it and it can be built out the same way Japan is.' })
      ], 'stripe stripe-ask'));
    }

    return el('div', { class: 'stack' }, nodes);
  }

  /* --------------------------------- food --------------------------------- */
  function savedKey(country) {
    var saved = TRAVEL.store.get().saved[country.code];
    return saved || {};
  }

  function saveButton(country, item, type) {
    var saved = savedKey(country)[item.id];
    var btn = el('button', { type: 'button', class: 'btn btn-sm no-print' });
    function paint() {
      var on = !!savedKey(country)[item.id];
      btn.textContent = on ? 'Saved to trip ✓' : 'Save to trip';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    btn.addEventListener('click', function () {
      TRAVEL.store.update(function (s) {
        if (!s.saved[country.code]) s.saved[country.code] = {};
        if (s.saved[country.code][item.id]) delete s.saved[country.code][item.id];
        else s.saved[country.code][item.id] = { type: type, name: item.name, day: null };
      });
      paint();
      if (TRAVEL.refreshTripCount) TRAVEL.refreshTripCount();
    });
    paint();
    return btn;
  }

  function dishItem(country, dish, verdict) {
    var meta = [];
    if (dish.price) meta.push(ui.tag(dish.price));
    if (dish.spice >= 2) meta.push(ui.tag('spicy'));
    (dish.traits || []).forEach(function (t) {
      var label = t === 'kid' ? 'kid-tested' : t === 'veg' ? 'no meat or fish' : t === 'plain' ? 'plain' :
        t === 'street' ? 'street food' : t === 'cheap' ? 'cheap' : t === 'adventurous' ? 'adventurous' : t;
      meta.push(ui.tag(label));
    });

    return el('div', { class: 'item' }, [
      el('div', { class: 'item-head' }, [
        el('div', { class: 'item-name' }, [
          el('strong', { text: dish.name }),
          dish.native ? el('span', { class: 'item-native', text: dish.native + (dish.romaji ? '  ·  ' + dish.romaji : '') }) : null
        ]),
        ui.statusChip(verdict.status, TRAVEL.engine.statusLabel(verdict.status))
      ]),
      el('p', { class: 'item-why', text: dish.blurb }),
      ui.reasonList(verdict.reasons),
      dish.order ? el('p', { class: 'muted', style: 'font-size:.86rem', text: 'Ordering: ' + dish.order }) : null,
      el('div', { class: 'item-meta' }, meta),
      el('div', { class: 'item-actions' }, [
        dish.where ? el('span', { class: 'muted', style: 'font-size:.82rem;flex:1 1 auto', text: 'Find it: ' + dish.where }) : null,
        saveButton(country, dish, 'food')
      ])
    ]);
  }

  function foodSection(country) {
    var profile = TRAVEL.engine.profileSummary(TRAVEL.store.get());
    var food = country.food;
    if (!food) {
      return el('div', { class: 'stack' }, [
        ui.emptyState('The food research for ' + country.name + ' has not been written yet.', 'Back to countries', '#/'),
        ui.card([
          el('h3', { text: 'What to do in the meantime' }),
          ui.bulletList([
            'Set your food rules under Travelers, then translate them into the local language with a translation app and screenshot the result.',
            'Photograph the ingredient words you need to avoid. Showing a written word works far better than speaking it.',
            'Supermarkets and department store food halls let you see food before buying, which removes most of the risk.'
          ])
        ])
      ]);
    }

    var judged = food.dishes.map(function (d) {
      return { dish: d, verdict: TRAVEL.engine.judgeDish(d, profile) };
    }).sort(function (a, b) { return a.verdict.score - b.verdict.score; });

    var counts = { ok: 0, ask: 0, avoid: 0 };
    judged.forEach(function (j) { counts[j.verdict.status]++; });

    var filter = 'all';
    var listHost = el('div', { class: 'grid grid-2' });
    var countLine = el('p', { class: 'count-line' });

    function draw() {
      var shown = judged.filter(function (j) {
        if (filter === 'all') return true;
        if (filter === 'ok') return j.verdict.status === 'ok';
        if (filter === 'notavoid') return j.verdict.status !== 'avoid';
        return true;
      });
      listHost.innerHTML = '';
      shown.forEach(function (j) { listHost.appendChild(dishItem(country, j.dish, j.verdict)); });
      countLine.textContent = 'Showing ' + shown.length + ' of ' + judged.length + ' dishes · ' +
        counts.ok + ' good fit, ' + counts.ask + ' worth asking about, ' + counts.avoid + ' to skip';
      if (!shown.length) {
        listHost.appendChild(el('div', { class: 'empty', style: 'grid-column:1/-1' }, [
          el('p', { text: 'Nothing in this list passes every rule you set.' }),
          el('p', { class: 'muted', text: 'Look at the "ask first" dishes instead: many can be adapted by leaving one ingredient out. The chains below are also safer bets than independent kitchens.' })
        ]));
      }
    }

    var filterButtons = [
      { id: 'all', label: 'Everything' },
      { id: 'notavoid', label: 'Hide the ones to skip' },
      { id: 'ok', label: 'Clean fits only' }
    ].map(function (f) {
      var btn = el('button', {
        type: 'button', class: 'chip', text: f.label, 'aria-pressed': f.id === 'all' ? 'true' : 'false',
        onclick: function () {
          filter = f.id;
          Array.prototype.forEach.call(this.parentNode.children, function (c) { c.setAttribute('aria-pressed', 'false'); });
          this.setAttribute('aria-pressed', 'true');
          draw();
        }
      });
      return btn;
    });
    draw();

    var nodes = [];

    nodes.push(ui.card([
      el('h2', { text: 'Eating in ' + country.name }),
      el('p', { class: 'prose', style: 'margin-top:8px', text: food.intro })
    ]));

    if (food.survival) {
      nodes.push(ui.card([
        el('h3', { text: food.survival.title }),
        el('p', { class: 'prose', style: 'margin-top:6px', text: food.survival.body })
      ], 'stripe stripe-ok'));
    }

    if (profile.isEmpty) {
      nodes.push(ui.card([
        el('div', { class: 'row' }, [
          el('p', { style: 'flex:1 1 240px;font-size:.92rem', text: 'Nobody is set up yet, so every dish shows as a clean fit. Add your allergies and food rules and this list will tell you which ones to avoid and which can be adapted.' }),
          el('a', { class: 'btn btn-primary', href: '#/travelers', text: 'Set food rules' })
        ])
      ], 'stripe stripe-accent no-print'));
    }

    nodes.push(el('div', {}, [
      el('div', { class: 'section-head' }, [
        el('h2', { text: 'Dishes, judged against your group' }),
        countLine
      ]),
      el('div', { class: 'chipset no-print', style: 'margin-bottom:12px' }, filterButtons),
      listHost
    ]));

    if (food.allergyCard) {
      var copy = ui.copyBlock(food.allergyCard.japanese || food.allergyCard.local, 'Copy the text');
      nodes.push(el('div', {}, [
        el('div', { class: 'section-head' }, [el('h2', { text: 'The card you show before ordering' })]),
        el('div', { class: 'showcard' }, [
          el('span', { class: 'showcard-label', text: 'Show this to the waiter' }),
          copy.body,
          el('p', { class: 'showcard-en', text: food.allergyCard.english }),
          el('div', { class: 'row no-print' }, [copy.button, copy.status])
        ]),
        el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:10px', text: food.allergyCard.intro }),
        food.allergyCard.words ? el('div', { class: 'card', style: 'margin-top:12px' }, [
          el('h3', { text: 'Words to drop into the blank' }),
          el('div', { class: 'table-scroll', style: 'margin-top:8px' }, [
            el('table', {}, [
              el('thead', {}, [el('tr', {}, [
                el('th', { text: 'English' }), el('th', { text: 'Local' }), el('th', { text: 'Say it' })
              ])]),
              el('tbody', {}, food.allergyCard.words.map(function (w) {
                return el('tr', {}, [
                  el('td', { text: w[0] }),
                  el('td', {}, [el('span', { class: 'mono', style: 'font-size:1rem', text: w[1] })]),
                  el('td', {}, [el('span', { class: 'muted', text: w[2] })])
                ]);
              }))
            ])
          ])
        ]) : null
      ]));
    }

    if (food.orderingWithoutLanguage) {
      nodes.push(ui.card([
        el('h2', { text: 'Ordering without the language' }),
        ui.bulletList(food.orderingWithoutLanguage)
      ]));
    }

    if (food.chains) {
      nodes.push(el('div', {}, [
        el('div', { class: 'section-head' }, [
          el('h2', { text: 'Reliable fallbacks' }),
          el('span', { class: 'muted', text: 'Predictable menus, pictures, and no conversation required' })
        ]),
        el('div', { class: 'grid grid-2' }, food.chains.map(function (ch) {
          return ui.card([
            el('strong', { style: 'font-family:var(--font-display)', text: ch.name }),
            el('p', { style: 'font-size:.88rem;margin-top:4px', text: ch.why })
          ]);
        }))
      ]));
    }

    if (food.phrases) {
      nodes.push(ui.card([
        el('h2', { text: 'Restaurant phrases' }),
        el('div', { style: 'margin-top:6px' }, food.phrases.map(function (p) {
          return el('div', { class: 'phrase' }, [
            el('span', { class: 'phrase-en', text: p.en }),
            el('span', { class: 'phrase-native', text: p.native }),
            el('span', { class: 'phrase-say', text: p.say })
          ]);
        }))
      ]));
    }

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* ------------------------------ activities ------------------------------ */
  function activityItem(country, act, verdict) {
    var meta = [ui.tag(act.energy + ' energy'), ui.tag(act.cost === 'free' ? 'free' : act.cost), ui.tag(act.hours)];
    if (act.indoor === true) meta.push(ui.tag('indoor'));
    else if (act.indoor === false) meta.push(ui.tag('outdoor'));
    if (act.bookAhead === 'required') meta.push(ui.tag('must book ahead'));
    else if (act.bookAhead === 'recommended') meta.push(ui.tag('book ahead'));
    if (act.wheelchair === true) meta.push(ui.tag('step-free'));
    if (act.stroller === true) meta.push(ui.tag('stroller fine'));

    return el('div', { class: 'item' }, [
      el('div', { class: 'item-head' }, [
        el('div', { class: 'item-name' }, [
          el('strong', { text: act.name }),
          el('span', { class: 'item-native', text: (act.native ? act.native + '  ·  ' : '') + act.city })
        ]),
        ui.statusChip(verdict.status, TRAVEL.engine.activityStatusLabel(verdict.status))
      ]),
      el('p', { class: 'item-why', text: act.blurb }),
      ui.reasonList(verdict.reasons),
      act.tips ? el('details', { style: 'font-size:.88rem' }, [
        el('summary', { style: 'cursor:pointer;color:var(--accent-ink);font-weight:500', text: 'Practical tips' }),
        el('div', { style: 'margin-top:8px' }, [ui.bulletList(act.tips)])
      ]) : null,
      el('div', { class: 'item-meta' }, meta),
      el('div', { class: 'item-actions' }, [
        el('span', { style: 'flex:1 1 auto' }),
        saveButton(country, act, 'activity')
      ])
    ]);
  }

  function activitiesSection(country) {
    var profile = TRAVEL.engine.profileSummary(TRAVEL.store.get());
    if (!country.activities) {
      return el('div', { class: 'stack' }, [
        ui.emptyState('The activity research for ' + country.name + ' has not been written yet.', 'Back to countries', '#/')
      ]);
    }

    var judged = country.activities.map(function (a) {
      return { act: a, verdict: TRAVEL.engine.judgeActivity(a, profile) };
    }).sort(function (a, b) { return a.verdict.score - b.verdict.score; });

    var counts = { ok: 0, ask: 0, avoid: 0 };
    judged.forEach(function (j) { counts[j.verdict.status]++; });

    var state = { status: 'all', setting: 'all' };
    var listHost = el('div', { class: 'grid grid-2' });
    var countLine = el('p', { class: 'count-line' });

    function draw() {
      var shown = judged.filter(function (j) {
        if (state.status === 'ok' && j.verdict.status !== 'ok') return false;
        if (state.status === 'notavoid' && j.verdict.status === 'avoid') return false;
        if (state.setting === 'indoor' && j.act.indoor !== true) return false;
        if (state.setting === 'outdoor' && j.act.indoor !== false) return false;
        if (state.setting === 'free' && j.act.cost !== 'free' && j.act.cost !== '¥') return false;
        if (state.setting === 'nobooking' && j.act.bookAhead === 'required') return false;
        return true;
      });
      listHost.innerHTML = '';
      shown.forEach(function (j) { listHost.appendChild(activityItem(country, j.act, j.verdict)); });
      countLine.textContent = 'Showing ' + shown.length + ' of ' + judged.length + ' · ' +
        counts.ok + ' fit your group, ' + counts.ask + ' need a check, ' + counts.avoid + ' do not work';
      if (!shown.length) {
        listHost.appendChild(el('div', { class: 'empty', style: 'grid-column:1/-1' }, [
          el('p', { text: 'Nothing matches those filters.' })
        ]));
      }
    }

    function chipRow(key, options) {
      return el('div', { class: 'chipset no-print' }, options.map(function (o) {
        return el('button', {
          type: 'button', class: 'chip', text: o.label,
          'aria-pressed': state[key] === o.id ? 'true' : 'false',
          onclick: function () {
            state[key] = o.id;
            Array.prototype.forEach.call(this.parentNode.children, function (c) { c.setAttribute('aria-pressed', 'false'); });
            this.setAttribute('aria-pressed', 'true');
            draw();
          }
        });
      }));
    }
    draw();

    var nodes = [];

    if (profile.isEmpty) {
      nodes.push(ui.card([
        el('div', { class: 'row' }, [
          el('p', { style: 'flex:1 1 240px;font-size:.92rem', text: 'Add ages, access needs and what your family enjoys, and this list reorders itself: minimum ages, stair warnings, stroller problems and heat exposure all get flagged against your actual group.' }),
          el('a', { class: 'btn btn-primary', href: '#/travelers', text: 'Set up travelers' })
        ])
      ], 'stripe stripe-accent no-print'));
    }

    nodes.push(el('div', {}, [
      el('div', { class: 'section-head' }, [
        el('h2', { text: 'Things to do, rated for your group' }),
        countLine
      ]),
      el('div', { class: 'stack-sm no-print', style: 'margin-bottom:14px' }, [
        el('div', {}, [
          el('span', { class: 'eyebrow', text: 'Fit' }),
          chipRow('status', [
            { id: 'all', label: 'Everything' },
            { id: 'notavoid', label: 'Hide what does not work' },
            { id: 'ok', label: 'Good fits only' }
          ])
        ]),
        el('div', {}, [
          el('span', { class: 'eyebrow', text: 'Narrow it down' }),
          chipRow('setting', [
            { id: 'all', label: 'Any' },
            { id: 'indoor', label: 'Indoor (rain or heat)' },
            { id: 'outdoor', label: 'Outdoor' },
            { id: 'free', label: 'Cheap or free' },
            { id: 'nobooking', label: 'No booking needed' }
          ])
        ])
      ]),
      listHost
    ]));

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* ------------------------------- language ------------------------------- */
  function languageSection(country) {
    var lang = country.language;
    if (!lang) {
      return el('div', { class: 'stack' }, [
        ui.card([
          el('h2', { text: 'Language' }),
          el('div', { style: 'margin-top:8px' }, [ui.specList([
            ['Spoken here', country.languages.join(', ')],
            ['English', country.englishPrevalence === 'widely' ? 'Widely spoken in tourist settings' :
              country.englishPrevalence === 'some' ? 'Some, mostly in cities and hotels' : 'Limited. Plan around it.']
          ])]),
          el('p', { class: 'prose', style: 'margin-top:12px', text: 'A written phrasebook for ' + country.name + ' has not been added yet. Until then: download the offline language pack in Google Translate, use camera mode on menus and signs, and screenshot the phrases you will need most so they work without signal.' })
        ])
      ]);
    }

    var nodes = [];

    nodes.push(ui.card([
      el('h2', { text: 'How the language works' }),
      el('p', { class: 'prose', style: 'margin-top:8px', text: lang.script }),
      lang.pronunciation ? el('p', { class: 'prose', style: 'margin-top:10px', text: lang.pronunciation }) : null,
      lang.politeness ? el('p', { class: 'prose', style: 'margin-top:10px', text: lang.politeness }) : null
    ]));

    (lang.phrasebook || []).forEach(function (group) {
      nodes.push(ui.card([
        el('h3', { text: group.group }),
        el('div', { style: 'margin-top:6px' }, group.items.map(function (p) {
          return el('div', { class: 'phrase' }, [
            el('span', { class: 'phrase-en', text: p.en }),
            el('span', { class: 'phrase-native', text: p.native }),
            el('span', { class: 'phrase-say', text: p.say })
          ]);
        }))
      ]));
    });

    if (lang.signs) {
      nodes.push(ui.card([
        el('h2', { text: 'Signs to recognise on sight' }),
        el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:4px', text: 'Learning to spot these shapes saves more trouble than learning to speak.' }),
        el('div', { class: 'table-scroll', style: 'margin-top:10px' }, [
          el('table', {}, [
            el('thead', {}, [el('tr', {}, [
              el('th', { text: 'Sign' }), el('th', { text: 'Reads as' }), el('th', { text: 'Means' })
            ])]),
            el('tbody', {}, lang.signs.map(function (s) {
              return el('tr', {}, [
                el('td', {}, [el('span', { class: 'sign-glyph', text: s[0] })]),
                el('td', {}, [el('span', { class: 'muted mono', text: s[1] })]),
                el('td', { text: s[2] })
              ]);
            }))
          ])
        ])
      ]));
    }

    if (lang.tips) {
      nodes.push(ui.card([
        el('h2', { text: 'Tricks that work' }),
        ui.bulletList(lang.tips)
      ], 'stripe stripe-ok'));
    }

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* -------------------------------- safety -------------------------------- */
  function safetySection(country) {
    var s = country.safety;
    var nodes = [emergencyBlock(country)];

    nodes.push(ui.card([
      el('h2', { text: 'Travel alerts, live' }),
      el('p', { class: 'prose', style: 'margin-top:6px', text: 'Advisory levels move without notice, so they are not stored here. These are the pages that carry the current level and the reason behind it.' }),
      el('div', { style: 'margin-top:10px' }, [ui.linkList(officialLinks(country))]),
      s && s.advisoryNote ? el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:10px', text: s.advisoryNote }) : null
    ], 'stripe stripe-accent'));

    if (s) {
      nodes.push(ui.card([
        el('h2', { text: 'What the real risks are' }),
        el('p', { class: 'prose', style: 'margin-top:8px', text: s.overall }),
        s.emergencyNotes ? el('p', { class: 'prose', style: 'margin-top:10px', text: s.emergencyNotes }) : null
      ]));

      if (s.hazards) {
        nodes.push(el('div', {}, [
          el('div', { class: 'section-head' }, [el('h2', { text: 'Hazards worth preparing for' })]),
          el('div', { class: 'grid grid-2' }, s.hazards.map(function (h) {
            return ui.card([
              el('h3', { text: h.name }),
              el('p', { style: 'font-size:.9rem;margin-top:6px', text: h.what })
            ], 'stripe stripe-ask');
          }))
        ]));
      }

      nodes.push(el('div', { class: 'grid grid-2' }, [
        s.scams ? ui.card([el('h3', { text: 'Scams and nuisances' }), ui.bulletList(s.scams)]) : null,
        s.lostAndFound ? ui.card([el('h3', { text: 'Losing something' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: s.lostAndFound })]) : null,
        s.withKids ? ui.card([el('h3', { text: 'With children' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: s.withKids })]) : null
      ].filter(Boolean)));
    } else {
      nodes.push(ui.card([
        el('h3', { text: 'Country-specific safety notes are not written yet' }),
        el('p', { class: 'prose', style: 'margin-top:6px', text: 'Use the live advisory pages above. They list crime patterns, regional restrictions and current threats, and they are updated far more often than any guide.' })
      ], 'stripe stripe-ask'));
    }

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* -------------------------------- health -------------------------------- */
  function healthSection(country) {
    var h = country.health;
    var nodes = [];

    nodes.push(ui.card([
      el('h2', { text: 'Water, food and vaccines' }),
      el('div', { style: 'margin-top:8px' }, [ui.specList([
        ['Tap water', h ? h.water : (country.tapWater === 'safe' ? 'Safe to drink.' :
          country.tapWater === 'caution' ? 'Usually fine in cities. Ask at your hotel, and use bottled water for infants.' :
          'Do not drink the tap water. Use bottled or filtered, skip ice, and avoid raw salad washed in tap water.')],
        ['Food hygiene', h ? h.food : 'Check the CDC page below for current guidance.'],
        ['Vaccines', h ? h.vaccines : 'Check the CDC destination page for the current list.']
      ])]),
      el('div', { style: 'margin-top:12px' }, [ui.linkList([
        { label: 'CDC destination page for ' + country.name, url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/' + (country.cdcSlug || country.advisorySlug) }
      ])])
    ]));

    if (h && h.medications) {
      nodes.push(ui.card([
        el('div', { class: 'section-head' }, [
          el('h2', { text: 'Medication rules' }),
          ui.statusChip('avoid', 'Read before packing')
        ]),
        el('p', { style: 'font-weight:600', text: h.medications.warning }),
        el('div', { style: 'margin-top:8px' }, [ui.bulletList(h.medications.points)]),
        h.medications.link ? el('div', { style: 'margin-top:10px' }, [ui.linkList([h.medications.link])]) : null
      ], 'stripe stripe-alert'));
    }

    if (h) {
      nodes.push(el('div', { class: 'grid grid-2' }, [
        h.pharmacy ? ui.card([el('h3', { text: 'Buying medicine there' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: h.pharmacy })]) : null,
        h.doctors ? ui.card([el('h3', { text: 'Seeing a doctor' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: h.doctors })]) : null,
        h.insurance ? ui.card([el('h3', { text: 'Insurance' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: h.insurance })]) : null,
        h.allergies ? ui.card([el('h3', { text: 'Allergies' }), el('p', { style: 'font-size:.9rem;margin-top:6px', text: h.allergies })], 'stripe stripe-ask') : null
      ].filter(Boolean)));
    }

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* -------------------------------- embassy ------------------------------- */
  function embassySection(country) {
    var e = country.embassy;
    var nodes = [];

    if (e && e.main) {
      var m = e.main;
      nodes.push(ui.card([
        el('div', { class: 'section-head' }, [el('h2', { text: m.name })]),
        el('p', { class: 'muted', style: 'font-size:.86rem', text: e.note }),
        el('div', { style: 'margin-top:10px' }, [ui.specList([
          ['Address', m.address],
          ['Phone', el('span', { class: 'mono', style: 'font-size:1rem', text: m.phone })],
          ['After hours', el('span', { class: 'mono', text: m.afterHours })],
          ['Email', el('span', { class: 'mono', text: m.email })],
          ['Covers', m.covers],
          ['Official site', ui.link(m.url, m.url)]
        ])])
      ], 'stripe stripe-accent'));

      if (e.others && e.others.length) {
        nodes.push(ui.card([
          el('h3', { text: 'Consulates elsewhere in the country' }),
          el('div', { class: 'stack-sm', style: 'margin-top:8px' }, e.others.map(function (o) {
            return el('div', {}, [
              el('p', {}, [ui.link(o.name, o.url)]),
              el('p', { class: 'muted', style: 'font-size:.86rem', text: o.note })
            ]);
          }))
        ]));
      }

      if (e.otherNationalities) {
        nodes.push(ui.card([
          el('h3', { text: 'Other nationalities' }),
          el('div', { style: 'margin-top:8px' }, [ui.linkList(e.otherNationalities.map(function (o) {
            return { label: o.country, url: o.url };
          }))])
        ]));
      }
    } else {
      nodes.push(ui.card([
        el('h2', { text: 'Your embassy in ' + country.name }),
        el('p', { class: 'prose', style: 'margin-top:8px', text: 'Exact addresses and phone numbers are not stored for this country, because they change and a wrong number in an emergency is worse than no number. The official site below always carries the current contact details, the after-hours duty officer line, and the consulates outside the capital.' }),
        el('div', { style: 'margin-top:12px' }, [ui.linkList(
          (country.embassyDomain ? [{ label: 'U.S. mission in ' + country.name, url: 'https://' + country.embassyDomain + '/' }] : [])
            .concat([
              { label: 'State Department: find a U.S. embassy', url: 'https://www.usembassy.gov/' },
              { label: 'UK: find a British embassy', url: 'https://www.gov.uk/world/embassies' },
              { label: 'Canada: find an office abroad', url: 'https://travel.gc.ca/assistance/embassies-consulates' }
            ])
        )])
      ], 'stripe stripe-accent'));
    }

    nodes.push(ui.card([
      el('h2', { text: 'Before you leave home' }),
      ui.bulletList([
        'Enroll every traveler in STEP (step.state.gov). It is free, takes five minutes, and is how the embassy contacts you during an evacuation or a disaster.',
        'Photograph every passport, both sides of every card you are carrying, insurance policies and prescriptions. Store them somewhere you can reach without your phone.',
        'Email the whole set to yourself and to someone at home who is not travelling.',
        'Write the embassy number and your hotel address on paper, in each adult\'s wallet. Phones get lost, stolen and drowned.',
        'Check your passports expire well after the trip. Some countries require six months of remaining validity, and airlines enforce it even where the country does not.'
      ])
    ]));

    nodes.push(ui.card([
      el('h3', { text: 'What an embassy will and will not do' }),
      el('div', { class: 'grid grid-2', style: 'margin-top:8px' }, [
        el('div', {}, [
          el('span', { class: 'eyebrow', text: 'They will' }),
          ui.bulletList([
            'Replace a lost or stolen passport, usually fast.',
            'Contact your family and help transfer money in an emergency.',
            'Give you a list of local English-speaking doctors and lawyers.',
            'Visit or contact you if you are arrested or hospitalised.',
            'Help during a natural disaster or civil unrest.'
          ])
        ]),
        el('div', {}, [
          el('span', { class: 'eyebrow', text: 'They will not' }),
          ui.bulletList([
            'Pay your medical, legal or hotel bills.',
            'Get you out of jail or interfere with local law.',
            'Investigate a crime or recover stolen property.',
            'Act as a travel agent, translator or bank.',
            'Store your luggage or hold your mail.'
          ])
        ])
      ])
    ]));

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* ------------------------------ getting around -------------------------- */
  function aroundSection(country) {
    var nodes = [];
    var t = country.transport;

    if (t) {
      nodes.push(ui.card([
        el('h2', { text: 'Getting around' }),
        el('p', { class: 'prose', style: 'margin-top:6px', text: t.headline }),
        el('div', { class: 'stack-sm', style: 'margin-top:12px' }, t.items.map(function (item) {
          return el('div', { style: 'padding-bottom:10px;border-bottom:1px solid var(--line)' }, [
            el('p', { style: 'font-family:var(--font-display);font-weight:600', text: item.name }),
            el('p', { style: 'font-size:.9rem;margin-top:3px', text: item.detail })
          ]);
        }))
      ]));
    }

    var m = country.money;
    if (m) {
      nodes.push(ui.card([
        el('h2', { text: 'Money' }),
        el('div', { style: 'margin-top:8px' }, [ui.specList([
          ['Currency', m.currency],
          ['Cards and cash', m.cards],
          ['ATMs', m.atms],
          ['Tipping', m.tipping],
          ['Tax refund', m.taxRefund]
        ])]),
        m.costs ? el('div', { style: 'margin-top:14px' }, [
          el('span', { class: 'eyebrow', text: 'What things cost, roughly' }),
          el('div', { class: 'table-scroll', style: 'margin-top:6px' }, [
            el('table', {}, [
              el('tbody', {}, m.costs.map(function (row) {
                return el('tr', {}, [el('td', { text: row[0] }), el('td', { class: 'num mono', text: row[1] })]);
              }))
            ])
          ]),
          el('p', { class: 'muted', style: 'font-size:.82rem;margin-top:6px', text: 'Indicative only. Prices move and these are not quotes.' })
        ]) : null
      ]));
    } else {
      nodes.push(ui.card([
        el('h2', { text: 'Money' }),
        el('div', { style: 'margin-top:8px' }, [ui.specList([
          ['Currency', country.currency],
          ['Plugs and power', (country.plugs || []).map(function (p) { return 'Type ' + p; }).join(', ') + ' · ' + country.voltage]
        ])])
      ]));
    }

    var c = country.connectivity;
    if (c) {
      nodes.push(ui.card([
        el('h2', { text: 'Staying connected' }),
        el('div', { style: 'margin-top:8px' }, [ui.specList([
          ['SIM and data', c.sim],
          ['Public wifi', c.wifi]
        ])]),
        c.apps ? el('div', { style: 'margin-top:14px' }, [
          el('span', { class: 'eyebrow', text: 'Apps that earn their space' }),
          el('div', { class: 'stack-sm', style: 'margin-top:6px' }, c.apps.map(function (a) {
            return el('div', {}, [
              el('strong', { style: 'font-size:.92rem', text: a.name }),
              el('p', { class: 'muted', style: 'font-size:.86rem', text: a.why })
            ]);
          }))
        ]) : null
      ]));
    }

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* --------------------------------- help --------------------------------- */
  function helpSection(country) {
    var nodes = [emergencyBlock(country)];

    if (country.scenarios) {
      nodes.push(el('div', {}, [
        el('div', { class: 'section-head' }, [
          el('h2', { text: 'If it goes wrong' }),
          el('span', { class: 'muted', text: 'Read these once now, not for the first time at 2am' })
        ]),
        el('div', { class: 'stack' }, country.scenarios.map(function (sc) {
          return ui.card([
            el('h3', { text: sc.situation }),
            el('ol', { style: 'margin-top:8px;font-size:.9rem' }, sc.steps.map(function (step) {
              return el('li', { text: step });
            }))
          ], 'stripe stripe-alert');
        }))
      ]));
    } else {
      nodes.push(ui.card([
        el('h2', { text: 'The universal version' }),
        el('div', { class: 'stack-sm', style: 'margin-top:10px' }, [
          el('div', {}, [el('h3', { text: 'Medical emergency' }), ui.bulletList([
            'Call the emergency number above. Say the location first, then "English please".',
            'Have your insurance policy number and any medication names ready on your phone and on paper.',
            'Ask your hotel to call ahead to a clinic for anything non-urgent. They will do it.'
          ])]),
          el('div', {}, [el('h3', { text: 'Lost or stolen passport' }), ui.bulletList([
            'Report it to local police and get the written report. Your embassy will ask for it.',
            'Contact your embassy the same day using the official link in the Embassy section.',
            'You will need photos, the police report and a fee.'
          ])]),
          el('div', {}, [el('h3', { text: 'Separated from a child' }), ui.bulletList([
            'Agree a meeting point every morning, and that a lost child stays put and finds a uniformed staff member.',
            'Put a card with your phone number and hotel name in each child\'s pocket.',
            'Photograph your children each morning so you can show what they are wearing.'
          ])])
        ])
      ], 'stripe stripe-alert'));
    }

    nodes.push(ui.card([
      el('h3', { text: 'Keep this reachable offline' }),
      el('p', { class: 'prose', style: 'margin-top:6px', text: 'Screenshot the emergency numbers and your embassy details before you fly. A dead battery, no signal in a basement or a stolen phone are exactly the moments you need them, and all three break an app.' })
    ]));

    return el('div', { class: 'stack-lg' }, nodes);
  }

  /* --------------------------------- shell -------------------------------- */
  var SECTIONS = {
    overview: overviewSection, food: foodSection, activities: activitiesSection,
    language: languageSection, safety: safetySection, health: healthSection,
    embassy: embassySection, around: aroundSection, help: helpSection
  };

  function render(params) {
    var country = TRAVEL.data.get(params.code);
    if (!country) {
      return ui.wrap([ui.emptyState('No country with the code "' + params.code + '".', 'Back to countries', '#/')]);
    }

    TRAVEL.store.update(function (s) { s.lastCountry = country.code; });

    var active = params.tab && SECTIONS[params.tab] ? params.tab : 'overview';
    var body = el('div', {});

    function drawBody() {
      body.innerHTML = '';
      body.appendChild(SECTIONS[active](country));
    }

    var board = el('div', { class: 'board no-print', role: 'tablist' }, TABS.map(function (t) {
      return el('button', {
        type: 'button', role: 'tab', 'aria-selected': t.id === active ? 'true' : 'false', text: t.label,
        onclick: function () {
          active = t.id;
          Array.prototype.forEach.call(this.parentNode.children, function (c) { c.setAttribute('aria-selected', 'false'); });
          this.setAttribute('aria-selected', 'true');
          if (global.history && global.history.replaceState) {
            global.history.replaceState(null, '', '#/country/' + country.code + '/' + t.id);
          }
          drawBody();
          global.scrollTo({ top: 0, behavior: 'auto' });
        }
      });
    }));

    drawBody();

    var savedCount = Object.keys(savedKey(country)).length;

    return ui.wrap([
      el('div', { class: 'dossier-head' }, [
        el('a', { class: 'muted no-print', href: '#/', style: 'font-size:.85rem;text-decoration:none', text: '← All countries' }),
        el('div', { class: 'dossier-title' }, [
          el('div', {}, [
            ui.eyebrow(country.region + (country.depth === 'full' ? ' · full guide' : ' · essentials')),
            el('h1', { text: country.name }),
            country.tagline ? el('p', { class: 'muted', style: 'max-width:60ch;margin-top:6px', text: country.tagline }) : null
          ]),
          savedCount ? el('a', { class: 'btn no-print', href: '#/trip', text: TRAVEL.util.plural(savedCount, 'item') + ' saved' }) : null
        ]),
        el('div', { class: 'quickfacts' }, [
          el('span', {}, [el('b', { text: 'Emergency' }), el('span', { class: 'mono', text: country.emergency.general || country.emergency.police || '—' })]),
          el('span', {}, [el('b', { text: 'Money' }), el('span', { text: country.currency })]),
          el('span', {}, [el('b', { text: 'Plugs' }), el('span', { text: (country.plugs || []).join('/') + ' · ' + country.voltage })]),
          el('span', {}, [el('b', { text: 'Water' }), el('span', { text: country.tapWater === 'safe' ? 'tap OK' : country.tapWater === 'caution' ? 'ask first' : 'bottled only' })]),
          el('span', {}, [el('b', { text: 'English' }), el('span', { text: country.englishPrevalence === 'widely' ? 'widely spoken' : country.englishPrevalence === 'some' ? 'some' : 'little' })])
        ])
      ]),
      board,
      body
    ]);
  }

  TRAVEL.views = TRAVEL.views || {};
  TRAVEL.views.country = render;
})(window);
