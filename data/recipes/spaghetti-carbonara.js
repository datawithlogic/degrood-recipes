// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'spaghetti-carbonara',
  title: 'Spaghetti Carbonara',
  category: 'Mains',
  subcat: 'Pasta',
  description: 'Rendered guanciale, whole eggs plus extra yolks, Pecorino and a lot of black pepper. No cream — the sauce is an egg custard thinned with pasta water and set by the heat of the noodles.',
  yield: 'Serves 4',
  time: '~25 min',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Sauce' },
    { item: 'Large eggs, room temperature', grams: '—', practical: '3' },
    { item: 'Large egg yolks, room temperature', grams: '—', practical: '2' },
    { item: 'Pecorino Romano, finely grated', grams: '71 g', practical: '¾ cup' },
    { item: 'Black pepper, coarsely ground', grams: '2 g', practical: '1 tsp' },
    { item: 'Table salt', grams: '1 g', practical: '¼ tsp' },
    { section: 'Pasta' },
    { item: 'Guanciale, cut into ½-inch chunks', grams: '113 g', practical: '4 oz' },
    { item: 'Extra-virgin olive oil', grams: '27 g', practical: '2 tbsp' },
    { item: 'Spaghetti', grams: '454 g', practical: '1 lb' },
    { item: 'Table salt, for the pasta water', grams: '18 g', practical: '1 tbsp' },
    { note: 'Pancetta is the accepted stand-in for guanciale; bacon works but brings smoke that is not part of the dish.' },
  ],
  steps: [
    { title: 'Bring the eggs to room temperature', body: 'Set the eggs and yolks out while you prep, or drop the whole eggs in warm tap water for 5 minutes.', why: 'Cold eggs hitting hot pasta set unevenly — the outside scrambles before the middle thickens.' },
    { title: 'Render the guanciale', body: 'Put the 113 g guanciale and the 27 g olive oil in a cold 12-inch skillet and set over medium heat. Cook, stirring occasionally, 8–10 minutes.', checkpoint: 'Fat is fully liquid and the chunks are golden at the edges but still soft in the center — not brittle cracklings.', why: 'Starting cold gives the fat time to render out before the exterior browns, so you get both crisp edges and a pool of clean fat to build the sauce on.' },
    { title: 'Whisk the sauce base', body: 'In a large heatproof serving bowl, whisk the eggs, yolks, 71 g Pecorino, 2 g pepper and 1 g salt until completely uniform.', checkpoint: 'No streaks of white, and the mixture ribbons thickly off the whisk.' },
    { title: 'Cook the spaghetti', body: 'Boil the spaghetti in well-salted water until al dente. Before draining, dip out about 480 g of the cooking water.', checkpoint: 'A bitten strand still shows a thin pale line at the center.' },
    { title: 'Temper the eggs', body: 'Whisk about 120 g of the hot pasta water into the egg mixture in a slow stream, whisking constantly.', checkpoint: 'The mixture is warm to the touch, loose, and perfectly smooth — no cooked flecks.' },
    { title: 'Toss', body: 'Drain the pasta and add it straight to the skillet with the guanciale and its fat; toss 30 seconds off the heat to coat. Tip the whole skillet contents into the bowl of tempered eggs and toss hard and continuously with tongs.', checkpoint: 'Sauce turns from watery to glossy and clings to the strands; a spoon dragged through the bottom of the bowl leaves a trail that fills in slowly.' },
    { title: 'Adjust and serve', body: 'Add more of the reserved pasta water a splash at a time until the sauce flows. Serve immediately in warm bowls with extra Pecorino and pepper.', checkpoint: 'Creamy and pourable, never stiff — it tightens fast on the plate.' },
  ],
  notes: [
    'If the skillet is very hot, let it sit off heat 30 seconds before combining. Direct flame under the eggs is the only way this dish fails.',
    'Half Pecorino, half Parmesan gives a milder, less salty sauce if the full Pecorino is too sharp for the table.',
    'Leftovers do not reheat cleanly — the custard breaks. Eat it the night you make it.',
  ],
});
