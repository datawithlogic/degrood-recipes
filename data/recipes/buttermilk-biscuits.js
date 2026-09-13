// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'buttermilk-biscuits',
  title: 'Buttermilk Biscuits',
  category: 'Bread',
  subcat: 'Savory',
  description: 'Tall, flaky biscuits built on grated frozen butter and a few letter folds. Buttermilk and a hot oven do the rest — no yeast, no rise time, on the table in about half an hour.',
  yield: 'Makes 8',
  time: '~35 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Dough' },
    { item: 'All-purpose flour', grams: '240 g', practical: '2 cups' },
    { item: 'Baking powder', grams: '10 g', practical: '2¼ tsp' },
    { item: 'Baking soda', grams: '1 g', practical: '¼ tsp' },
    { item: 'Table salt (fine)', grams: '4.5 g', practical: '¾ tsp' },
    { item: 'Unsalted butter, frozen solid', grams: '113 g', practical: '8 tbsp' },
    { item: 'Buttermilk, cold', grams: '180 g', practical: '¾ cup' },
    { note: 'Use table or fine sea salt here. If you only keep Diamond Crystal kosher salt, measure 1½ tsp instead — the grams are what matter.' },
    { section: 'Finish' },
    { item: 'Unsalted butter, melted', grams: '14 g', practical: '1 tbsp' },
  ],
  steps: [
    { title: 'Freeze the butter, heat the oven', body: 'Put the 113 g butter in the freezer for at least 30 minutes — overnight is fine. Heat the oven to 450°F (232°C) with a rack in the upper third. Line a sheet pan with parchment.', checkpoint: 'The butter should be rock hard, not merely cold — a warm stick smears on the grater instead of shredding.' },
    { title: 'Whisk the dry ingredients', body: 'Whisk the 240 g flour, baking powder, baking soda, and salt together in a wide bowl until completely uniform.', why: 'Buttermilk is acidic, so a little baking soda neutralizes it and lets the baking powder work at full strength. It also encourages browning — the reason these go golden at 450°F without drying out.' },
    { title: 'Grate in the butter', body: 'Shred the frozen 113 g butter on the large holes of a box grater directly into the flour. Toss with your fingertips every few strokes so the shreds stay separate and coated.', checkpoint: 'You should see distinct butter shards throughout the flour, none of them clumped or shiny from melting.' },
    { title: 'Add the buttermilk', body: 'Pour in the 180 g cold buttermilk and stir with a fork just until no dry flour remains. The dough will look rough and a little shaggy — that is correct. Do not knead it in the bowl.', checkpoint: 'Dough holds together when squeezed but is still craggy on top. Stop there.' },
    { title: 'Fold for layers', body: 'Turn the dough onto a lightly floured counter and pat it into a rough rectangle about 1 inch thick. Fold it in thirds like a letter, rotate 90°, and pat out again. Repeat for 4 folds total, flouring lightly only if it sticks.', checkpoint: 'By the last fold the dough is smooth on the outside with thin butter streaks visible at the cut edges.', why: 'Each fold stacks flour-and-butter sheets on top of one another. In the oven the butter shards steam, prying those sheets apart — that is what makes a biscuit pull open in layers instead of baking into a scone.' },
    { title: 'Cut', body: 'Pat the dough to a final ¾ inch thickness. Cut with a floured 2½-inch round cutter, pressing straight down and lifting straight up. Gather the scraps, press together once, and cut the rest — you should get 8.', checkpoint: 'Cut edges look open and layered, not smeared closed.', why: 'Twisting the cutter shears and seals the edge, pinching the layers shut so the biscuit can only rise from the middle. A clean straight cut leaves every layer free to climb.' },
    { title: 'Bake', body: 'Arrange the biscuits on the pan so their sides just touch — this helps them push each other upward. Bake 14–16 minutes.', checkpoint: 'Tops are deep golden, sides look dry and set, and a biscuit lifted off the pan feels light for its size.' },
    { title: 'Butter the tops', body: 'Brush the hot biscuits with the 14 g melted butter the moment they come out. Serve within a few minutes.' },
  ],
  notes: [
    'No buttermilk? Stir 15 g lemon juice or white vinegar into 180 g whole milk and let it sit 10 minutes. It is a real substitute but slightly thinner, so the dough will be a touch wetter.',
    'Make-ahead: cut the biscuits, freeze them solid on the pan, then bag them. Bake from frozen at 450°F, adding 3–4 minutes.',
    'Storage: best the day they are baked. Keep leftovers in a paper bag at room temperature and revive in a 350°F oven for 5 minutes — the microwave turns them rubbery.',
    'For cheddar-chive biscuits, toss 85 g shredded sharp cheddar and a small handful of chopped chives into the flour with the grated butter.',
  ],
});
