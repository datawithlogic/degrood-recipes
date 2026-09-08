// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'coffee-bar-syrups',
  title: 'Coffee Bar Syrups',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'Vanilla and brown sugar syrup, made in five minutes on the stove. One batch of each covers a weekend of guests and costs about a dollar.',
  yield: '~1½ cups each',
  time: '~10 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Vanilla syrup' },
    { item: 'Granulated sugar', grams: '200 g', practical: '1 cup' },
    { item: 'Water', grams: '240 g', practical: '1 cup' },
    { item: 'Vanilla extract', grams: '—', practical: '1 tbsp' },
    { section: 'Brown sugar syrup' },
    { item: 'Dark brown sugar, packed', grams: '200 g', practical: '1 cup' },
    { item: 'Water', grams: '240 g', practical: '1 cup' },
    { item: 'Cinnamon stick', grams: '—', practical: '1' },
    { item: 'Salt', grams: '—', practical: 'a pinch' },
  ],
  steps: [
    { title: 'Dissolve', body: 'For either syrup, combine the sugar and water in a small saucepan over medium heat and stir until the sugar fully dissolves.', checkpoint: 'The liquid turns clear and you can no longer feel grit when you drag the spoon across the bottom of the pan.' },
    { title: 'Simmer briefly', body: 'Bring to a bare simmer for 2 minutes, then pull it off the heat. Do not reduce it — you want syrup, not caramel.' },
    { title: 'Infuse and cool', body: 'Stir the vanilla into the vanilla syrup off the heat. Leave the cinnamon stick in the brown sugar syrup while it cools, then fish it out.', why: 'Vanilla extract added to a boiling pan cooks off most of its aroma. Adding it after the heat is off keeps it.' },
    { title: 'Bottle', body: 'Pour into squeeze bottles or jars and refrigerate.' },
  ],
  notes: [
    'Keeps 4 weeks refrigerated. Cloudiness or a sour smell means toss it.',
    'One tablespoon sweetens a 12 oz drink; two is Starbucks-grande territory.',
    'Add the syrup to the hot espresso before the milk so it actually dissolves.',
  ],
});
