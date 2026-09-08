// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'dry-cappuccino',
  title: 'Dry Cappuccino',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Double shot, 5 oz of milk, taken to extra-thick froth. Almost all foam, barely any liquid milk — the espresso comes through hardest of any milk drink.',
  yield: '1 drink (~6 oz)',
  time: '~4 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '150 g', practical: '5 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso into a warm 6 oz cup.' },
    { title: 'Froth extra-thick', body: 'Froth the cold milk on the thickest hot-froth setting available.', checkpoint: 'The foam holds its shape when spooned and a dry ridge stays behind on the side of the jug.' },
    { title: 'Build', body: 'Pour a small splash of the liquid milk under the foam, then spoon the foam on top until the cup is full and slightly domed.' },
  ],
  notes: [
    'This drinks fast and cools fast — serve it in a preheated cup or it is lukewarm in three minutes.',
    'Skim or 2% milk actually makes a better dry cappuccino than whole; less fat means stiffer foam.',
  ],
});
