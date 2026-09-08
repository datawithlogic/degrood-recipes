// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'mocha',
  title: 'Mocha',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'Espresso, real chocolate ganache, and steamed milk. Ganache instead of chocolate syrup is what separates a mocha from hot cocoa with coffee in it.',
  yield: '1 drink (~12 oz)',
  time: '~5 min · ganache keeps 2 weeks',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Mocha ganache (makes ~8 drinks)' },
    { item: 'Semisweet chocolate, chopped', grams: '115 g', practical: '4 oz' },
    { item: 'Heavy cream', grams: '115 g', practical: '½ cup' },
    { item: 'Unsweetened cocoa powder', grams: '10 g', practical: '1½ tbsp' },
    { item: 'Salt', grams: '—', practical: 'a pinch' },
    { section: 'Per drink' },
    { item: 'Mocha ganache', grams: '30 g', practical: '2 tbsp' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '240 g', practical: '8 oz' },
  ],
  steps: [
    { title: 'Make the ganache', body: 'Heat the cream until steaming, pour it over the chopped chocolate, cocoa, and salt, and let it sit one minute before whisking smooth.', checkpoint: 'Glossy and pourable, with no unmelted flecks. If it seizes, whisk in a tablespoon of hot cream.' },
    { title: 'Build the drink', body: 'Spoon the ganache into a warm 12 oz mug, pull a double espresso over it, and stir until fully combined.', checkpoint: 'No dark streaks left on the bottom of the mug — the base should be uniform before milk goes in.' },
    { title: 'Froth and pour', body: 'Froth the cold milk on a thin-froth hot setting and pour in.' },
    { title: 'Finish', body: 'Top with whipped cream and a dusting of cocoa if you are serving it to someone.' },
  ],
  notes: [
    'Ganache keeps 2 weeks refrigerated. Microwave in 10-second bursts to loosen it.',
    'White chocolate version: swap in white chocolate and skip the cocoa powder.',
  ],
});
