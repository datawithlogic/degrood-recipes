// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'iced-latte',
  title: 'Iced Latte',
  category: 'Coffee',
  subcat: 'Iced',
  description: 'Double shot over ice and cold milk. The whole trick is not letting the hot shot melt the ice before it hits the milk.',
  yield: '1 drink (~12 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Ice cubes', grams: '~200 g', practical: '1½ cups' },
    { item: 'Whole milk, cold', grams: '180 g', practical: '6 oz' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
  ],
  steps: [
    { title: 'Build the glass', body: 'Fill a 16 oz glass with ice, then pour the cold milk over it.' },
    { title: 'Pull the shot', body: 'Pull a double espresso into a small separate cup, not directly onto the ice.', why: 'A shot poured straight onto ice flash-melts it and dilutes the drink by an ounce before you ever taste it. Landing it on cold milk instead chills it on contact.' },
    { title: 'Pour and serve', body: 'Pour the espresso over the milk. Leave it layered for the look, or stir to combine.', checkpoint: 'Poured gently, the espresso sits as a distinct dark band over the white milk for a good minute.' },
  ],
  notes: [
    'The Cold Pressed Espresso program pulls a shot without heat — use it here and there is nothing to melt at all.',
    'Add syrup to the milk before the shot; syrup poured last just pools at the bottom.',
  ],
});
