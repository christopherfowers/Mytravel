#!/usr/bin/env bash
# Verifies the government URLs the app generates for every country.
#
# travel.state.gov blocks datacenter and bot traffic, so it returns 403 for every
# slug including ones that certainly exist. Those are reported but not counted as
# failures: run this from a residential connection to check them properly.
#
# Usage: tools/check-links.sh [--state]
set -uo pipefail
cd "$(dirname "$0")/.."

SLUGS=$(node -e '
const reg = [];
global.window = { TRAVEL: { data: {
  registerBaseline: l => l.forEach(c => reg.push(c)),
  register: c => { const i = reg.findIndex(x => x.code === c.code); if (i >= 0) Object.assign(reg[i], c); }
} } };
require("./data/baseline.js");
require("fs").readdirSync("./data/countries").forEach(f => require("./data/countries/" + f));
// "-" marks a source this country deliberately does not link (e.g. the UK FCDO
// publishes no advice about the UK), so the checker skips it rather than flagging it.
const slug = (c, key) => {
  const v = c[key] === undefined ? c.advisorySlug : c[key];
  return v || "-";
};
reg.forEach(c => console.log([
  c.code, slug(c, "stateSlug"), slug(c, "cdcSlug"), slug(c, "fcdoSlug"), slug(c, "gcSlug")
].join(" ")));
')

fail=0; checked=0; blocked=0

check() { # url label
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 "$1")
  checked=$((checked + 1))
  if [ "$code" = "200" ]; then return 0; fi
  if [ "$code" = "403" ] && [[ "$1" == *travel.state.gov* ]]; then
    blocked=$((blocked + 1)); return 0
  fi
  echo "  BROKEN $2 -> $code"
  echo "         $1"
  fail=$((fail + 1))
}

echo "Checking government links for every country..."
while read -r code state cdc fcdo gc; do
  [ -z "$code" ] && continue
  if [ "${1:-}" = "--state" ] && [ "$state" != "-" ]; then
    check "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${state}-travel-advisory.html" "$code state"
  fi
  [ "$cdc"  != "-" ] && check "https://wwwnc.cdc.gov/travel/destinations/traveler/none/${cdc}" "$code cdc"
  [ "$fcdo" != "-" ] && check "https://www.gov.uk/foreign-travel-advice/${fcdo}"               "$code fcdo"
  [ "$gc"   != "-" ] && check "https://travel.gc.ca/destinations/${gc}"                        "$code canada"
  true
done <<< "$SLUGS"

echo
if [ "${1:-}" = "--state" ]; then
  echo "$checked checked, $fail broken, $blocked blocked by travel.state.gov (inconclusive)"
else
  echo "$checked checked, $fail broken; travel.state.gov skipped (pass --state to include it)"
fi
[ "$fail" -gt 0 ] && exit 1
echo "All reachable links OK."
