// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'air-fryer-corn',
  title: 'Air Fryer Corn on the Cob',
  category: 'Sides',
  description: 'Charred, garlicky corn in 15 minutes. Kinder\'s The Blend does the work — oil before cooking for the char, butter only after.',
  yield: '4 ears',
  time: '15–18 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Fresh corn, husked', grams: '—', practical: '4 ears' },
    { item: 'Olive oil', grams: '14–27 g', practical: '1–2 tbsp' },
    { item: 'Kinder\'s The Blend (salt, pepper, garlic)', grams: '—', practical: '1½–2 tsp' },
    { item: 'Butter, optional finish', grams: '28 g', practical: '2 tbsp' },
    { note: 'Oil before cooking — it handles 400°F and drives the char. Butter is a finish only; at 400°F it would burn and turn bitter.' },
  ],
  steps: [
    { title: 'Preheat', body: 'Preheat air fryer or toaster oven to 400°F (205°C) on air fry mode.' },
    { title: 'Dry the corn', body: 'Pat each ear dry with paper towels.', why: 'Dry kernels char and brown; wet kernels steam.' },
    { title: 'Season', body: 'Rub each ear all over with olive oil. Season all sides with The Blend.' },
    { title: 'Air fry', body: 'Arrange in a single layer with space between ears. Batch if needed — crowding the rack steams instead of chars. Air fry 12–15 min, turning every ~5 min, until tender with charred spots.', checkpoint: 'A few blackened kernels is flavor, not failure. Check at 10 min if your unit runs hot.' },
    { title: 'Finish', body: 'Roll hot ears in butter or brush it on immediately out of the oven. Add a pinch more Blend to taste.' },
  ],
  notes: [
    'Elote variation: skip the butter finish. Instead top with lime juice, crumbled cotija, and a pinch of chili powder.',
    'Smoky variation: add a little smoked paprika to the olive oil before coating.',
  ],
});
