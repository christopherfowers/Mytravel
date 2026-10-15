/* Travelers: who is going, what they will not eat, what they cannot do.
   Everything here feeds the food and activity engines. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;
  var ui = TRAVEL.ui;

  function groupDietRules() {
    var groups = [];
    TRAVEL.vocab.diet.forEach(function (rule) {
      var found = null;
      groups.forEach(function (g) { if (g.name === rule.group) found = g; });
      if (!found) { found = { name: rule.group, rules: [] }; groups.push(found); }
      found.rules.push(rule);
    });
    return groups;
  }

  function render() {
    var state = TRAVEL.store.get();
    var impact = el('p', { class: 'count-line' });

    function refreshImpact() {
      var profile = TRAVEL.engine.profileSummary(TRAVEL.store.get());
      var dishes = 0, okDishes = 0, acts = 0, okActs = 0;
      TRAVEL.data.all().forEach(function (country) {
        if (country.depth !== 'full') return;
        ((country.food && country.food.dishes) || []).forEach(function (d) {
          dishes++;
          if (TRAVEL.engine.judgeDish(d, profile).status === 'ok') okDishes++;
        });
        (country.activities || []).forEach(function (a) {
          acts++;
          if (TRAVEL.engine.judgeActivity(a, profile).status === 'ok') okActs++;
        });
      });
      impact.textContent = 'Across the full guides: ' + okDishes + ' of ' + dishes +
        ' dishes are a clean fit, and ' + okActs + ' of ' + acts + ' activities suit your group.';
    }

    /* ----------------------------- travelers ----------------------------- */
    var listHost = el('div', { class: 'stack-sm' });

    function drawTravelers() {
      var current = TRAVEL.store.get().travelers;
      listHost.innerHTML = '';
      if (!current.length) {
        listHost.appendChild(el('p', { class: 'muted', style: 'font-size:.88rem',
          text: 'No travelers added. Ages drive the activity filtering, so add at least the youngest and oldest.' }));
      }
      current.forEach(function (t, index) {
        listHost.appendChild(el('div', { class: 'traveler-row' }, [
          el('div', { class: 'field' }, [
            el('label', { for: 'trav-name-' + index, text: 'Name or label' }),
            el('input', {
              type: 'text', id: 'trav-name-' + index, value: t.name || '', placeholder: 'Maya',
              oninput: function () {
                var v = this.value;
                TRAVEL.store.update(function (s) { s.travelers[index].name = v; });
              }
            })
          ]),
          el('div', { class: 'field', style: 'flex:0 0 100px' }, [
            el('label', { for: 'trav-age-' + index, text: 'Age' }),
            el('input', {
              type: 'number', id: 'trav-age-' + index, min: '0', max: '110', value: t.age == null ? '' : t.age,
              oninput: function () {
                var v = this.value;
                TRAVEL.store.update(function (s) { s.travelers[index].age = v === '' ? null : Number(v); });
                refreshImpact();
              }
            })
          ]),
          el('button', {
            type: 'button', class: 'btn btn-sm', 'aria-label': 'Remove traveler',
            onclick: function () {
              TRAVEL.store.update(function (s) { s.travelers.splice(index, 1); });
              drawTravelers();
              refreshImpact();
            }
          }, ['Remove'])
        ]));
      });
    }
    drawTravelers();

    /* ------------------------------- diet -------------------------------- */
    var dietCards = groupDietRules().map(function (group) {
      return ui.card([
        el('h3', { text: group.name }),
        el('div', { style: 'margin-top:6px' }, group.rules.map(function (rule) {
          var id = 'diet-' + rule.id;
          return el('label', { class: 'toggle-row', for: id }, [
            el('input', {
              type: 'checkbox', id: id, checked: !!state.diet[rule.id],
              onchange: function () {
                var on = this.checked;
                TRAVEL.store.update(function (s) { s.diet[rule.id] = on; });
                refreshImpact();
              }
            }),
            el('span', {}, [
              el('span', { text: rule.label }),
              rule.hint ? el('small', { text: rule.hint }) : null,
              rule.kind === 'allergy' ? el('small', { text: 'Treated as a hard stop, including hidden traces.' }) : null
            ])
          ]);
        }))
      ]);
    });

    /* ----------------------------- mobility ------------------------------ */
    var mobilityCard = ui.card([
      el('h3', { text: 'Access and limits' }),
      el('p', { class: 'muted', style: 'font-size:.85rem;margin-top:4px', text: 'These change which activities are flagged and why.' }),
      el('div', { style: 'margin-top:6px' }, TRAVEL.vocab.mobility.map(function (m) {
        var id = 'mob-' + m.id;
        return el('label', { class: 'toggle-row', for: id }, [
          el('input', {
            type: 'checkbox', id: id, checked: !!state.mobility[m.id],
            onchange: function () {
              var on = this.checked;
              TRAVEL.store.update(function (s) { s.mobility[m.id] = on; });
              refreshImpact();
            }
          }),
          el('span', { text: m.label })
        ]);
      }))
    ]);

    /* ---------------------------- preferences ---------------------------- */
    var interestChips = el('div', { class: 'chipset' }, TRAVEL.vocab.interests.map(function (i) {
      var on = (state.prefs.interests || []).indexOf(i.id) !== -1;
      var btn = el('button', {
        type: 'button', class: 'chip', 'aria-pressed': on ? 'true' : 'false', text: i.label,
        onclick: function () {
          var nowOn = this.getAttribute('aria-pressed') !== 'true';
          this.setAttribute('aria-pressed', nowOn ? 'true' : 'false');
          TRAVEL.store.update(function (s) {
            var list = s.prefs.interests || [];
            if (nowOn) { if (list.indexOf(i.id) === -1) list.push(i.id); }
            else { list = list.filter(function (x) { return x !== i.id; }); }
            s.prefs.interests = list;
          });
          refreshImpact();
        }
      });
      return btn;
    }));

    var prefsCard = ui.card([
      el('h3', { text: 'How you want to travel' }),
      el('div', { class: 'grid grid-2', style: 'margin-top:10px' }, [
        el('div', { class: 'field' }, [
          el('label', { for: 'pref-energy', text: 'Pace you can sustain' }),
          el('select', {
            id: 'pref-energy',
            onchange: function () {
              var v = this.value;
              TRAVEL.store.update(function (s) { s.prefs.energy = v; });
              refreshImpact();
            }
          }, [
            el('option', { value: 'any', selected: state.prefs.energy === 'any', text: 'Anything goes' }),
            el('option', { value: 'low', selected: state.prefs.energy === 'low', text: 'Easy: short days, lots of sitting' }),
            el('option', { value: 'moderate', selected: state.prefs.energy === 'moderate', text: 'Moderate: a few hours of walking' }),
            el('option', { value: 'high', selected: state.prefs.energy === 'high', text: 'High: full days, hills and stairs fine' })
          ])
        ]),
        el('div', { class: 'field' }, [
          el('label', { for: 'pref-lang', text: 'Language ability in the destination' }),
          el('select', {
            id: 'pref-lang',
            onchange: function () {
              var v = this.value;
              TRAVEL.store.update(function (s) { s.prefs.languageComfort = v; });
              refreshImpact();
            }
          }, [
            el('option', { value: 'none', selected: state.prefs.languageComfort === 'none', text: 'None at all' }),
            el('option', { value: 'some', selected: state.prefs.languageComfort === 'some', text: 'A few phrases' }),
            el('option', { value: 'good', selected: state.prefs.languageComfort === 'good', text: 'Conversational' })
          ])
        ])
      ]),
      el('div', { style: 'margin-top:14px' }, [
        el('label', { text: 'What your family actually enjoys' }),
        el('div', { style: 'margin-top:6px' }, [interestChips])
      ])
    ]);

    refreshImpact();

    return ui.wrap([
      el('div', { class: 'hero' }, [
        ui.eyebrow('Step one'),
        el('h1', { text: 'Who is traveling' }),
        el('p', { text: 'This stays on your device. Nothing is sent anywhere. Fill in as much as you want: every field you set makes the food and activity lists more honest about what will and will not work for your group.' })
      ]),

      el('div', { class: 'card stripe stripe-accent' }, [impact]),

      el('div', { class: 'stack', style: 'margin-top:18px' }, [
        ui.card([
          el('h3', { text: 'Travelers' }),
          el('p', { class: 'muted', style: 'font-size:.85rem;margin-top:4px', text: 'Ages decide minimum-age warnings and which activities get flagged as too much for a young child.' }),
          el('div', { style: 'margin-top:10px' }, [listHost]),
          el('button', {
            type: 'button', class: 'btn', style: 'margin-top:10px',
            onclick: function () {
              TRAVEL.store.update(function (s) { s.travelers.push({ name: '', age: null }); });
              drawTravelers();
            }
          }, ['Add a traveler'])
        ]),

        el('div', {}, [
          el('div', { class: 'section-head' }, [
            el('h2', { text: 'Food rules' }),
            el('span', { class: 'muted', text: 'Allergies are hard stops. Preferences are flagged, not hidden.' })
          ]),
          el('div', { class: 'grid grid-2' }, dietCards)
        ]),

        el('div', { class: 'grid grid-2' }, [mobilityCard, prefsCard]),

        el('div', { class: 'row' }, [
          el('a', { class: 'btn btn-primary', href: '#/', text: 'Done, pick a country' }),
          el('a', { class: 'btn', href: '#/prep', text: 'Export or reset this data' })
        ])
      ])
    ]);
  }

  TRAVEL.views = TRAVEL.views || {};
  TRAVEL.views.travelers = render;
})(window);
