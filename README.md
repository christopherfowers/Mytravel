# Trip Dossier

A family travel planning tool for countries where you don't speak the language.

Pick a country and get the parts that actually matter: food your family will really
eat, activities that suit your ages and limits, your embassy, the live travel
alerts, and enough of the language to get through a day.

It is a static site. No build step, no server, no accounts, no network calls.
Everything you enter stays in your browser.

## Run it

Open `index.html` in a browser. That's it — it works from the filesystem.

To serve it properly (recommended, and required if you want to host it):

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's in it

**86 countries** carry the verified basics: emergency numbers, currency, plugs and
voltage, how much English to expect, tap water, your embassy, and deep links to the
live US / UK / Canadian travel advisories and the CDC health page.

**8 countries have a full dossier** — Japan, Italy, Spain, Portugal, Mexico, Costa
Rica, Thailand and South Korea — covering:

| Section | What it holds |
| --- | --- |
| Overview | What to expect, when to go, entry rules, etiquette, the language barrier |
| Food | Every dish tagged by ingredient, judged against your family's rules |
| Activities | Rated for your ages, mobility, pace and interests |
| Language | Phrasebook with pronunciation, signs to recognise, an allergy card to show |
| Safety & alerts | Real hazards, scams, live advisory links |
| Health | Water, vaccines, pharmacies, and medication that is illegal to bring |
| Embassy & papers | Contacts, what an embassy will and won't do, document checklist |
| Getting around | Transport, money, connectivity, apps worth installing |
| If it goes wrong | Step-by-step for illness, theft, lost passport, natural hazards |

That's 136 dishes, 95 activities, 178 phrases, 120 signs and 37 emergency scenarios.

## How the filtering works

Set up your travelers once (`#/travelers`) and every list is judged against them.

- **Allergies are hard stops**, including hidden traces. A dish whose broth is
  usually made with fish is marked *Skip* for a fish allergy even when fish isn't
  an ingredient.
- **Preferences are flagged, not hidden**, with the reason and, where it exists,
  the phrase that adapts the dish ("ask for it without the pork").
- **Activities** check minimum ages, stroller and wheelchair access, stairs, heat
  exposure, crowds, evening timing, and how much language you need.

Nothing is ever silently filtered away. Every verdict shows its reasoning.

## Why advisory levels aren't stored

Advisory levels, entry requirements and embassy hours change constantly, and a
stale number in an emergency is worse than no number. The app deep-links the
government page for each country instead of copying it. The facts that *are*
stored are the stable ones: emergency numbers, plug types, what's in a dish.

Verify anything consequential on the official link before you travel.

## Where the content came from

Every word of it was researched and written by hand, from knowledge rather than
from a feed. There is no API behind this and the app makes no network calls at
runtime — open it with the Wi-Fi off and everything still works. The only
outbound request on the page is the Google Fonts stylesheet.

That means the stored content is a point-in-time snapshot and will drift. The
things least likely to drift are the ones chosen for storage: emergency numbers,
plug types, what is in a dish, which staircase has no handrail. Prices, opening
hours and entry rules are the ones to re-check, and each is marked as indicative
where it appears.

Anything that moves weekly is deep-linked to the government page that owns it
rather than copied. Run `tools/check-links.sh` to verify those links still
resolve.

## Adding a country

Country data is plain JavaScript, one file per country, with no build step. See
[`docs/SCHEMA.md`](docs/SCHEMA.md) for the full shape, and `data/countries/japan.js`
as the reference implementation.

1. Write `data/countries/<name>.js` calling `window.TRAVEL.data.register({...})`.
2. Add a `<script>` tag for it in `index.html`.
3. Reload. A country registered this way is automatically marked a full guide.

Baseline entries for the other 78 countries live in `data/baseline.js`.

## Layout

```
index.html              app shell and script order
css/app.css             design tokens and all styling
js/core.js              store, router, DOM helpers, country registry
js/model.js             diet/mobility vocabulary and the suitability engine
js/ui.js                shared render helpers
js/views/               home, travelers, country, trip, prep
data/baseline.js        86 countries of verified essentials
data/countries/*.js     full dossiers
tools/build-artifact.js builds a single-page version for publishing
docs/SCHEMA.md          the country data contract
```

## Data and privacy

Travelers, saved items and checklist progress are held in `localStorage` on the
device you used. Nothing is uploaded and nothing is shared between devices. Export
a copy from the Prep page if you want a backup or want to move it to a phone.
