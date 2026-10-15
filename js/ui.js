/* Shared render helpers used by every view. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var el = TRAVEL.dom.el;

  function wrap(children) {
    return el('div', { class: 'wrap' }, children);
  }

  function sectionHead(title, note, extra) {
    return el('div', { class: 'section-head' }, [
      el('h2', { text: title }),
      note ? el('span', { class: 'muted', text: note }) : null,
      extra || null
    ]);
  }

  function eyebrow(text) {
    return el('p', { class: 'eyebrow', text: text });
  }

  function statusChip(status, label) {
    var cls = status === 'ok' ? 'status-ok' : status === 'ask' ? 'status-ask' : status === 'avoid' ? 'status-avoid' : 'status-info';
    return el('span', { class: 'status ' + cls, text: label });
  }

  function tag(text) {
    return el('span', { class: 'tag', text: text });
  }

  function reasonList(reasons) {
    return el('ul', { class: 'reasons' }, reasons.map(function (r) {
      return el('li', {}, [
        el('span', { class: 'dot dot-' + r.level, 'aria-hidden': 'true' }),
        el('span', { text: r.text })
      ]);
    }));
  }

  /** dl of [label, value] pairs. Values may be strings or nodes. */
  function specList(rows) {
    var dl = el('dl', { class: 'specs' }, []);
    rows.forEach(function (row) {
      if (!row || row[1] == null || row[1] === '') return;
      var value = typeof row[1] === 'string' ? el('dd', { text: row[1] }) : el('dd', {}, [row[1]]);
      dl.appendChild(el('div', { class: 'spec' }, [el('dt', { text: row[0] }), value]));
    });
    return dl;
  }

  function card(children, cls) {
    return el('div', { class: 'card' + (cls ? ' ' + cls : '') }, children);
  }

  function link(label, url) {
    return el('a', { href: url, target: '_blank', rel: 'noopener noreferrer', text: label });
  }

  function linkList(links) {
    return el('ul', { class: 'stack-sm', style: 'list-style:none;padding:0' }, (links || []).map(function (l) {
      return el('li', {}, [link(l.label, l.url), el('span', { class: 'muted', text: ' ↗' })]);
    }));
  }

  function bulletList(items, cls) {
    return el('ul', { class: cls || '' }, (items || []).map(function (t) {
      return el('li', { text: t });
    }));
  }

  /** Copyable block: text plus a button that copies it. */
  function copyBlock(text, buttonLabel) {
    var status = el('span', { class: 'muted', style: 'font-size:.8rem' });
    var btn = el('button', {
      type: 'button', class: 'btn btn-sm no-print',
      onclick: function () {
        function fallback() {
          var range = document.createRange();
          range.selectNodeContents(body);
          var sel = global.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          status.textContent = 'Selected. Press copy on your keyboard.';
        }
        try {
          if (global.navigator.clipboard && global.navigator.clipboard.writeText) {
            global.navigator.clipboard.writeText(text).then(function () {
              status.textContent = 'Copied.';
            }, fallback);
          } else {
            fallback();
          }
        } catch (err) { fallback(); }
      }
    }, [buttonLabel || 'Copy']);
    var body = el('p', { class: 'showcard-native', text: text });
    return { body: body, button: btn, status: status };
  }

  function emptyState(message, actionLabel, href) {
    return el('div', { class: 'empty' }, [
      el('p', { text: message }),
      actionLabel ? el('a', { class: 'btn', href: href, text: actionLabel }) : null
    ]);
  }

  /** Short line describing who the filters are set for. */
  function profileStrip(profile) {
    var bits = [];
    if (profile.count) {
      bits.push(TRAVEL.util.plural(profile.count, 'traveler'));
      if (profile.youngest != null) bits.push('ages ' + profile.youngest + ' to ' + profile.oldest);
    }
    if (profile.diet.length) bits.push(profile.diet.map(function (d) { return d.label.toLowerCase(); }).join(', '));
    if (profile.mobility.length) bits.push(TRAVEL.util.plural(profile.mobility.length, 'access need'));

    if (!bits.length) {
      return el('div', { class: 'card stripe stripe-accent no-print' }, [
        el('div', { class: 'row' }, [
          el('div', { style: 'flex:1 1 260px;min-width:0' }, [
            el('strong', { text: 'Nothing is filtered yet.' }),
            el('p', { class: 'muted', style: 'font-size:.88rem', text: 'Add who is traveling and what they will not eat, and every food and activity list gets judged against your group.' })
          ]),
          el('a', { class: 'btn btn-primary', href: '#/travelers', text: 'Set up travelers' })
        ])
      ]);
    }
    return el('div', { class: 'card stripe stripe-accent no-print' }, [
      el('div', { class: 'row' }, [
        el('div', { style: 'flex:1 1 260px;min-width:0' }, [
          el('span', { class: 'eyebrow', text: 'Filtering for' }),
          el('p', { style: 'font-size:.92rem', text: bits.join(' · ') })
        ]),
        el('a', { class: 'btn btn-sm', href: '#/travelers', text: 'Change' })
      ])
    ]);
  }

  TRAVEL.ui = {
    wrap: wrap, sectionHead: sectionHead, eyebrow: eyebrow, statusChip: statusChip, tag: tag,
    reasonList: reasonList, specList: specList, card: card, link: link, linkList: linkList,
    bulletList: bulletList, copyBlock: copyBlock, emptyState: emptyState, profileStrip: profileStrip
  };
})(window);
