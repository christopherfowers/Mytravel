/* Prep: the countdown checklist, the document vault, and data export. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;
  var ui = TRAVEL.ui;

  var CHECKLIST = [
    { group: 'Two months out', items: [
      { id: 'passports', text: 'Check every passport expiry date', note: 'Some countries demand six months of validity beyond your return, and airlines enforce it even where the country does not. Renewals take weeks.' },
      { id: 'visa', text: 'Confirm visa or entry authorisation for every nationality in the group', note: 'Children need their own, and rules differ by passport even within one family.' },
      { id: 'meds-check', text: 'Check whether any prescription is restricted at the destination', note: 'This is the one that catches people out. Some everyday medicines are illegal in some countries, and permits take weeks.' },
      { id: 'book-popular', text: 'Book the attractions that sell out', note: 'Anything flagged "must book ahead" in the activities list.' },
      { id: 'insurance', text: 'Buy travel medical insurance', note: 'Check it covers the activities you actually plan to do, and that it covers children on the same policy.' }
    ] },
    { group: 'One month out', items: [
      { id: 'step', text: 'Enroll everyone in STEP so the embassy can reach you', note: 'step.state.gov, free, five minutes.' },
      { id: 'copies', text: 'Photograph passports, cards, insurance and prescriptions', note: 'Email the set to yourself and to someone staying home.' },
      { id: 'bank', text: 'Tell your bank and card issuer where you are going', note: 'And check the foreign transaction fee before you rely on a card.' },
      { id: 'esim', text: 'Buy an eSIM or arrange a pocket wifi device', note: 'Cheaper bought before you fly than at the airport counter.' },
      { id: 'advisory-1', text: 'Read the current travel advisory for your destination', note: 'Linked from every country page under Safety and alerts.' }
    ] },
    { group: 'Two weeks out', items: [
      { id: 'translate-pack', text: 'Download the offline translation pack for the local language', note: 'Camera translation then works without signal, in a basement, on a menu.' },
      { id: 'allergy-card', text: 'Screenshot the allergy card and the emergency phrases', note: 'A screenshot survives a dead data connection. An app does not.' },
      { id: 'maps-offline', text: 'Download offline maps for each city', note: 'Google Maps lets you download a region. Do it on hotel wifi.' },
      { id: 'meds-pack', text: 'Refill prescriptions and pack them in original labelled boxes', note: 'With a copy of the prescription, in carry-on, never checked.' },
      { id: 'kid-cards', text: 'Write a card for each child: your phone number and the hotel name', note: 'In the local language if your hotel will write it for you.' }
    ] },
    { group: 'The week before', items: [
      { id: 'cash', text: 'Order a small amount of local currency', note: 'Enough for a taxi and a meal on arrival, in case an ATM refuses your card.' },
      { id: 'check-in', text: 'Check in online and confirm seats together', note: 'Airlines split families who do not pay for seats. Check 24 hours out as well.' },
      { id: 'advisory-2', text: 'Re-read the advisory and any weather warnings', note: 'Typhoon, hurricane and monsoon seasons move fast.' },
      { id: 'hotel-address', text: 'Print the hotel address in the local language', note: 'A printed address beats a phone for the taxi at the other end.' },
      { id: 'plug-adapters', text: 'Pack the right plug adapters and a multi-USB charger', note: 'One adapter plus a power strip beats four adapters.' }
    ] },
    { group: 'In the carry-on', items: [
      { id: 'carry-meds', text: 'All medication, in original packaging' },
      { id: 'carry-docs', text: 'Passports, insurance card, printed emergency numbers' },
      { id: 'carry-change', text: 'One change of clothes per child' },
      { id: 'carry-snacks', text: 'Familiar snacks, enough for a delayed arrival' },
      { id: 'carry-charger', text: 'Charger, battery pack and the plug adapter' },
      { id: 'carry-entertain', text: 'Downloaded films and games, not streaming' }
    ] },
    { group: 'On arrival, first hour', items: [
      { id: 'arrive-sim', text: 'Activate the eSIM and confirm data works before leaving the airport' },
      { id: 'arrive-cash', text: 'Take out cash at an airport ATM' },
      { id: 'arrive-transit', text: 'Buy transit cards for everyone, including child fares' },
      { id: 'arrive-numbers', text: 'Save the local emergency number and the embassy number into every phone' },
      { id: 'arrive-photo', text: 'Photograph the hotel\'s business card' }
    ] }
  ];

  function render() {
    var state = TRAVEL.store.get();

    var progress = el('p', { class: 'count-line' });
    function refreshProgress() {
      var checked = TRAVEL.store.get().checked || {};
      var total = 0, done = 0;
      CHECKLIST.forEach(function (g) {
        g.items.forEach(function (i) { total++; if (checked[i.id]) done++; });
      });
      progress.textContent = done + ' of ' + total + ' done';
    }

    var groups = CHECKLIST.map(function (group) {
      return ui.card([
        el('h3', { text: group.group }),
        el('div', { class: 'check-group', style: 'margin-top:8px' }, group.items.map(function (item) {
          var row = el('label', { class: 'check-item' + (state.checked[item.id] ? ' done' : ''), for: 'chk-' + item.id }, [
            el('input', {
              type: 'checkbox', id: 'chk-' + item.id, checked: !!state.checked[item.id],
              onchange: function () {
                var on = this.checked;
                TRAVEL.store.update(function (s) { s.checked[item.id] = on; });
                if (on) row.classList.add('done'); else row.classList.remove('done');
                refreshProgress();
              }
            }),
            el('span', {}, [
              el('span', { text: item.text }),
              item.note ? el('small', { text: item.note }) : null
            ])
          ]);
          return row;
        }))
      ]);
    });
    refreshProgress();

    /* ------------------------------ data ------------------------------ */
    var exportArea = el('textarea', {
      id: 'export-json', readonly: true, rows: '6', style: 'font-family:var(--font-mono);font-size:.78rem',
      'aria-label': 'Your trip data as JSON'
    });
    exportArea.value = TRAVEL.store.exportJSON();

    var copyStatus = el('span', { class: 'muted', style: 'font-size:.82rem' });
    var copyBtn = el('button', {
      type: 'button', class: 'btn btn-sm',
      onclick: function () {
        exportArea.select();
        try {
          if (global.navigator.clipboard && global.navigator.clipboard.writeText) {
            global.navigator.clipboard.writeText(exportArea.value).then(function () {
              copyStatus.textContent = 'Copied. Paste it somewhere safe.';
            }, function () { copyStatus.textContent = 'Selected. Press copy on your keyboard.'; });
          } else {
            copyStatus.textContent = 'Selected. Press copy on your keyboard.';
          }
        } catch (err) {
          copyStatus.textContent = 'Selected. Press copy on your keyboard.';
        }
      }
    }, ['Copy my data']);

    var importArea = el('textarea', {
      id: 'import-json', rows: '4', placeholder: 'Paste previously exported trip data here',
      style: 'font-family:var(--font-mono);font-size:.78rem', 'aria-label': 'Paste trip data to restore'
    });
    var importStatus = el('span', { style: 'font-size:.84rem' });
    var importBtn = el('button', {
      type: 'button', class: 'btn btn-sm',
      onclick: function () {
        try {
          TRAVEL.store.importJSON(importArea.value);
          importStatus.textContent = 'Restored. Reloading the page.';
          importStatus.style.color = 'var(--ok)';
          TRAVEL.router.go('/prep');
          global.location.reload();
        } catch (err) {
          importStatus.textContent = 'That did not parse as trip data. Paste the whole block, including the braces.';
          importStatus.style.color = 'var(--avoid)';
        }
      }
    }, ['Restore from text']);

    var resetConfirm = el('div', { class: 'row', hidden: true }, []);
    var resetBtn = el('button', {
      type: 'button', class: 'btn btn-sm',
      onclick: function () { resetConfirm.hidden = false; this.hidden = true; }
    }, ['Erase everything']);
    resetConfirm.appendChild(el('span', { style: 'font-size:.86rem', text: 'Erase travelers, saved items and checklist progress?' }));
    resetConfirm.appendChild(el('button', {
      type: 'button', class: 'btn btn-sm',
      onclick: function () {
        TRAVEL.store.reset();
        global.location.hash = '#/';
        global.location.reload();
      }
    }, ['Yes, erase it']));
    resetConfirm.appendChild(el('button', {
      type: 'button', class: 'btn btn-sm',
      onclick: function () { resetConfirm.hidden = true; resetBtn.hidden = false; }
    }, ['Keep it']));

    return ui.wrap([
      el('div', { class: 'hero' }, [
        ui.eyebrow('Before you fly'),
        el('h1', { text: 'Prep' }),
        el('p', { text: 'A countdown that front-loads the things with a lead time: passports, visas, restricted medication and the attractions that sell out. Tick them off as you go; it is stored on this device.' })
      ]),

      el('div', { class: 'card stripe stripe-accent' }, [progress]),

      el('div', { class: 'grid grid-2', style: 'margin-top:18px' }, groups),

      el('div', { class: 'card', style: 'margin-top:26px' }, [
        el('h2', { text: 'Your data' }),
        el('p', { class: 'prose', style: 'margin-top:6px;font-size:.92rem', text: 'Everything lives in this browser only. Nothing is uploaded, and clearing your browser data will erase it. Copy the block below and keep it in a note if you want a backup, or to move your setup to another device.' }),
        el('div', { class: 'stack-sm', style: 'margin-top:12px' }, [
          el('div', { class: 'field' }, [
            el('label', { for: 'export-json', text: 'Export' }),
            exportArea,
            el('div', { class: 'row' }, [copyBtn, copyStatus])
          ]),
          el('hr', { class: 'divider' }),
          el('div', { class: 'field' }, [
            el('label', { for: 'import-json', text: 'Import' }),
            importArea,
            el('div', { class: 'row' }, [importBtn, importStatus])
          ]),
          el('hr', { class: 'divider' }),
          el('div', { class: 'row' }, [resetBtn, resetConfirm])
        ])
      ])
    ]);
  }

  TRAVEL.views = TRAVEL.views || {};
  TRAVEL.views.prep = render;
})(window);
