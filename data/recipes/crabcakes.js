// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'crabcakes',
  title: 'Crabcakes',
  category: 'Mains',
  subcat: 'Seafood',
  description: 'Simple crab cakes built to let the lump crab shine — minimal filler, Old Bay, Dijon. A 30-minute chill before frying is the key to cakes that hold together.',
  yield: '4–6 cakes, serves 2–3',
  time: '25 min + 30 min chill',
  skill: 'Easy',
  ingredients: [
    { item: 'Lump crabmeat, drained and picked for shells', grams: '~454 g', practical: '1 lb' },
    { item: 'Mayonnaise', grams: '~60 g', practical: '¼ cup' },
    { item: 'Egg, beaten', grams: '~55 g', practical: '1 large' },
    { item: 'Dijon mustard', grams: '~15 g', practical: '1 tbsp' },
    { item: 'Worcestershire sauce', grams: '~15 g', practical: '1 tbsp' },
    { item: 'Old Bay seasoning', grams: '—', practical: '½ tsp' },
    { item: 'Fine salt', grams: '—', practical: '¼ tsp' },
    { item: 'Black pepper', grams: '—', practical: '¼ tsp' },
    { item: 'Panko breadcrumbs', grams: '~55 g', practical: '1 cup' },
    { item: 'Olive oil or butter (for frying)', grams: '28 g', practical: '2 tbsp' },
    { item: 'Lemon wedges', grams: '—', practical: 'for serving' },
  ],
  steps: [
    { title: 'Mix the wet base', body: 'Combine mayonnaise, beaten egg, Dijon, Worcestershire, Old Bay, salt, and pepper in a bowl.' },
    { title: 'Fold in crab', body: 'Gently fold in crabmeat with a rubber spatula, trying not to break up the lumps.', why: 'Intact lumps are what make a good crab cake — if you pulverize them, it becomes a fishcake.' },
    { title: 'Add breadcrumbs', body: 'Gently fold in panko until just combined. Don\'t overwork.' },
    { title: 'Form and chill', body: 'Form into 4–6 cakes with your hands. Refrigerate at least 30 min to firm up.', why: 'Chilling lets the mixture bind so the cakes hold their shape in the pan instead of falling apart.' },
    { title: 'Cook', body: 'Heat olive oil or butter in a skillet over medium. Cook crab cakes 4–5 min per side until golden brown.', checkpoint: 'Don\'t move them while they\'re building a crust — they\'ll release naturally when ready to flip.' },
    { title: 'Serve', body: 'Serve immediately with lemon wedges and remoulade.' },
  ],
  notes: [
    'Pair with remoulade (see Sauces).',
  ],
});
