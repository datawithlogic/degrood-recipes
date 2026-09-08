// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'americano',
  title: 'Americano',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Espresso lengthened with hot water. Tastes like a cleaner, sweeter cup of drip coffee. Pour the espresso into the water, not the other way around.',
  yield: '1 drink (~8 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Hot water, ~200°F', grams: '180 g', practical: '6 oz' },
  ],
  steps: [
    { title: 'Heat the cup and water', body: 'Fill the serving mug with the hot water first.' },
    { title: 'Pull the shot', body: 'Pull a double espresso per the Espresso (Double Shot) recipe.' },
    { title: 'Combine', body: 'Pour the espresso into the water.', why: 'Pouring espresso last preserves the crema layer on top — pouring water over a shot punches straight through it and the drink looks flat.' },
  ],
  notes: [
    'Want it stronger? Cut the water to 120 g. Longer? Go to 240 g. The shot stays the same.',
    'A long black is the same drink at a smaller volume — the same double shot into 120 g water.',
  ],
});
