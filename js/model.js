/* Model: traveler profile vocabulary plus the engine that judges whether a
   dish or an activity fits the group, and says why. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;

  /* --------------------------- vocabulary ---------------------------- */

  // kind: 'allergy' is treated as a hard stop, including for traces.
  var DIET_RULES = [
    { id: 'vegetarian', label: 'Vegetarian', kind: 'restriction', group: 'What we do not eat',
      conflicts: ['meat', 'pork', 'beef', 'chicken', 'fish', 'raw_fish', 'shellfish', 'organ', 'insects', 'lard', 'gelatin', 'fish_broth'] },
    { id: 'vegan', label: 'Vegan', kind: 'restriction', group: 'What we do not eat',
      conflicts: ['meat', 'pork', 'beef', 'chicken', 'fish', 'raw_fish', 'shellfish', 'organ', 'insects', 'lard', 'gelatin', 'fish_broth', 'dairy', 'egg', 'honey'] },
    { id: 'no_pork', label: 'No pork', kind: 'restriction', group: 'What we do not eat', conflicts: ['pork', 'lard'] },
    { id: 'no_beef', label: 'No beef', kind: 'restriction', group: 'What we do not eat', conflicts: ['beef'] },
    { id: 'no_fish', label: 'No fish', kind: 'restriction', group: 'What we do not eat', conflicts: ['fish', 'raw_fish', 'fish_broth'] },
    { id: 'no_raw', label: 'Nothing raw', kind: 'restriction', group: 'What we do not eat',
      hint: 'Raw fish, rare meat, raw egg', conflicts: ['raw_fish', 'raw_meat', 'raw_egg'] },
    { id: 'no_organ', label: 'No organ meat', kind: 'restriction', group: 'What we do not eat', conflicts: ['organ'] },
    { id: 'no_insects', label: 'No insects', kind: 'restriction', group: 'What we do not eat', conflicts: ['insects'] },
    { id: 'halal', label: 'Halal', kind: 'restriction', group: 'Religious',
      hint: 'Flags pork, lard, alcohol and gelatin. Meat still needs a halal source.', conflicts: ['pork', 'lard', 'alcohol', 'gelatin'] },
    { id: 'kosher', label: 'Kosher', kind: 'restriction', group: 'Religious',
      hint: 'Flags pork, shellfish and meat-with-dairy dishes.', conflicts: ['pork', 'lard', 'shellfish', 'meat_dairy'] },
    { id: 'nut_allergy', label: 'Nut allergy', kind: 'allergy', group: 'Allergies', conflicts: ['nuts', 'peanuts'] },
    { id: 'peanut_allergy', label: 'Peanut allergy', kind: 'allergy', group: 'Allergies', conflicts: ['peanuts'] },
    { id: 'shellfish_allergy', label: 'Shellfish allergy', kind: 'allergy', group: 'Allergies', conflicts: ['shellfish'] },
    { id: 'fish_allergy', label: 'Fish allergy', kind: 'allergy', group: 'Allergies', conflicts: ['fish', 'raw_fish', 'fish_broth'] },
    { id: 'egg_allergy', label: 'Egg allergy', kind: 'allergy', group: 'Allergies', conflicts: ['egg', 'raw_egg'] },
    { id: 'dairy_allergy', label: 'Dairy allergy or lactose', kind: 'allergy', group: 'Allergies', conflicts: ['dairy'] },
    { id: 'soy_allergy', label: 'Soy allergy', kind: 'allergy', group: 'Allergies', conflicts: ['soy', 'soy_sauce'] },
    { id: 'sesame_allergy', label: 'Sesame allergy', kind: 'allergy', group: 'Allergies', conflicts: ['sesame'] },
    { id: 'gluten_free', label: 'Gluten free', kind: 'allergy', group: 'Allergies',
      hint: 'Soy sauce usually contains wheat, so noodle and sauce dishes get flagged.', conflicts: ['gluten', 'soy_sauce'] },
    { id: 'low_spice', label: 'Mild food only', kind: 'preference', group: 'Preferences', conflicts: ['spicy'] },
    { id: 'picky_plain', label: 'Someone eats only plain, familiar food', kind: 'preference', group: 'Preferences',
      hint: 'Keeps plain and kid-tested dishes at the top and flags the rest.', conflicts: [] },
    { id: 'no_alcohol', label: 'No alcohol', kind: 'restriction', group: 'Preferences', conflicts: ['alcohol'] }
  ];

  var MOBILITY = [
    { id: 'stroller', label: 'Traveling with a stroller' },
    { id: 'wheelchair', label: 'Wheelchair or scooter user' },
    { id: 'limitedWalking', label: 'Someone cannot walk far or stand long' },
    { id: 'noStairs', label: 'Stairs are a problem' },
    { id: 'motionSick', label: 'Someone gets motion sick' },
    { id: 'heatSensitive', label: 'Someone struggles in heat' },
    { id: 'crowdAverse', label: 'Big crowds are a problem' },
    { id: 'earlyBedtime', label: 'Early bedtime (young kids)' }
  ];

  var INTERESTS = [
    { id: 'nature', label: 'Nature and parks' },
    { id: 'animals', label: 'Animals and aquariums' },
    { id: 'history', label: 'History and ruins' },
    { id: 'museum', label: 'Museums' },
    { id: 'themepark', label: 'Theme parks' },
    { id: 'food', label: 'Food experiences' },
    { id: 'hands_on', label: 'Hands-on and workshops' },
    { id: 'religious', label: 'Temples and churches' },
    { id: 'views', label: 'Views and landmarks' },
    { id: 'shopping', label: 'Shopping and markets' },
    { id: 'water', label: 'Beaches and water' },
    { id: 'trains', label: 'Trains and transport' },
    { id: 'pop_culture', label: 'Anime, games, pop culture' },
    { id: 'relax', label: 'Slow days and relaxing' }
  ];

  var ENERGY_ORDER = { low: 1, moderate: 2, high: 3 };
  var LANG_LOAD = { easy: 1, some: 2, hard: 3 };

  TRAVEL.vocab = {
    diet: DIET_RULES, mobility: MOBILITY, interests: INTERESTS,
    dietById: function (id) {
      for (var i = 0; i < DIET_RULES.length; i++) if (DIET_RULES[i].id === id) return DIET_RULES[i];
      return null;
    },
    interestLabel: function (id) {
      for (var i = 0; i < INTERESTS.length; i++) if (INTERESTS[i].id === id) return INTERESTS[i].label;
      return id;
    }
  };

  /* ---------------------------- profile ------------------------------ */

  function activeDiet(state) {
    return DIET_RULES.filter(function (rule) { return !!state.diet[rule.id]; });
  }

  function ages(state) {
    return (state.travelers || [])
      .map(function (t) { return t.age === '' || t.age == null ? null : Number(t.age); })
      .filter(function (a) { return a != null && !isNaN(a); });
  }

  function profileSummary(state) {
    var list = ages(state);
    return {
      count: (state.travelers || []).length,
      youngest: list.length ? Math.min.apply(null, list) : null,
      oldest: list.length ? Math.max.apply(null, list) : null,
      hasKidUnder6: list.some(function (a) { return a < 6; }),
      hasKid: list.some(function (a) { return a < 13; }),
      hasTeen: list.some(function (a) { return a >= 13 && a < 18; }),
      hasSenior: list.some(function (a) { return a >= 70; }),
      diet: activeDiet(state),
      mobility: Object.keys(state.mobility || {}).filter(function (k) { return state.mobility[k]; }),
      interests: (state.prefs && state.prefs.interests) || [],
      energy: (state.prefs && state.prefs.energy) || 'any',
      languageComfort: (state.prefs && state.prefs.languageComfort) || 'none',
      isEmpty: !(state.travelers || []).length &&
        !Object.keys(state.diet || {}).some(function (k) { return state.diet[k]; })
    };
  }

  function has(profile, mobilityId) {
    return profile.mobility.indexOf(mobilityId) !== -1;
  }

  /* --------------------------- food engine --------------------------- */

  var TAG_LABEL = {
    meat: 'meat', pork: 'pork', beef: 'beef', chicken: 'chicken', fish: 'fish',
    raw_fish: 'raw fish', raw_meat: 'raw or rare meat', raw_egg: 'raw egg',
    shellfish: 'shellfish', organ: 'organ meat', insects: 'insects', lard: 'lard',
    gelatin: 'gelatin', fish_broth: 'fish-based broth', dairy: 'dairy', egg: 'egg',
    honey: 'honey', nuts: 'tree nuts', peanuts: 'peanuts', soy: 'soy', soy_sauce: 'soy sauce (contains wheat)',
    sesame: 'sesame', gluten: 'gluten', spicy: 'chili heat', alcohol: 'alcohol',
    meat_dairy: 'meat cooked with dairy'
  };

  function tagLabel(tag) { return TAG_LABEL[tag] || tag; }

  function rank(status) { return status === 'avoid' ? 3 : status === 'ask' ? 2 : 1; }
  function worse(a, b) { return rank(a) >= rank(b) ? a : b; }

  /** Judge one dish against the profile. Returns {status, reasons[], score}. */
  function judgeDish(dish, profile) {
    var reasons = [];
    var status = 'ok';
    var contains = dish.contains || [];
    var mayContain = dish.mayContain || [];
    var omit = dish.omit || {};

    profile.diet.forEach(function (rule) {
      var direct = rule.conflicts.filter(function (t) { return contains.indexOf(t) !== -1; });
      var hidden = rule.conflicts.filter(function (t) { return mayContain.indexOf(t) !== -1; });

      direct.forEach(function (tag) {
        if (omit[tag] && rule.kind !== 'allergy') {
          status = worse(status, 'ask');
          reasons.push({ level: 'ask', text: rule.label + ': contains ' + tagLabel(tag) + '. ' + omit[tag] });
        } else if (omit[tag] && rule.kind === 'allergy') {
          status = worse(status, 'ask');
          reasons.push({ level: 'ask', text: rule.label + ': contains ' + tagLabel(tag) + '. ' + omit[tag] +
            ' Confirm the kitchen can avoid traces before ordering.' });
        } else {
          status = 'avoid';
          reasons.push({ level: 'avoid', text: rule.label + ': contains ' + tagLabel(tag) + '.' });
        }
      });

      hidden.forEach(function (tag) {
        if (direct.indexOf(tag) !== -1) return;
        if (rule.kind === 'allergy') {
          status = 'avoid';
          reasons.push({ level: 'avoid', text: rule.label + ': often made with ' + tagLabel(tag) + ' even when it is not listed.' });
        } else {
          status = worse(status, 'ask');
          reasons.push({ level: 'ask', text: rule.label + ': may contain ' + tagLabel(tag) + '. Ask first.' });
        }
      });
    });

    var pickyOn = profile.diet.some(function (r) { return r.id === 'picky_plain'; });
    var traits = dish.traits || [];
    if (pickyOn && status === 'ok' && traits.indexOf('plain') === -1 && traits.indexOf('kid') === -1) {
      status = 'ask';
      reasons.push({ level: 'ask', text: 'Not a plain or familiar dish, so it may be a hard sell for a picky eater.' });
    }

    if (profile.hasKid && dish.spice >= 2 && !profile.diet.some(function (r) { return r.id === 'low_spice'; })) {
      reasons.push({ level: 'ask', text: 'Spicy enough that children often refuse it. Many places will make it mild on request.' });
      status = worse(status, 'ask');
    }

    if (status === 'ok') {
      if (traits.indexOf('kid') !== -1) reasons.push({ level: 'ok', text: 'Commonly a hit with children.' });
      if (traits.indexOf('plain') !== -1) reasons.push({ level: 'ok', text: 'Plain and familiar in flavour.' });
      if (!reasons.length) reasons.push({ level: 'ok', text: 'Nothing in your list conflicts with this dish.' });
    }

    var score = (status === 'ok' ? 0 : status === 'ask' ? 100 : 200);
    if (status === 'ok' && traits.indexOf('kid') !== -1) score -= 10;
    if (status === 'ok' && traits.indexOf('plain') !== -1) score -= 5;

    return { status: status, reasons: reasons, score: score };
  }

  /* ------------------------- activity engine ------------------------- */

  /** Judge one activity against the profile. Returns {status, reasons[], score, highlight}. */
  function judgeActivity(act, profile) {
    var reasons = [];
    var status = 'ok';
    var minAge = act.ages && act.ages.min ? act.ages.min : 0;

    if (minAge && profile.youngest != null && profile.youngest < minAge) {
      status = 'avoid';
      reasons.push({ level: 'avoid', text: 'Minimum age is ' + minAge + ' and your youngest traveler is ' + profile.youngest + '.' });
    }
    if (act.ages && act.ages.bestFrom && profile.youngest != null && profile.youngest < act.ages.bestFrom && status === 'ok') {
      status = 'ask';
      reasons.push({ level: 'ask', text: 'Works best from about age ' + act.ages.bestFrom + '. Younger children often lose interest.' });
    }

    if (has(profile, 'wheelchair')) {
      if (act.wheelchair === false) {
        status = 'avoid';
        reasons.push({ level: 'avoid', text: 'Not wheelchair accessible.' });
      } else if (act.wheelchair === 'partial') {
        status = worse(status, 'ask');
        reasons.push({ level: 'ask', text: 'Only partly accessible. ' + (act.accessNote || 'Check the route before you commit to it.') });
      } else if (act.wheelchair === true) {
        reasons.push({ level: 'ok', text: 'Step-free access.' });
      }
    }
    if (has(profile, 'stroller') && act.stroller === false) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Hard with a stroller. ' + (act.accessNote || 'A carrier is the easier option here.') });
    }
    if (has(profile, 'noStairs') && act.stairs) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Involves significant stairs.' });
    }
    if (has(profile, 'limitedWalking') && act.energy === 'high') {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'A lot of walking or standing. You flagged that as a problem.' });
    }
    if (has(profile, 'heatSensitive') && act.heatExposed) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Mostly outdoors with little shade. Go early or late in the day.' });
    }
    if (has(profile, 'crowdAverse') && act.crowded) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Gets very crowded. Early morning is usually calmer.' });
    }
    if (has(profile, 'motionSick') && act.motion) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Involves boats, winding roads or spinning rides.' });
    }
    if (has(profile, 'earlyBedtime') && act.evening) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'This is an evening activity, which clashes with an early bedtime.' });
    }

    if (profile.energy !== 'any' && ENERGY_ORDER[act.energy] > ENERGY_ORDER[profile.energy]) {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'More demanding than the pace you set (' + act.energy + ' vs ' + profile.energy + ').' });
    }

    if (profile.languageComfort === 'none' && act.language === 'hard') {
      status = worse(status, 'ask');
      reasons.push({ level: 'ask', text: 'Needs real language help. ' + (act.languageNote || 'Book an English-guided option or bring a translation app.') });
    } else if (act.language === 'easy') {
      reasons.push({ level: 'ok', text: 'Works fine without speaking the language.' });
    }

    var matched = (act.tags || []).filter(function (t) { return profile.interests.indexOf(t) !== -1; });
    var score = (status === 'ok' ? 0 : status === 'ask' ? 100 : 200) - matched.length * 12;
    if (status === 'ok' && matched.length) {
      reasons.unshift({ level: 'ok', text: 'Matches what you said you like: ' +
        matched.map(function (t) { return TRAVEL.vocab.interestLabel(t).toLowerCase(); }).join(', ') + '.' });
    }
    if (act.familyPick) score -= 6;

    return {
      status: status,
      reasons: reasons,
      score: score,
      highlight: status === 'ok' && matched.length > 0
    };
  }

  TRAVEL.engine = {
    profileSummary: profileSummary,
    judgeDish: judgeDish,
    judgeActivity: judgeActivity,
    tagLabel: tagLabel,
    statusLabel: function (status) {
      return status === 'ok' ? 'Good fit' : status === 'ask' ? 'Ask first' : 'Skip';
    },
    activityStatusLabel: function (status) {
      return status === 'ok' ? 'Fits' : status === 'ask' ? 'Check first' : 'Not for you';
    },
    langLoad: LANG_LOAD
  };
})(window);
