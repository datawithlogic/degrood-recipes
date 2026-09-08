// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'cappuccino',
  title: 'Cappuccino',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'Double shot, 5 oz of milk, thick froth. Roughly equal thirds espresso, steamed milk, and foam — lighter on the tongue than a flat white at the same size.',
  yield: '1 drink (~6 oz)',
  time: '~4 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '150 g', practical: '5 oz' },
  ],
  steps: [
    { title: 'Pull the shot', body: 'Pull a double espresso into a warm 6 oz cup.' },
    { title: 'Froth thick', body: 'Froth the cold milk on a thick-froth hot setting.', checkpoint: 'The milk roughly doubles in the jug and holds a soft peak when you tilt it — but still pours, not scoops.' },
    { title: 'Pour', body: 'Pour the liquid milk in first from a low, steady stream, then spoon the remaining foam over the top to fill the cup.', why: 'Pouring straight from a thick jug dumps foam early and leaves a hollow, wet drink underneath. Splitting liquid and foam gives you the classic domed cap.' },
  ],
  notes: [
    'A dusting of cocoa or cinnamon on the foam is traditional and reads as effort to guests.',
    'If the foam sets stiff enough to hold a spoon upright, you have a dry cappuccino — see that recipe.',
  ],
});
