// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'sourdough-starter',
  title: 'Sourdough Starter (Maintenance)',
  category: 'Bread',
  subcat: 'Sourdough',
  description: 'How to maintain an established starter — daily room-temp feeding or weekly fridge schedule. Ratio: 20g starter : 60g water : 60g flour.',
  yield: 'Ongoing',
  time: '5 min per feeding',
  skill: 'Easy',
  ingredients: [
    { item: 'Spent starter', grams: '20 g', practical: 'from your jar' },
    { item: 'Filtered water', grams: '60 g', practical: '¼ cup' },
    { item: 'Unbleached all-purpose or bread flour', grams: '60 g', practical: '½ cup' },
  ],
  steps: [
    { title: 'Room temp — daily use', body: 'Pour 20g spent starter into a clean jar; discard or save the rest for discard recipes. Add 60g water and stir until completely dissolved (looks milky and loose). Add 60g flour and stir until smooth and evenly combined — thick, sticky, like thick pancake batter. Cover loosely (not airtight). Mark height with a rubber band. Leave at 68–75°F until next feeding or until doubled (~4–6 hr if strong and active).' },
    { title: 'Refrigerator — weekly use', body: 'Remove starter from fridge; let warm 30–60 min. Pour 20g into a clean jar. Add 60g water, stir to dissolve. Add 60g flour, stir until incorporated. Cover loosely and rest 1–2 hr at room temp before refrigerating.', why: 'The brief room-temp rest lets fermentation kick in so the yeast stays viable during cold storage.' },
  ],
  notes: [
    'Always use clean jars and spoons. Replace jars every few days to avoid crusty buildup. Wipe jar rim after each feeding.',
    'Starter is ready to use when it has doubled and the surface is domed and bubbly — usually 4–6 hr after feeding at room temp.',
    'Float test: drop 1 tsp in water — if it floats, it\'s ready. Less reliable for very wet starters; use rise/dome as primary cue.',
  ],
});
