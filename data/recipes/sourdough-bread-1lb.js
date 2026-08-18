// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'sourdough-bread-1lb',
  title: 'Sourdough Bread (1 lb Pan)',
  category: 'Bread',
  subcat: 'Sourdough',
  description: '68% hydration — lower than most sourdough recipes, which makes scoring and shaping much easier. Steam-pan method, no Dutch oven required.',
  yield: 'One 1 lb loaf',
  time: '1 hr active + 4–24 hr ferment',
  skill: 'Advanced',
  ingredients: [
    { item: 'Bread flour (or 80% bread : 20% whole wheat)', grams: '400 g', practical: '~3⅓ cups' },
    { item: 'Water', grams: '260 g', practical: '~1 cup + 1 tbsp' },
    { item: 'Active sourdough starter (100% hydration)', grams: '80 g', practical: '~⅓ cup' },
    { item: 'Fine sea salt', grams: '8 g', practical: '~1½ tsp' },
    { note: 'Total flour: 440g (400 + 40 from starter). Total water: 300g (260 + 40). Hydration = 300/440 ≈ 68%. Lower hydration = drier surface = cleaner scoring.' },
  ],
  steps: [
    { title: 'Fermentolyse', body: 'Combine flour, water, and starter (NOT salt yet) in mixer bowl. Dough hook speed 1, ~1 min until no dry bits. Cover and rest 20–40 min. (Overnight option: refrigerate 8–16 hr — small surface bubbles, dough supple when ready.)', why: 'This early rest (fermentolyse) hydrates the flour and boosts extensibility so you need much less kneading.' },
    { title: 'Add salt + mixer folds (60–90 min total)', body: 'Sprinkle 8g salt. Speed 1 ~2 min — dough tightens, no visible salt. At +30 min and +60 min, run hook ~20 turns each (strengthening folds).', checkpoint: 'After each fold: dough stands taller, slumps less, stretches 3–4" before tearing.' },
    { title: 'Bulk ferment', body: 'Covered in Proof mode (~85–95°F) 2.5–4 hr. Cold option: refrigerator 8–16 hr.', checkpoint: 'Volume up ~50–60% (not 75%+), top gently domed, small edge bubbles, jiggling as one mass when nudged. Stop here — over-bulk softens the surface and makes scoring drag.' },
    { title: 'Shape and pan-proof', body: 'Lightly flour bench. Pat dough to ~8×10". Fold long sides to center, roll up tightly (jelly-roll). Pinch seam. Press parchment sling into 8½×4½" pan. Load seam-down. Proof in warm spot until crown sits ~¾" below rim, finger dent springs back slowly.' },
    { title: 'Dry the skin and score', body: 'Uncover and air-dry the top 10–15 min before scoring until it turns matte. Score one confident slash ⅜–½" deep lengthwise at 30–45°.', why: 'Matte, dry skin means the blade scores cleanly instead of dragging across a tacky surface.' },
    { title: 'Bake with steam', body: 'Boil ~½ cup water at the counter; pour into a small metal pan while off the heat. Preheat oven to 435°F (BAKE, no fan). Carry steam pan level to the oven. Load bread pan and steam pan on lowest rack together. Bake 15 min (steam phase). Remove water pan. Switch to Convection 400°F or BAKE 425°F for 12–18 min more.', checkpoint: 'Deep golden top with opened score, hollow when tapped, optional 205–208°F internal.', why: 'Never pour water into a hot oven — always prepare the steam pan at the counter.' },
    { title: 'Cool', body: 'Lift out via parchment handles. Cool on rack ≥1 hr before slicing.', checkpoint: 'Crackling has subsided and loaf feels light for its size.' },
  ],
  notes: [
    'Scoring drag: ensure 10–15 min dry-skin time before scoring.',
    'Gummy crumb: bake 3–5 min longer and cool the full hour.',
    'Pale crust: extend dry-heat phase 3–5 min or switch to convection for the last 8–10 min.',
  ],
});
