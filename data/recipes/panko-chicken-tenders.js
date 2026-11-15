// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'panko-chicken-tenders',
  title: 'Panko Chicken Tenders',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Our Ponko night at home: salted chicken tenders in a light, shattering Japanese panko crust, shallow-fried in a skillet and served over rice-cooker rice with a bottled dipping sauce.',
  yield: 'Serves 4',
  time: '~40 min (+30 min salt rest)',
  skill: 'Easy',
  ingredients: [
    { section: 'Chicken' },
    { item: 'Chicken tenderloins (or breasts cut into strips)', grams: '680 g', practical: '1½ lb' },
    { item: 'Fine salt', grams: '4.5 g', practical: '¾ tsp' },
    { item: 'Garlic powder', grams: '0.8 g', practical: '¼ tsp' },
    { item: 'White pepper', grams: '0.6 g', practical: '¼ tsp' },
    { section: 'Breading' },
    { item: 'All-purpose flour', grams: '38 g', practical: '5 tbsp' },
    { item: 'Whole eggs', grams: '—', practical: '2 large' },
    { item: 'High-oleic safflower oil (for the egg)', grams: '13 g', practical: '1 tbsp' },
    { item: 'Japanese panko', grams: '150 g', practical: '2½ cups' },
    { note: 'Use real Japanese-style panko — big, jagged, dry flakes. Fine Italian-style breadcrumbs give a dense, heavy crust instead.' },
    { section: 'Frying and serving' },
    { item: 'High-oleic safflower oil, for frying', grams: '—', practical: '¾ inch deep in skillet' },
    { item: 'White rice, cooked in the rice cooker', grams: '—', practical: '2 rice cups' },
    { item: 'Bottled yum yum sauce or honey mustard, for dipping', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Start the rice', body: 'Rinse the rice and start the rice cooker, water to the line. It will be done about when the chicken is.' },
    { title: 'Trim and salt the chicken', body: 'Pull off the white tendon from each tenderloin, or cut breasts into strips about ¾ inch thick. Toss with the salt, garlic powder, and white pepper and refrigerate uncovered on a plate at least 30 minutes, up to overnight.', why: 'Salting ahead gives the salt time to work into the meat, so the tenders season through and hold on to their juice in the hot oil. This is what makes them juicy rather than just crunchy.' },
    { title: 'Set up the breading', body: 'Line up three dishes: the flour; the eggs beaten smooth with the 13 g of oil; and the panko. Pat the chicken dry with a paper towel.', why: 'A little oil in the egg thins it so it coats evenly and helps the panko brown.' },
    { title: 'Bread', body: 'Dredge each tender in flour and tap off the excess, dip it in egg and let it drip, then set it in the panko and press crumbs on all sides with a dry hand. Lay them on a sheet pan in a single layer.', checkpoint: 'A thick, even jacket of flakes with no bald spots. Keep one hand for wet and one for dry or your fingers turn into breaded clubs.' },
    { title: 'Heat the oil', body: 'Pour oil ¾ inch deep into a 12-inch skillet or wide heavy pot and heat over medium to 340°F (170°C). Set a wire rack over a sheet pan.', checkpoint: 'A pinch of panko dropped in sizzles right away and floats, but does not darken for several seconds.', why: 'Panko browns much faster than a flour coating. A slightly lower temperature than you would use for the Crispy Chicken Sandwich lets the chicken cook through before the crust goes past golden.' },
    { title: 'Fry', body: 'Fry in batches without crowding, 2–3 minutes per side, adjusting the heat to hold 325–340°F. Drain on the rack, standing a few on their edges, and skim loose crumbs out of the oil between batches.', checkpoint: 'Light-to-medium golden, crisp when tapped, and 160°F in the thickest tender. It reaches 165°F as it rests.' },
    { title: 'Serve', body: 'Slice the tenders on a bias if you like, set them over the rice, and serve with the dipping sauce on the side.' },
  ],
  notes: [
    'Why shallow-fry: an air fryer turns raw panko pale and dusty unless it gets plenty of oil, and even then the crust is drier and less even. A skillet of oil is quick, uses far less oil than a deep pot, and gives the real Ponko crunch.',
    'Air fryer instead: toast the panko in a dry skillet with 2 tbsp of oil, stirring, until light golden, then cool it and bread as written. Spray the tenders well and air fry at 400°F for 10–12 minutes, flipping halfway, to 160°F.',
    'Freezer nuggets: bread extra tenders or chunks, freeze on a sheet pan, then bag them. Fry from frozen at 325°F, adding a minute or two, or air fry at 400°F for 12–14 minutes. This is the homemade swap for the bagged frozen panko nuggets.',
    'Reheat leftovers in the air fryer at 375°F for 4–5 minutes.',
  ],
});
