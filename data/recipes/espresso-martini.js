// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'espresso-martini',
  title: 'Espresso Martini',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'Vodka, coffee liqueur, and a fresh shot shaken to a thick foam cap. Must be made with espresso pulled minutes before — cold coffee will not foam.',
  yield: '1 cocktail',
  time: '~5 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Vodka', grams: '60 g', practical: '2 oz' },
    { item: 'Coffee liqueur', grams: '22 g', practical: '¾ oz' },
    { item: 'Double espresso, freshly pulled', grams: '—', practical: '2 oz' },
    { item: 'Simple or vanilla syrup', grams: '8 g', practical: '½ tbsp' },
    { item: 'Coffee beans, for garnish', grams: '—', practical: '3' },
  ],
  steps: [
    { title: 'Chill the glass', body: 'Put a coupe or martini glass in the freezer.' },
    { title: 'Pull the shot', body: 'Pull a double espresso and let it sit for one minute — no longer.', why: 'Crema is what builds the foam cap. It collapses within a few minutes of the pull, and a shot from an hour ago shakes up flat every time.' },
    { title: 'Shake hard', body: 'Combine vodka, coffee liqueur, espresso, and syrup in a shaker filled with ice. Shake hard for 20 seconds.', checkpoint: 'The shaker should be painfully cold and frosted on the outside before you stop.' },
    { title: 'Double strain and garnish', body: 'Strain through a fine mesh strainer into the chilled glass. Wait for the foam to separate and set, then float three coffee beans in the center.', checkpoint: 'A pale tan foam layer about a quarter inch thick sits on a near-black drink. If it is thin, the shot was too old or the shake too short.' },
  ],
  notes: [
    'Batch it for a party: multiply everything but shake each drink individually — a pitcher-poured one has no foam.',
    'Skip the syrup entirely if your coffee liqueur is already sweet; taste before you commit.',
  ],
});
