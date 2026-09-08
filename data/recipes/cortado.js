// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'cortado',
  title: 'Cortado',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Double shot cut 1:1 with steamed milk and almost no foam. Four ounces total, served in a small glass. The drink to make when you want espresso but not the edge.',
  yield: '1 drink (~4 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '60 g', practical: '2 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso into a warm 4–5 oz glass.' },
    { title: 'Steam flat', body: 'Froth the milk on the thinnest setting — you want it hot and textured, with essentially no foam layer.', checkpoint: 'Glossy, no visible bubbles, and it pours like heavy cream.' },
    { title: 'Pour', body: 'Pour straight into the middle of the glass. The drink should look uniformly caramel-colored top to bottom.' },
  ],
  notes: [
    'That small a volume of milk is hard for any frother to catch — froth 120 g and use half, rather than under-filling the jug.',
    'A Gibraltar is the same drink; the name comes from the glass.',
  ],
});
