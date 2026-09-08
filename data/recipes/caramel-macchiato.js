// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'caramel-macchiato',
  title: 'Caramel Macchiato',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'Vanilla syrup, steamed milk, then espresso poured through the top and caramel drizzled over. Built upside down on purpose — the shot marks the milk, which is where the name comes from.',
  yield: '1 drink (~12 oz)',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Vanilla syrup', grams: '20 g', practical: '1 tbsp' },
    { item: 'Whole milk, cold', grams: '240 g', practical: '8 oz' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Caramel sauce', grams: '—', practical: 'for drizzling' },
  ],
  steps: [
    { title: 'Syrup and milk', body: 'Put the vanilla syrup in a 12 oz glass. Froth the cold milk on a thick-froth hot setting and pour it in, holding back the foam until the end so it caps the glass.' },
    { title: 'Mark it', body: 'Pull a double espresso and pour it slowly through the center of the foam cap.', checkpoint: 'The shot should punch a dark hole through the white foam and stay visible as a plume rather than mixing in.' },
    { title: 'Drizzle', body: 'Cross-hatch caramel sauce over the top. Serve unstirred and let whoever is drinking it mix it themselves.' },
  ],
  notes: [
    'Iced version: syrup and cold milk over ice, espresso poured over the top, caramel last.',
    'Caramel sauce is thicker than caramel syrup and is what you want for the drizzle — syrup just sinks.',
  ],
});
