// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'waffles',
  title: 'Waffles',
  category: 'Breakfast',
  description: 'Diner-style waffles, like Waffle House: thin, crisp outside, fluffy inside, lightly sweet and vanilla-y. Cornstarch and a little oil give the crisp, and a splash of buttermilk keeps the inside tender.',
  yield: '~8 waffles (7" round), serves 4',
  time: '~40 min (includes 15 min batter rest)',
  skill: 'Easy',
  ingredients: [
    { section: 'Dry' },
    { item: 'All-purpose flour', grams: '240 g', practical: '2 cups' },
    { item: 'Cornstarch', grams: '28 g', practical: '¼ cup' },
    { item: 'Granulated sugar', grams: '67 g', practical: '⅓ cup' },
    { item: 'Baking powder', grams: '8 g', practical: '2 tsp' },
    { item: 'Baking soda', grams: '1.5 g', practical: '¼ tsp' },
    { item: 'Fine salt', grams: '4.5 g', practical: '¾ tsp' },
    { section: 'Wet' },
    { item: 'Large eggs', grams: '—', practical: '2' },
    { item: 'Whole milk', grams: '360 g', practical: '1½ cups' },
    { item: 'Buttermilk', grams: '120 g', practical: '½ cup' },
    { item: 'Vanilla extract', grams: '4 g', practical: '1 tsp' },
    { item: 'Unsalted butter, melted and slightly cooled', grams: '57 g', practical: '½ stick' },
    { item: 'Neutral oil (safflower)', grams: '27 g', practical: '2 tbsp' },
    { section: 'To serve' },
    { item: 'Butter and maple syrup', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Heat the iron and set up a holding rack', body: 'Turn the waffle iron on to heat fully. Set a wire rack on a sheet pan in the oven and heat it to 200°F.', why: 'A waffle laid on a plate steams itself soft. On a rack in a low oven, it stays crisp while you finish the batch.' },
    { title: 'Whisk the dry ingredients', body: 'In a large bowl, whisk together the flour, cornstarch, sugar, baking powder, baking soda, and salt.' },
    { title: 'Whisk the wet ingredients', body: 'In a second bowl, whisk the eggs, milk, buttermilk, and vanilla. Whisking constantly, drizzle in the melted butter and then the oil.', why: 'Pour the butter in slowly while whisking. Dumped into cold dairy, it seizes into little bits.' },
    { title: 'Combine and rest', body: 'Pour the wet into the dry and fold with a spatula until no dry streaks remain. Small lumps are fine. Let the batter rest 15–30 minutes.', checkpoint: 'After resting, the batter is a little thicker and looks bubbly on top.', why: 'Overmixing builds gluten and makes tough waffles. The rest lets the flour fully hydrate, so the batter browns better and the inside is more tender.' },
    { title: 'Cook', body: 'Brush or spray the iron lightly with oil. Pour in enough batter to just cover the grid, spreading it toward the edges, and close the lid. Cook until the steam coming out the sides mostly stops, usually 3–5 minutes depending on the iron.', checkpoint: 'Deep golden brown, and it releases easily. Pale waffles go limp. If it sticks when you lift the lid, give it another 30–60 seconds.', why: 'The steam is water cooking out of the batter. Once it slows, the outside is dry enough to crisp.' },
    { title: 'Hold and serve', body: 'Move each waffle to the rack in the oven in a single layer, never stacked. Serve with butter and syrup once the batch is done, or as each one comes out.' },
  ],
  notes: [
    'Peanut butter chip waffles (our Waffle House favorite): after pouring the batter into the iron, scatter about 1 tablespoon of peanut butter baking chips over the top, then close and cook as usual. A full batch uses about ½ cup of chips. Sprinkle them on top of the batter, not on the bare iron, or the sugar scorches and sticks. Wipe the plates between waffles if melted chips build up.',
    'Night-before batter: mix it, cover, and refrigerate up to 12 hours. It makes slightly flatter waffles, but the flavor is great. Stir gently before using.',
    'Freeze leftovers in a single layer, then bag them. Reheat straight from frozen in the toaster or the air fryer (350°F, 3–4 minutes) and they crisp right back up.',
    'For a richer, more Waffle House–style waffle, swap half-and-half for half of the milk.',
  ],
});
