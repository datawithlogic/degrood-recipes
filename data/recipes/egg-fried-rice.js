// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'egg-fried-rice',
  title: 'Egg Fried Rice',
  category: 'Sides',
  description: 'Cold day-old rice, four eggs, scallions, and a hot pan. A teaspoon of dark soy sauce is what takes it from pale and sad to that even toasty brown you get at a restaurant.',
  yield: 'Serves 4',
  time: '~15 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Rice and eggs' },
    { item: 'Cooked white rice, cold from the fridge', grams: '630 g', practical: '4 cups' },
    { item: 'Large eggs, beaten', grams: '—', practical: '4 eggs' },
    { section: 'Seasoning — mix this in one small bowl' },
    { item: 'Light soy sauce', grams: '18 g', practical: '1 tbsp' },
    { item: 'Dark soy sauce', grams: '6 g', practical: '1 tsp' },
    { item: 'Granulated sugar', grams: '2 g', practical: '½ tsp' },
    { item: 'White pepper', grams: '—', practical: '¼ tsp' },
    { note: 'These two soy sauces do completely different jobs and are not interchangeable. LIGHT soy sauce is the salt — thin, sharp, and what "soy sauce" means in most American recipes. DARK soy sauce is aged much longer and usually cut with molasses or caramel; it is syrupy, faintly sweet, and there for color and a low molasses-y depth, not seasoning. Swap dark for light and the rice comes out grey-brown, sweet, and badly underseasoned. Swap light for dark and you get a pale bowl that is far too salty before it ever looks right.' },
    { section: 'Pan' },
    { item: 'Neutral oil', grams: '41 g', practical: '3 tbsp' },
    { item: 'Scallions, thinly sliced, whites and greens kept separate', grams: '40 g', practical: '4 scallions' },
    { item: 'Kosher salt', grams: '—', practical: '½ tsp' },
    { item: 'Toasted sesame oil', grams: '5 g', practical: '1 tsp' },
  ],
  steps: [
    { title: 'Break up the rice and set out everything else', body: 'Tip the cold rice into a bowl and work it with your fingers or a fork until there are no clumps left larger than a pea. Beat the eggs, mix the two soy sauces with the sugar and white pepper in a small bowl, and slice the scallions. Put all of it next to the stove.', checkpoint: 'The rice pours off a spoon in loose grains rather than sliding off in a sheet.', why: 'Cold rice has had time for its surface starch to firm up and its outer moisture to evaporate, so the grains fry and separate. Fresh hot rice is still soft and wet on the outside and steams into a sticky mass no matter how hot the pan is.' },
    { title: 'Get the pan properly hot', body: 'Set a wok or 12-inch carbon-steel or nonstick skillet over the highest heat your burner has and leave it there a full 2 minutes before the oil goes in. Add the oil and swirl to coat.', checkpoint: 'The oil shimmers and moves like water, with the first wisps of smoke coming off it.', why: 'Fried rice is a dry-heat dish. A pan that is merely hot will sweat the rice instead of toasting it, and you get steamed leftovers with egg in them.' },
    { title: 'Scramble the eggs most of the way', body: 'Pour in the beaten eggs and let them sit undisturbed 10–15 seconds, then stir twice with a spatula and pull the pan off the heat while the curds are still visibly wet.', checkpoint: 'Large soft curds with some raw egg still loose around them. They will finish cooking on the rice.' },
    { title: 'Rice goes straight onto the eggs', body: 'Return the pan to high heat and add the rice directly on top of the eggs. Chop down through it with the edge of the spatula for about 30 seconds to break the curds into the grains.', checkpoint: 'Egg is distributed in small flecks throughout instead of sitting in one yellow raft.' },
    { title: 'Toast the rice', body: 'Press the rice into an even layer and leave it completely alone for 30–45 seconds, then toss and press again. Repeat this two or three times over about 2 minutes.', checkpoint: 'You hear a steady, vibrant sizzle and the grains start popping and jumping against the pan. Grains bounce when you toss them instead of falling back in a lump.' },
    { title: 'Season, and this is where the dark soy earns it', body: 'Add the scallion whites and the salt and toss 15 seconds. Re-stir the soy mixture and drizzle it around the hot rim of the pan rather than into the middle, then toss hard and continuously for 30–45 seconds.', checkpoint: 'Every grain turns an even light amber-brown with no pale patches and no dark puddles. If some rice is still white, keep tossing before you reach for more sauce — it is almost always a mixing problem, not an amount problem.', why: 'Only 6 g of dark soy sauce colors the whole pan because the caramel in it is enormously concentrated. Pouring it down the hot side of the pan lets it hit metal and caramelize for a beat before it touches the rice, which is where the toasty edge comes from.' },
    { title: 'Finish off the heat', body: 'Kill the burner, add the scallion greens and the sesame oil, and toss twice. Serve right away.', checkpoint: 'Scallion greens are bright and barely wilted, not army green. Sesame oil goes in off the heat because its aroma cooks off in seconds.' },
  ],
  notes: [
    'No day-old rice? Spread freshly cooked rice on a sheet pan in a thin layer and leave it uncovered in the fridge for 45 minutes. Not as good, but workable.',
    'Dark soy sauce is sold as lǎo chōu (老抽) and light as shēng chōu (生抽); Pearl River Bridge and Lee Kum Kee are the standard jars in US Chinese groceries. If you only ever buy one dark soy, get the plain kind rather than the mushroom-flavored one. Want a deeper color? Go to 2 tsp, but taste first — past that it starts tasting sweet.',
    'This is the base. Add 150 g of diced char siu, shrimp, or thawed frozen peas along with the scallion whites, and cut the rice back to 500 g so the pan does not crowd.',
    'Fried rice is better the day it is made but reheats fine in a hot dry skillet. Do not microwave it — the grains go back to being soft and sticky.',
  ],
});
