// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'sourdough-pullman-2lb',
  title: 'Sourdough Pullman Loaf (2 lb)',
  category: 'Bread',
  subcat: 'Sourdough',
  description: 'Square sandwich loaf baked with the lid on in a 13×5" Pullman pan. 70% hydration, mixer method, no hand folds.',
  yield: 'One 2 lb square loaf',
  time: '1 hr active + 3–24 hr ferment',
  skill: 'Advanced',
  ingredients: [
    { item: 'All-purpose flour (Kirkland)', grams: '846 g', practical: '~7 cups' },
    { item: 'Water', grams: '567 g', practical: '~2⅓ cups' },
    { item: 'Active sourdough starter (100% hydration)', grams: '169 g', practical: '~¾ cup' },
    { item: 'Fine sea salt', grams: '19 g', practical: '~3¼ tsp' },
    { note: 'Total flour ≈ 930g (846 + 84.5 from starter), total water ≈ 652g → ~70% hydration. ~1600g dough total.' },
  ],
  steps: [
    { title: 'Mix (flour + water + starter)', body: 'Combine flour, water, and starter in mixer bowl. Dough hook speed 1, ~1 min until no dry bits. Cover and rest 20–40 min. (Cold-start option: refrigerate 8–16 hr instead.)', checkpoint: 'Dough cohesive and slightly tacky, no dry pockets.' },
    { title: 'Add salt + mixer folds (60–90 min)', body: 'Sprinkle 19g salt. Speed 1 ~2 min (≈60 turns) until dough tightens and starts to clean the bowl. Transfer to oiled 2L Cambro. At +30 min and +60 min, run hook ~20 turns each (strengthening folds).', checkpoint: 'After each fold: dough stands taller, slumps less, stretches 3–4" before tearing.' },
    { title: 'Bulk ferment', body: 'Covered Cambro in Proof mode (~85–95°F) 2.5–4 hr. Cold option: refrigerator 8–16 hr.', checkpoint: 'Volume up ~50–60%, surface gently domed, jiggles as one mass when nudged.' },
    { title: 'Shape for Pullman', body: 'Lightly flour bench. Tip dough out; pat to ~10×14" rectangle. Fold long sides to center; roll up very tight (jelly-roll). Pinch seam. Parchment sling in 13×5" Pullman pan; load seam-down, lid off. Proof until highest point sits ~½" below rim end-to-end and finger dent springs back slowly. Last 10–15 min of proof: leave uncovered so top turns matte.', checkpoint: 'Even ½" below rim along the whole length — uneven proof causes shoulder issues under the lid.' },
    { title: 'Bake — lid on (no steam)', body: 'Wipe the underside of the lid lightly with oil. Slide lid fully closed.\n\nOption A (cold-start): place in cold oven, BAKE 400°F (no fan), set 45-min timer immediately. At 45 min: if sides pale/soft → 5–10 min more covered; if set → remove lid, increase to 410–425°F for 8–12 min to brown.\n\nOption B (preheat): preheat to BAKE 400°F, load with lid on, bake 40–45 min covered, then 8–12 min uncovered at 410–425°F.', checkpoint: 'Deep golden top, hollow when tapped on bottom after sliding out, optional 205–208°F internal.' },
    { title: 'Cool', body: 'De-pan immediately to a rack. Cool ≥1 hr before slicing.', checkpoint: 'Crackling subsides, loaf feels light for its size.' },
  ],
  notes: [
    'Uneven shoulders under lid: finish proof uncovered 10–15 min; ensure dough is within ½" of rim along the whole length.',
    'Dense corners: proof slightly longer — look for slow-spring poke and uniform ½" below rim.',
    'Top too pale: extend browning 3–5 min or use convection for the last few minutes.',
    'Sticking to lid: lightly oil lid underside; ensure matte top before lidding.',
  ],
});
