// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'flat-white',
  title: 'Flat White',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Double shot with 5 oz of milk and only a thin layer of froth. Smaller and more coffee-forward than a latte — the milk carries the espresso instead of burying it.',
  yield: '1 drink (~6 oz)',
  time: '~4 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '150 g', practical: '5 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso directly into a warm 6 oz cup.' },
    { title: 'Froth thin', body: 'Pour the cold milk into the frothing jug and run the hot froth program on its thinnest setting — the flat white uses the least foam of any milk drink here.', checkpoint: 'The milk should look like wet paint with a glossy surface and no visible bubbles. Swirl the jug and it moves as one liquid.' },
    { title: 'Pour', body: 'Swirl the jug, then pour into the center of the cup from a few inches up. As the cup fills, drop the spout close to the surface to let the foam layer float out.' },
  ],
  notes: [
    'Whole milk froths the most forgivingly. Oat milk works well; skim makes stiff, dry foam that fights a flat white.',
    'Milk scalded past 155°F tastes sweet-gone-flat. Stop it there.',
  ],
});
