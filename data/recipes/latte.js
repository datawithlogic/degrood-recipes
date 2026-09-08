// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'latte',
  title: 'Latte',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Double shot with 8 oz of milk and a thin layer of froth. The everyday milk drink — bigger and milder than a flat white.',
  yield: '1 drink (~10 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '240 g', practical: '8 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso into a warm 10–12 oz mug.' },
    { title: 'Froth thin', body: 'Froth the cold milk on a thin-froth hot setting.', checkpoint: 'Glossy and paint-like, roughly 10–15% expanded in volume. Big visible bubbles mean you went too far — tap the jug on the counter and swirl them out.' },
    { title: 'Pour', body: 'Swirl the jug and pour steadily into the center of the mug, finishing close to the surface.' },
  ],
  notes: [
    'For a sweeter drink, add syrup to the empty mug before the shot so it dissolves in the hot espresso. See Coffee Bar Syrups.',
    'Sixteen-ounce version: same double shot, 360 g milk. It will taste noticeably milkier — pull a triple if you want it to hold up.',
  ],
});
