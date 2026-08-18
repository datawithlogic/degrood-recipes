// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'honey-garlic-carrots',
  title: 'Roasted Honey Garlic Carrots',
  category: 'Sides',
  description: 'Baby carrots roasted in a honey-butter-garlic glaze. The trick is drying them completely before coating — moisture is the enemy of caramelization.',
  yield: 'Serves 4',
  time: '~35 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Baby carrots, rinsed', grams: '~454 g', practical: '1 lb' },
    { item: 'Olive oil', grams: '28 g', practical: '2 tbsp' },
    { item: 'Unsalted butter, melted', grams: '28 g', practical: '2 tbsp' },
    { item: 'Honey', grams: '~60 g', practical: '3 tbsp' },
    { item: 'Granulated garlic', grams: '—', practical: '¼ tsp' },
    { item: 'Fine salt', grams: '—', practical: '½ tsp' },
    { item: 'Cracked black pepper', grams: '—', practical: 'to taste' },
    { item: 'Fresh parsley, chopped (optional garnish)', grams: '—', practical: '—' },
  ],
  steps: [
    { title: 'Prep', body: 'Preheat oven to 400°F (205°C). Line a sheet pan with parchment for easier cleanup.' },
    { title: 'Dry the carrots', body: 'Pat rinsed carrots thoroughly dry with paper towels.', checkpoint: 'No visible water droplets.', why: 'Water prevents caramelization and slows browning — wet carrots steam instead of roast.' },
    { title: 'Mix the glaze', body: 'Whisk together olive oil, melted butter, honey, granulated garlic, salt, and pepper until honey is fully dissolved into the fat.', checkpoint: 'Honey fully dissolved, no visible separation.' },
    { title: 'Coat', body: 'Add carrots to the bowl; toss until every carrot has an even, shiny glaze.', checkpoint: 'No pooling liquid at the bottom of the bowl.' },
    { title: 'Single layer on pan', body: 'Spread carrots with space between each piece — they should not be touching.', why: 'Crowding causes steaming. Every carrot needs direct hot-air contact.' },
    { title: 'Roast', body: 'Roast 20–28 min depending on carrot size. Check at 18 min: edges browning, fork penetrates with slight resistance. Continue in 3–4 min increments if needed.', checkpoint: 'Glossy, lightly caramelized, tender throughout.', why: 'Honey caramelizes quickly — check early to avoid burning.' },
    { title: 'Finish and serve', body: 'Toss gently in any pan juices. Garnish with parsley.' },
  ],
  notes: [
    'For extra browning: switch to broil for the last 1–2 min — watch closely.',
    'Doubling: use two sheet pans. One pan crammed with double the carrots just steams them.',
  ],
});
