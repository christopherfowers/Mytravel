# Country data schema

Every country is a plain object registered with `window.TRAVEL.data.register({...})`.
Call it more than once with the same `code` and the objects merge, which is how
`data/countries/japan.js` splits itself into two halves.

Only `code`, `name` and the baseline fields are required. Every section below is
optional: the dossier view renders what exists and falls back gracefully when a
section is missing, so a partial country is useful immediately.

## Baseline fields

These come from `data/baseline.js` for all 86 countries and can be overridden by a
dossier.

```js
{
  code: 'JP',                       // ISO 3166-1 alpha-2, uppercase
  name: 'Japan',
  region: 'East Asia',
  currency: 'JPY (¥)',
  languages: ['Japanese'],
  englishPrevalence: 'limited',     // 'widely' | 'some' | 'limited'
  emergency: { police: '110', fireAmbulance: '119' },
  plugs: ['A', 'B'],
  voltage: '100V / 50-60Hz',
  drivingSide: 'left',              // 'left' | 'right'
  tapWater: 'safe',                 // 'safe' | 'caution' | 'avoid'
  embassyDomain: 'jp.usembassy.gov',
  advisorySlug: 'japan',            // builds the State Dept / CDC / FCDO URLs
  cities: ['Tokyo', 'Kyoto']        // also searchable
}
```

Recognised `emergency` keys, each rendered with a readable label: `general`,
`police`, `ambulance`, `fire`, `fireAmbulance`, `ambulanceFire`, `touristPolice`,
`mobile`, `alt`, `gendarmerie`.

## Dish

The suitability engine reads `contains`, `mayContain`, `omit`, `traits` and `spice`.
Everything else is display.

```js
{
  id: 'shio-ramen',                 // unique within the country
  name: 'Ramen (shio or shoyu)',
  native: 'ラーメン',
  romaji: 'rāmen',                  // optional transliteration
  blurb: 'One or two sentences on what it actually is.',
  contains: ['gluten', 'pork'],     // definitely in it
  mayContain: ['fish_broth'],       // often in it, unlabelled
  omit: {                           // tag -> how to ask for it without
    pork: 'Ask for "chāshū nuki".'
  },
  traits: ['plain', 'kid'],         // plain | kid | veg | cheap | street | adventurous
  spice: 0,                         // 0-3
  where: 'Ramen shops everywhere',
  order: 'Ordering advice shown under the verdict.',
  price: '¥'                        // local currency bands, free text
}
```

### Ingredient tags

Use only these; `validate.js` rejects unknown tags.

`meat` `pork` `beef` `chicken` `fish` `raw_fish` `raw_meat` `raw_egg` `shellfish`
`organ` `insects` `lard` `gelatin` `fish_broth` `dairy` `egg` `honey` `nuts`
`peanuts` `soy` `soy_sauce` `sesame` `gluten` `spicy` `alcohol` `meat_dairy`
`garlic` `coconut` `wheat`

Two of these carry non-obvious meaning and matter a lot:

- `fish_broth` — dashi, bonito, anchovy stock. Put it on anything whose stock is
  fish-based, including dishes that read as vegetarian.
- `soy_sauce` — flagged for gluten as well as soy, because brewed soy sauce
  contains wheat.

### How a verdict is reached

For each active rule on the traveler profile:

- A conflict in `contains` → **Skip**, unless `omit` names that tag, which
  downgrades it to **Ask first** with the instruction. For an allergy, `omit` still
  downgrades but adds a cross-contamination warning.
- A conflict in `mayContain` → **Skip** for an allergy, **Ask first** for a
  preference.

Then `picky_plain` flags anything without a `plain` or `kid` trait, and a `spice`
of 2+ is flagged when there are children in the group. Worst verdict wins.

## Activity

```js
{
  id: 'teamlab',
  name: 'teamLab Planets',
  native: 'チームラボプラネッツ',    // optional
  city: 'Tokyo (Toyosu)',
  blurb: 'What it is and why it is worth the time.',
  ages: { min: 0, bestFrom: 4 },    // min is a hard stop; bestFrom is a flag
  energy: 'moderate',               // low | moderate | high
  hours: '1.5 to 2 hours',
  indoor: true,                     // true | false | omit for 'both'
  cost: '¥¥',                       // 'free' or local bands
  language: 'easy',                 // easy | some | hard
  languageNote: 'Shown when language is hard.',
  stroller: false,                  // true | false | 'partial'
  wheelchair: 'partial',            // true | false | 'partial'
  accessNote: 'Shown when stroller/wheelchair raises a flag.',
  stairs: true,                     // optional booleans, each drives one check
  heatExposed: true,
  crowded: true,
  motion: true,                     // boats, winding roads, spinning rides
  evening: true,                    // clashes with an early bedtime
  bookAhead: 'required',            // no | recommended | required
  tags: ['hands_on', 'pop_culture'],// must be interest ids from js/model.js
  familyPick: true,                 // small ranking boost
  tips: ['Practical, specific, non-obvious.']
}
```

`tags` must come from `TRAVEL.vocab.interests`: `nature` `animals` `history`
`museum` `themepark` `food` `hands_on` `religious` `views` `shopping` `water`
`trains` `pop_culture` `relax`.

## Dossier sections

Each is optional and rendered on its own tab.

| Key | Shape |
| --- | --- |
| `tagline` | One line under the country name |
| `languageBarrier` | `{ level, summary, whatWorks[], hardMoments[] }` |
| `overview` | `{ intro, bestTime, avoidDates, timeZone, typicalTrip, withKids }` |
| `entry` | `{ note, rows: [[label, value]], links: [{label, url}] }` |
| `money` | `{ currency, cards, atms, tipping, taxRefund, costs: [[item, price]] }` |
| `connectivity` | `{ sim, wifi, apps: [{name, why}] }` |
| `transport` | `{ headline, items: [{name, detail}] }` |
| `etiquette` | `[{ rule, why }]` |
| `safety` | `{ overall, emergencyNotes, hazards: [{name, what}], scams[], lostAndFound, withKids, advisoryNote }` |
| `health` | `{ water, food, vaccines, medications: {warning, points[], link}, pharmacy, doctors, insurance, allergies }` |
| `embassy` | `{ country, note, main: {...}, others: [{name, note, url}], otherNationalities: [{country, url}] }` |
| `food` | `{ intro, survival: {title, body}, orderingWithoutLanguage[], allergyCard, dishes[], chains: [{name, why}], phrases[] }` |
| `activities` | `[Activity]` |
| `language` | `{ script, pronunciation, politeness, phrasebook: [{group, items}], signs: [[glyph, reads, means]], tips[] }` |
| `scenarios` | `[{ situation, steps[] }]` |
| `links` | `[{ label, url }]` |

### Allergy card

```js
allergyCard: {
  intro: 'When and how to use it.',
  japanese: '…',                    // or `local` for non-Japanese countries
  english: 'The translation, shown underneath.',
  words: [['Egg', '卵', 'tamago']]  // [english, local script, pronunciation]
}
```

### Phrase

Used in both `food.phrases` and `language.phrasebook[].items`:

```js
{ en: 'Not spicy, please', native: '辛くしないでください', say: 'ka-ra-ku shi-nai-de ku-da-sai' }
```

`say` is a pronunciation guide for an English speaker, not academic
romanisation — hyphenate syllables so it can be read aloud cold.

## What not to store

Advisory levels, entry fees, opening hours and embassy appointment rules move
faster than this file can. Link them through `links` and `advisorySlug` instead.
Store the stable facts: emergency numbers, plug types, what is in a dish, which
staircase has no handrail.
