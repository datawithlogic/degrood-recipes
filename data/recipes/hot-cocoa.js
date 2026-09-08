// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'hot-cocoa',
  title: 'Hot Cocoa',
  category: 'Coffee',
  subcat: 'Brewed',
  description: 'Real cocoa and chopped chocolate frothed into hot milk. Takes the same four minutes as a packet and tastes like a completely different drink.',
  yield: '1 drink (~8 oz)',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Whole milk', grams: '240 g', practical: '8 oz' },
    { item: 'Unsweetened cocoa powder', grams: '10 g', practical: '1½ tbsp' },
    { item: 'Granulated sugar', grams: '20 g', practical: '1½ tbsp' },
    { item: 'Semisweet chocolate, finely chopped', grams: '15 g', practical: '1 tbsp' },
    { item: 'Salt', grams: '—', practical: 'a pinch' },
    { item: 'Vanilla extract', grams: '—', practical: '¼ tsp' },
  ],
  steps: [
    { title: 'Make a paste', body: 'In the mug, whisk the cocoa, sugar, salt, and a splash of the milk into a smooth paste.', why: 'Cocoa powder dumped into hot liquid clumps and never fully dissolves. Hydrating it as a paste first is the whole difference between silky and gritty.' },
    { title: 'Heat and froth the milk', body: 'Add the chopped chocolate to the remaining milk in the frothing jug and run a hot froth cycle.', checkpoint: 'The chocolate should be fully melted and the milk uniformly brown with a foam cap.' },
    { title: 'Combine', body: 'Pour the hot chocolate milk into the mug over the cocoa paste, whisking as you go. Stir in the vanilla.' },
  ],
  notes: [
    'For a mocha, add a double espresso to the finished mug.',
    'Half-and-half in place of a third of the milk makes it noticeably richer — worth it for guests.',
    'Packet version, per the machine card: one packet of cocoa mix, 8 oz milk, any froth style.',
  ],
});
