/* Country index: search, featured dossiers, and the full baseline list. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;
  var ui = TRAVEL.ui;

  function countryCard(country) {
    var depthFull = country.depth === 'full';
    return el('a', { class: 'country-card', href: '#/country/' + country.code }, [
      el('span', { class: 'country-card-top' }, [
        el('strong', { text: country.name }),
        el('span', { class: 'depth ' + (depthFull ? 'depth-full' : 'depth-basic'), text: depthFull ? 'Full guide' : 'Essentials' })
      ]),
      el('span', { class: 'meta', text: country.region + ' · ' + country.currency }),
      el('span', { class: 'meta', text: 'Language: ' + country.languages.slice(0, 2).join(', ') +
        (country.englishPrevalence === 'widely' ? ' · English widely spoken' :
         country.englishPrevalence === 'some' ? ' · Some English' : ' · Little English') })
    ]);
  }

  function render() {
    var state = TRAVEL.store.get();
    var profile = TRAVEL.engine.profileSummary(state);
    var all = TRAVEL.data.all();
    var full = all.filter(function (c) { return c.depth === 'full'; });

    var resultsHost = el('div', { class: 'country-grid' }, all.map(countryCard));
    var countLine = el('p', { class: 'count-line', text: TRAVEL.util.plural(all.length, 'country', 'countries') + ' available' });

    function runSearch(value) {
      var matches = TRAVEL.data.search(value);
      resultsHost.innerHTML = '';
      if (!matches.length) {
        resultsHost.appendChild(el('div', { class: 'empty', style: 'grid-column:1/-1' }, [
          el('p', { text: 'No country matches "' + value + '".' }),
          el('p', { class: 'muted', text: 'Try a city, a region, or a shorter spelling.' })
        ]));
      } else {
        matches.forEach(function (c) { resultsHost.appendChild(countryCard(c)); });
      }
      countLine.textContent = value
        ? TRAVEL.util.plural(matches.length, 'match', 'matches') + ' for "' + value + '"'
        : TRAVEL.util.plural(all.length, 'country', 'countries') + ' available';
    }

    var input = el('input', {
      type: 'search', id: 'country-search', placeholder: 'Japan, Kyoto, Southern Europe…',
      autocomplete: 'off', oninput: function () { runSearch(this.value); }
    });

    return ui.wrap([
      el('div', { class: 'hero' }, [
        ui.eyebrow('Plan a trip where you do not speak the language'),
        el('h1', { text: 'Pick a country. Get the parts that actually matter.' }),
        el('p', { text: 'Food your family will really eat, activities that suit your ages and limits, the embassy details, the live travel alerts, and enough of the language to get through a day. Set up your travelers once and every list below is judged against them.' })
      ]),

      ui.profileStrip(profile),

      el('div', { class: 'card', style: 'margin-top:18px' }, [
        el('div', { class: 'searchbar' }, [
          el('div', { class: 'field' }, [
            el('label', { for: 'country-search', text: 'Search a country, city or region' }),
            input
          ]),
          el('a', { class: 'btn btn-primary', href: '#/country/JP', text: 'Open Japan' })
        ]),
        full.length ? el('div', { style: 'margin-top:14px' }, [
          el('span', { class: 'eyebrow', text: 'Full guides, written out in detail' }),
          el('div', { class: 'chipset', style: 'margin-top:7px' }, full.map(function (c) {
            return el('a', { class: 'chip', href: '#/country/' + c.code, text: c.name });
          }))
        ]) : null
      ]),

      el('div', { style: 'margin-top:26px' }, [
        el('div', { class: 'section-head' }, [el('h2', { text: 'Countries' }), countLine]),
        resultsHost
      ]),

      el('div', { class: 'card stripe stripe-ask', style: 'margin-top:26px' }, [
        el('h3', { text: 'What "Essentials" means' }),
        el('p', { class: 'prose', style: 'margin-top:6px;font-size:.92rem' , text: 'Every country here carries the verified basics: emergency numbers, currency, plugs and voltage, how much English to expect, your embassy, and live links to the government travel advisory and health pages. Countries marked "Full guide" add the written-out dossier: dishes with every allergen tagged, activities rated for your group, a phrasebook, signage you need to recognise, and what to do when something goes wrong.' }),
        el('p', { class: 'muted', style: 'margin-top:8px;font-size:.88rem', text: 'Ask for any country to be upgraded to a full guide and it can be added.' })
      ])
    ]);
  }

  TRAVEL.views = TRAVEL.views || {};
  TRAVEL.views.home = render;
})(window);
