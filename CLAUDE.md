# TacoTown Recipes

Personal family recipe site (named after our cat Taco). Plain HTML/CSS/JS on GitHub Pages —
**no build step, no framework, no dependencies.**

- Repo: `datawithlogic/degrood-recipes` · Live: https://datawithlogic.github.io/degrood-recipes/
  (the "degrood" slug is intentional — renaming breaks shared links)
- New recipes often start as notes in the Obsidian vault:
  `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Recipes/`

## Layout

- `index.html` — home: sidebar tree nav, card grid, inline-SVG hero of our two cats
- `recipe.html` — single recipe view (`?slug=`); contains the batch-scaling engine
  (between the `Scaling engine` and `Page state` banners)
- `style.css` — all styling
- `data/categories.js` — `CATEGORIES` taxonomy
- `data/manifest.js` — `const RECIPES = []` plus `RECIPE_FILES` (slug list; order = home-page order)
- `data/recipes/<slug>.js` — one recipe per file, each does `RECIPES.push({...})`.
  **Filename must equal slug.**

Both HTML pages load categories + manifest, then `document.write` a `<script>` per manifest entry.

### Edit rules

- Edit a recipe → touch only its file. Add → new file + one manifest line. Remove → drop the
  manifest line and move the file to `_to_delete/` (James deletes it).
- `manifest.js` and `categories.js` are shared by every session. Read-modify-write them with a
  surgical edit; never rewrite them from an earlier snapshot. Check the file hasn't changed
  since you read it before writing.
- Prefer targeted string edits over regenerating whole files.

## Categories (source of truth: `data/categories.js`)

Breakfast · **Mains** (Beef/Chicken/Pork/Seafood/Pasta) · Sides · Soups ·
**Bread** (Sourdough/Loafs/Pastries/Savory) · Sweets · Sauces ·
**Coffee** (Espresso/Iced/Specialty/Brewed)

Only Mains, Bread and Coffee take a `subcat`. Don't invent categories and never add an "Other"
bucket — new ones only when James asks.

## Recipe entry

```js
RECIPES.push({
  slug: 'kebab-case-unique',
  title: 'Display Title',
  category: 'Mains',
  subcat: 'Beef',                 // only for categories with subcats
  description: 'One or two sentences.',
  yield: 'Serves 4', time: '~20 min', skill: 'Easy',  // Easy | Intermediate | Advanced
  ingredients: [
    { section: 'Optional group heading' },
    { item: 'Ingredient name', grams: '454 g', practical: '1 lb' },
    { note: 'Optional inline callout' },
  ],
  steps: [
    { title: 'Step title', body: 'Instructions.',
      checkpoint: 'Sensory cue that it worked',  // optional
      why: 'Why this matters' },                 // optional, use sparingly
  ],
  notes: ['Optional trailing notes'],
});
```

## House style

- **Weights first.** Every ingredient gets `grams` where meaningful. Spoon-measured spices and
  powders still get grams (onion powder 1.2 g/½ tsp, garlic powder 0.8 g/¼ tsp, fine salt
  3 g/½ tsp, black pepper 0.6 g/¼ tsp). Use `'—'` only for counts (eggs) and "to taste".
- `practical` is the volume/count equivalent with unicode fractions (`¾ cup`, `1½ tsp`).
  Natural kitchen units (butter sticks, egg counts) are fine.
- Flour: King Arthur 120 g/cup. Onion: 160 g = 1 cup diced.
- **Rice** is always cooked in a rice cooker and measured in **rice cups** only:
  `grams: '—'`, `practical: '2 rice cups'`; water is `'per rice cooker line'`. Serves 4 ≈ 2 rice cups.
- **Coffee** (Ninja Luxe Café): the machine doses itself — no bean or brew-water weights for
  anything it brews (`'fill the hopper'`, `'fill to the line'`; double espresso as an ingredient =
  `'2 oz'`). Steps say "set the dial to the setting it recommends", then dial in by shot time
  (25–30 s). Milk, syrups, etc. keep grams. Don't invent machine UI labels.
- Prefer `checkpoint` (sensory cue) over time alone. Embed technique reasoning inline via `why`.
- No branching "path A / path B" recipes by default — write the version we make. James may
  override per recipe; then use a `{ section: '… — pick one' }` with one row per option, a
  `note`, and one step covering each.
- Step bodies are HTML-escaped but `.step-body` is `white-space: pre-line`, so `\n` is a real
  line break. For sub-lists use `'Lead-in:\n• Option — …\n• Option — …'`. No HTML.
- James doesn't like grits — don't propose grits dishes.
- When a quantity or ratio is derived rather than sourced (especially if James questions it),
  verify against well-tested published recipes (weights preferred) and fix it.

## Batch scaling — read before editing recipe text

Recipe pages have a ½×/1×/1.5×/2×/3× dropdown that rescales the ingredient table **and** `g`/`kg`
amounts in step prose. Don't break the guards:

- Only numbers attached to `g`/`kg` scale in prose (`550°F`, `75% hydration`, `9×13"`,
  `6–8 minutes` are ignored). **Never write a batch quantity in prose without its unit.**
- A gram value followed by `each` is skipped ("2 balls, ~280 g each").
- In `practical`, a number followed by a dimension word (`inches`, `deep`, `thick`) is skipped.
- Cook times, temps and pan sizes never scale.
- **`practical` must hold ONE quantity** — `scalePractical()` scales only the first number.
  `'4½ tbsp'`, not `'¼ cup + 1 tbsp'`; no second number in parentheses. A leading word
  (`'scant ½ cup'`) is fine.
- Prose traps: a bare number beside a scaling gram value ("18 g range, not 15 or 22") or a
  non-scaling unit paired with grams ("1 packet, 240 g milk") breaks at 2×. Write the
  non-scaling half in oz or words.

## Layout gotcha

Long `section`/`note` strings used to blow out the ingredient table over the Method column.
Fixed by scoping `nowrap` to `td:first-child:not([colspan])`, `table-layout: fixed` with a
24/29/47 `<colgroup>`, `minmax(0, …)` grid tracks and `min-width: 0` on grid children, and a
900px two-column breakpoint. Keep those intact when touching table/grid CSS.

## Validate after every data edit

Eval `categories.js` + `manifest.js` + every `data/recipes/<slug>.js` in node and check:
filename == slug; every manifest entry has a file and every file is in the manifest; slugs unique;
`category` exists and `subcat` is listed under it; required fields present; single-quantity
`practical`s. For text changes, also run the scaling engine (extracted from `recipe.html`) at
0.5×/2×/3× and eyeball changed ingredients and prose.

## Git

James runs git. Don't commit or push unless he asks — finish work with a copyable
commit + push block. Exclude `_to_delete/` from `git add`.
