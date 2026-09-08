// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'espresso-macchiato',
  title: 'Espresso Macchiato',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'A double shot "marked" with a spoonful of foam. Two ounces, ninety seconds, and the fastest way to take the bite off an espresso without making it a milk drink.',
  yield: '1 drink (~2½ oz)',
  time: '~3 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '30 g', practical: '1 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso into a warm demitasse.' },
    { title: 'Froth thick', body: 'Froth the milk on a thick setting — you only need the foam, not the liquid underneath.' },
    { title: 'Mark it', body: 'Spoon one heaping spoonful of foam into the center of the crema. Do not stir.', checkpoint: 'A white dot floating on a dark ring — that mark is the whole point of the drink.' },
  ],
  notes: [
    'Not to be confused with a caramel macchiato, which is a latte with a different build. See the Specialty section.',
  ],
});
