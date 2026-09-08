// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'cold-brew-cold-foam',
  title: 'Cold Brew with Cold Foam',
  category: 'Coffee',
  subcat: 'Iced',
  description: 'Cold brew topped with a thick, unsweetened cream foam that sinks slowly through the glass. The cold-froth setting whips it without heating it, which is the only way the foam holds.',
  yield: '1 drink (~12 oz)',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Cold foam' },
    { item: 'Whole milk, cold', grams: '30 g', practical: '1 oz' },
    { item: 'Heavy cream, cold', grams: '60 g', practical: '2 oz' },
    { section: 'Drink' },
    { item: 'Ice cubes', grams: '~200 g', practical: '1½ cups' },
    { item: 'Cold brew concentrate', grams: '120 g', practical: '4 oz' },
    { item: 'Cold water', grams: '90 g', practical: '3 oz' },
  ],
  steps: [
    { title: 'Build the drink', body: 'Fill a 16 oz glass with ice, then add the cold brew concentrate and cold water.' },
    { title: 'Whip the foam', body: 'Combine the cold milk and heavy cream in the frothing jug and run the cold foam program.', checkpoint: 'The foam should mound in the jug and pour thick and slow, like melted soft-serve. If it pours freely it needs another cycle.', why: 'The cream is what makes it hold. Milk alone whips to a foam that collapses back into the glass in under a minute.' },
    { title: 'Top', body: 'Pour the foam over the back of a spoon onto the surface of the drink so it floats rather than sinking.' },
  ],
  notes: [
    'Sweeten by whipping 1 tbsp of vanilla syrup into the cream before frothing — see Coffee Bar Syrups.',
    'Do not stir it. The foam is meant to descend through the glass as you drink, so the last sips are the creamiest.',
  ],
});
