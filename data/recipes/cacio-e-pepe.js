// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'cacio-e-pepe',
  title: 'Cacio e Pepe',
  category: 'Mains',
  subcat: 'Pasta',
  description: 'Three ingredients, no cream: spaghetti tossed with toasted black pepper and a paste of Pecorino Romano loosened with starchy pasta water. Cook the pasta in less water than usual so the water itself does the emulsifying.',
  yield: 'Serves 4',
  time: '~20 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Spaghetti', grams: '454 g', practical: '1 lb' },
    { item: 'Water, for boiling', grams: '~2850 g', practical: '3 quarts' },
    { item: 'Table salt, for the pasta water', grams: '12 g', practical: '2 tsp' },
    { item: 'Pecorino Romano, finely grated on a rasp grater', grams: '142 g', practical: '1⅔ cups' },
    { item: 'Unsalted butter', grams: '57 g', practical: '4 tbsp' },
    { item: 'Black peppercorns, coarsely ground', grams: '3 g', practical: '1½ tsp' },
    { item: 'Extra-virgin olive oil, for finishing', grams: '—', practical: 'to taste' },
    { note: 'Use imported Pecorino Romano and grate it yourself — pre-shredded cheese is coated in anti-caking starch and will refuse to melt smoothly.' },
  ],
  steps: [
    { title: 'Boil in a small pot of water', body: 'Bring the water to a boil in a large saucepan or Dutch oven — deliberately less water than you would normally use for 454 g of pasta. Add the salt and the spaghetti and cook, stirring often for the first minute so it does not weld together.', checkpoint: 'The water looks visibly cloudy within a few minutes — that is the starch you need.', why: 'Cooking a pound of pasta in only 3 quarts concentrates the dissolved starch. That starch is the emulsifier that keeps melted Pecorino in suspension instead of seizing into strings.' },
    { title: 'Toast the pepper', body: 'While the pasta cooks, melt the 57 g butter in a 12-inch skillet over medium heat. Add the 3 g coarsely ground pepper and cook, swirling, about 1 minute.', checkpoint: 'The pepper smells sharp and floral and sizzles quietly in the foaming butter — it should not smoke or darken.' },
    { title: 'Reserve the water and drain', body: 'When the pasta is just al dente, dip out about 480 g of the cooking water into a measuring cup. Drain the pasta but do not rinse it.', checkpoint: 'Al dente: a bitten strand shows a thin pale core.' },
    { title: 'Make the cheese paste', body: 'Put about 100 g of the Pecorino in a small bowl. Whisk in roughly 120 g of the hot pasta water, a splash at a time.', checkpoint: 'A smooth, pourable paste the texture of thin pancake batter — no visible dry cheese grains.', why: 'Hydrating the cheese off the heat, into water rather than fat, gets it fully dissolved before it can ever hit a temperature where the proteins tighten and clump.' },
    { title: 'Combine off high heat', body: 'Return the drained pasta to the skillet with the peppered butter over low heat. Add another 120 g of pasta water and toss vigorously with tongs for about 1 minute.', checkpoint: 'The pasta looks slick and the liquid has gone from watery to lightly syrupy.' },
    { title: 'Add the cheese', body: 'Pull the skillet off the burner entirely. Pour in the cheese paste and toss hard and continuously.', checkpoint: 'Glossy and creamy, no grainy texture, sauce clinging to every strand rather than pooling in the pan.' },
    { title: 'Adjust and serve', body: 'Loosen with more pasta water a splash at a time if the sauce tightens; it will thicken as it cools, so err slightly loose. Divide among warm bowls, shower with the remaining 42 g Pecorino, add a thread of olive oil and more pepper.', checkpoint: 'Sauce still flows when the bowl is tilted.' },
  ],
  notes: [
    'Warm the serving bowls under hot tap water — cold bowls chill the sauce and it goes pasty within seconds.',
    'If the sauce breaks into stringy clumps, it got too hot. Pull it off the heat, add a splash of cool pasta water, and toss hard; it will usually come back.',
    'Bucatini or tonnarelli both work; the extra surface area holds more sauce.',
    'This does not reheat. Make only what you will eat.',
  ],
});
