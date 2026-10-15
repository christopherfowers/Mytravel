/* My trip: everything saved from the dossiers, assignable to days. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;
  var ui = TRAVEL.ui;

  function allSaved() {
    var saved = TRAVEL.store.get().saved || {};
    var out = [];
    Object.keys(saved).forEach(function (code) {
      var country = TRAVEL.data.get(code);
      Object.keys(saved[code]).forEach(function (itemId) {
        var entry = saved[code][itemId];
        out.push({
          code: code, countryName: country ? country.name : code,
          id: itemId, name: entry.name, type: entry.type, day: entry.day || null
        });
      });
    });
    return out;
  }

  function dayCount(state) {
    return (state.notes && state.notes.tripDays) ? Number(state.notes.tripDays) : 7;
  }

  function render() {
    var state = TRAVEL.store.get();
    var items = allSaved();
    var host = el('div', { class: 'stack' });

    function draw() {
      var current = allSaved();
      var days = dayCount(TRAVEL.store.get());
      host.innerHTML = '';

      if (!current.length) {
        host.appendChild(ui.emptyState(
          'Nothing saved yet. Open a country, then press "Save to trip" on the dishes and activities you want.',
          'Pick a country', '#/'));
        return;
      }

      function itemRow(item) {
        var options = [el('option', { value: '', selected: !item.day, text: 'Unassigned' })];
        for (var d = 1; d <= days; d++) {
          options.push(el('option', { value: String(d), selected: Number(item.day) === d, text: 'Day ' + d }));
        }
        return el('div', { class: 'saved-item' }, [
          el('div', { class: 'saved-item-main' }, [
            el('strong', { text: item.name }),
            el('span', { class: 'muted', style: 'font-size:.8rem',
              text: item.countryName + ' · ' + (item.type === 'food' ? 'food' : 'activity') })
          ]),
          el('div', { class: 'row no-print', style: 'gap:6px;flex:none' }, [
            el('select', {
              'aria-label': 'Assign ' + item.name + ' to a day',
              style: 'width:auto;font-size:.82rem;padding:5px 7px',
              onchange: function () {
                var v = this.value;
                TRAVEL.store.update(function (s) {
                  s.saved[item.code][item.id].day = v === '' ? null : Number(v);
                });
                draw();
              }
            }, options),
            el('button', {
              type: 'button', class: 'btn btn-sm', 'aria-label': 'Remove ' + item.name,
              onclick: function () {
                TRAVEL.store.update(function (s) { delete s.saved[item.code][item.id]; });
                if (TRAVEL.refreshTripCount) TRAVEL.refreshTripCount();
                draw();
              }
            }, ['Remove'])
          ])
        ]);
      }

      var unassigned = current.filter(function (i) { return !i.day; });

      host.appendChild(ui.card([
        el('div', { class: 'row' }, [
          el('div', { class: 'field no-print', style: 'flex:0 0 190px' }, [
            el('label', { for: 'trip-days', text: 'How many days?' }),
            el('input', {
              type: 'number', id: 'trip-days', min: '1', max: '30', value: String(days),
              onchange: function () {
                var v = Math.max(1, Math.min(30, Number(this.value) || 7));
                TRAVEL.store.update(function (s) {
                  s.notes = s.notes || {};
                  s.notes.tripDays = v;
                });
                draw();
              }
            })
          ]),
          el('p', { class: 'count-line', style: 'flex:1 1 200px',
            text: TRAVEL.util.plural(current.length, 'saved item') + ' · ' + unassigned.length + ' not yet placed' })
        ])
      ]));

      if (unassigned.length) {
        host.appendChild(ui.card([
          el('h3', { text: 'Not placed yet' }),
          el('div', { class: 'saved', style: 'margin-top:8px' }, unassigned.map(itemRow))
        ], 'stripe stripe-ask'));
      }

      var dayCards = [];
      for (var d = 1; d <= days; d++) {
        (function (dayNum) {
          var onThisDay = current.filter(function (i) { return Number(i.day) === dayNum; });
          dayCards.push(ui.card([
            el('div', { class: 'day-head' }, [
              el('h3', { text: 'Day ' + dayNum }),
              el('span', { class: 'muted', style: 'font-size:.82rem',
                text: onThisDay.length ? TRAVEL.util.plural(onThisDay.length, 'item') : 'empty' })
            ]),
            onThisDay.length
              ? el('div', { class: 'saved', style: 'margin-top:6px' }, onThisDay.map(itemRow))
              : el('p', { class: 'muted', style: 'font-size:.86rem;margin-top:6px', text: 'Nothing planned. One activity plus one meal is a realistic day with children.' })
          ]));
        })(d);
      }
      host.appendChild(el('div', { class: 'grid grid-2' }, dayCards));
    }

    draw();

    return ui.wrap([
      el('div', { class: 'hero' }, [
        ui.eyebrow('Your plan'),
        el('h1', { text: 'My trip' }),
        el('p', { text: 'Everything you saved, in one place, assignable to days. Use your browser\'s print command to get a paper copy with the controls stripped out.' })
      ]),
      host,
      el('div', { class: 'card stripe stripe-accent no-print', style: 'margin-top:20px' }, [
        el('h3', { text: 'A realistic day' }),
        ui.bulletList([
          'One major activity per day with young children, two at most. Travel between them eats more time than you think.',
          'Put the thing everyone is excited about early in the trip, before anyone is tired or ill.',
          'Leave one empty day in the middle. You will need it, for weather, jet lag or recovery.',
          'Book the things marked "must book ahead" before you leave home. Several sell out weeks in advance.'
        ])
      ])
    ]);
  }

  TRAVEL.views = TRAVEL.views || {};
  TRAVEL.views.trip = render;
})(window);
