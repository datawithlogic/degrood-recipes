// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'remoulade',
  title: 'Remoulade',
  category: 'Sauces',
  description: 'Classic tangy dipping sauce for crabcakes. Capers, Dijon, paprika, and a little heat. Make ahead — flavors improve significantly after 30 minutes.',
  yield: '~1 cup',
  time: '5 min + 30 min rest',
  skill: 'Easy',
  ingredients: [
    { item: 'Mayonnaise', grams: '~225 g', practical: '1 cup' },
    { item: 'Dijon mustard', grams: '~30 g', practical: '2 tbsp' },
    { item: 'Lemon juice', grams: '~15 g', practical: '1 tbsp' },
    { item: 'Capers, chopped', grams: '~15 g', practical: '1 tbsp' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '1–2' },
    { item: 'Paprika', grams: '—', practical: '1 tsp' },
    { item: 'Hot sauce (optional)', grams: '—', practical: '½ tsp' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
    { item: 'Fresh parsley, chopped (optional)', grams: '—', practical: '1 tbsp' },
  ],
  steps: [
    { title: 'Combine', body: 'Mix all ingredients in a bowl.' },
    { title: 'Season', body: 'Taste and adjust salt, pepper, and hot sauce.' },
    { title: 'Rest', body: 'Cover and refrigerate at least 30 min to let flavors meld.', why: 'The caper brine and Dijon need time to soften and integrate — the sauce tastes sharper and disconnected right after mixing.' },
  ],
  notes: [
    'Keeps in the fridge 3–4 days.',
    'Also great with fried shrimp, po\'boys, or as a dipping sauce for fried anything.',
  ],
});
