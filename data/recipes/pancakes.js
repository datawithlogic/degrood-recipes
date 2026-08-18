// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pancakes',
  title: 'Fluffy Milk Pancakes',
  category: 'Breakfast',
  description: 'Tall, fluffy pancakes from scratch, leavened with a baking powder and baking soda combo for maximum lift.',
  yield: '~12 pancakes',
  time: '30 min (includes 10 min rest)',
  skill: 'Easy',
  ingredients: [
    { section: 'Dry' },
    { item: 'All-purpose flour', grams: '240 g', practical: '2 cups' },
    { item: 'Sugar', grams: '30 g', practical: '2 tbsp' },
    { item: 'Baking powder', grams: '10 g', practical: '2½ tsp' },
    { item: 'Baking soda', grams: '1.25 g', practical: '¼ tsp' },
    { item: 'Fine salt', grams: '4 g', practical: '¾ tsp' },
    { section: 'Wet' },
    { item: 'Whole milk', grams: '480 g', practical: 'just over 2 cups' },
    { item: 'Lemon juice or white vinegar', grams: '15 g', practical: '1 tbsp' },
    { item: 'Eggs', grams: '—', practical: '2 large' },
    { item: 'Unsalted butter, melted and cooled', grams: '56 g', practical: '4 tbsp' },
    { item: 'Vanilla extract (optional)', grams: '5 g', practical: '1 tsp' },
  ],
  steps: [
    { title: 'Combine milk and lemon juice', body: 'Whisk milk and lemon juice (or vinegar) together in a large bowl or measuring cup. Let stand 5 minutes while you prep the rest.', checkpoint: 'Milk will look slightly thickened, maybe faintly curdled — that\'s expected.' },
    { title: 'Preheat pan', body: 'Heat skillet over medium to medium-low (target 350–375°F surface).', checkpoint: 'A few water droplets should skitter briefly before evaporating.' },
    { title: 'Mix dry', body: 'Whisk flour, sugar, baking powder, baking soda, and salt until uniform.' },
    { title: 'Mix wet', body: 'Whisk eggs into the milk until smooth. Stream in melted (warm, not hot) butter and vanilla while whisking.', why: 'Warm — not hot — butter avoids scrambling eggs or re-solidifying into flecks.' },
    { title: 'Combine (minimal mixing)', body: 'Pour wet over dry. Fold just until no dry flour pockets remain — small lumps are fine.', checkpoint: 'Batter should ribbon off the spoon. Too thick → add 1–2 tbsp milk. Too thin → add 1–2 tbsp flour.' },
    { title: 'Rest 10 minutes', body: 'Let batter sit to hydrate and develop lift.', checkpoint: 'Batter thickens slightly.' },
    { title: 'Test pancake and cook', body: 'Lightly oil pan. Make one small tester first to dial in heat. Cook full batch: 1½–2½ min side 1 (until bubbles pop and holes don\'t fill), flip, 45–90 sec side 2.', checkpoint: 'Centers spring back when tapped.' },
  ],
  notes: [
    'Hold finished pancakes on a wire rack in a 200°F oven — prevents soggy bottoms.',
    'Cooked pancakes freeze well. Reheat in toaster or 350°F oven for 6–8 min from frozen.',
  ],
});
