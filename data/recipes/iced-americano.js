// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'iced-americano',
  title: 'Iced Americano',
  category: 'Coffee',
  subcat: 'Iced',
  description: 'Espresso, cold water, ice. Sharper and more aromatic than cold brew — this is the black iced coffee to make when you want to actually taste the beans.',
  yield: '1 drink (~12 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Ice cubes', grams: '~200 g', practical: '1½ cups' },
    { item: 'Cold water', grams: '180 g', practical: '6 oz' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
  ],
  steps: [
    { title: 'Build the glass', body: 'Fill a 16 oz glass with ice and add the cold water.' },
    { title: 'Pull and pour', body: 'Pull a double espresso and pour it over the top.', checkpoint: 'A tan crema head should sit on the surface for a few seconds before dispersing — that is the sign the shot was fresh.' },
  ],
  notes: [
    'Coffee ice cubes (cold brew frozen in a tray) keep the last third of the glass from going watery.',
    'A squeeze of orange or a strip of orange peel over the top is the classic move with a medium-roast iced americano.',
  ],
});
