// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pizza-dough',
  title: 'Neapolitan Pizza Dough (75% Hydration)',
  category: 'Bread',
  subcat: 'Savory',
  description: '2 pizza doughs at 75% hydration. KitchenAid method with an initial rest — the key to manageable high-hydration dough.',
  yield: '2 × 280 g dough balls (~12" pizzas)',
  time: '20 min active + 1–24 hr ferment',
  skill: 'Intermediate',
  ingredients: [
    { item: '00 flour (or bread flour)', grams: '400 g', practical: '~3⅓ cups' },
    { item: 'Water, room temp', grams: '300 g', practical: '1¼ cups' },
    { item: 'Fine sea salt', grams: '10 g', practical: '~1¾ tsp' },
    { item: 'Instant yeast', grams: '1 g', practical: '¼ tsp' },
    { item: 'Extra-virgin olive oil (optional)', grams: '10 g', practical: '2 tsp' },
    { note: 'Active dry yeast: use 1.25 g; bloom in 30 g of the water (lukewarm ~110°F) for 5–10 min before adding.' },
  ],
  steps: [
    { title: 'Rough mix and rest', body: 'Combine flour and water in mixer bowl. Run dough hook on speed 2 for 1 min until a shaggy dough forms with no dry flour. Cover and rest 15 minutes.', why: 'This autolyze step hydrates the flour and begins gluten development, reducing kneading time and stickiness significantly.' },
    { title: 'Add salt, yeast, and oil', body: 'Sprinkle salt over dough; add yeast (and oil if using). Run dough hook speed 2 for 2 min to incorporate, then increase to speed 4 and knead 10–14 minutes.', checkpoint: 'Windowpane test: stretch a walnut-sized piece thin enough to be nearly translucent without tearing. If it tears, knead 2 more min.' },
    { title: 'Bulk ferment', body: 'Cover and rest at room temp 4–6 hours until doubled (same day), OR refrigerate 18–24 hours for better flavor. Remove from fridge 1–2 hours before shaping to temper.', checkpoint: 'Dough is puffy, gassy, springs back slowly when poked.' },
    { title: 'Divide and ball', body: 'Divide into 2 equal pieces (~280 g each). Shape each into a tight ball by folding edges underneath and rotating. Place seam-side down, cover, rest at room temp 60–90 minutes.', checkpoint: 'Balls relax and spread slightly, no longer feel cold.' },
    { title: 'Preheat stone', body: 'Place baking stone on top rack. Preheat to 550°F (290°C) for at least 45–60 minutes. The stone must be fully saturated with heat.', why: '⚠️ Do NOT use parchment paper at 550°F — it will scorch or catch fire. Use a floured/semolina peel and launch directly onto the stone.' },
    { title: 'Shape and top', body: 'Lightly flour work surface. Press dough from center outward with fingertips, leaving ~1" border for the crust. Pick up and stretch over knuckles, rotating slowly, until ~12" and even thickness. Transfer to a semolina-dusted peel, top quickly, and launch immediately.' },
    { title: 'Bake', body: 'Launch pizza onto the hot stone with a confident forward-jerk motion. Bake 6–8 minutes until crust is deep golden with charred spots and cheese is bubbling.', checkpoint: 'Lift the edge with a spatula — underside should be browned and crisp, not pale.' },
  ],
  notes: [
    'Shaped dough balls can be refrigerated up to 3 days or frozen up to 3 months.',
    'Thaw overnight in fridge; temper 1–2 hours before shaping.',
    'Rao\'s marinara works great as-is for sauce — no modifications needed.',
  ],
});
