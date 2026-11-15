// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'mozzarella-sticks',
  title: 'Mozzarella Sticks',
  category: 'Sides',
  description: 'A freezer batch of double-breaded string cheese sticks. Freezing them solid before they hit the oil is what keeps the cheese inside, and a quick fry in hot oil gives a crisp shell with a molten pull.',
  yield: '48 sticks (freezer batch, about 4 nights)',
  time: '~45 min active (+2 hr freeze)',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Cheese' },
    { item: 'Mozzarella string cheese (low-moisture), halved crosswise', grams: '672 g', practical: '24 sticks' },
    { section: 'Breading' },
    { item: 'All-purpose flour', grams: '60 g', practical: '½ cup' },
    { item: 'Whole eggs', grams: '—', practical: '6 large' },
    { item: 'Whole milk', grams: '60 g', practical: '4 tbsp' },
    { item: 'Plain dry breadcrumbs', grams: '216 g', practical: '2 cups' },
    { item: 'Japanese panko', grams: '120 g', practical: '2 cups' },
    { item: 'Italian seasoning', grams: '3 g', practical: '2 tsp' },
    { item: 'Garlic powder', grams: '3.2 g', practical: '1 tsp' },
    { item: 'Fine salt', grams: '3 g', practical: '½ tsp' },
    { note: 'Fine breadcrumbs fill the gaps and seal the cheese; panko adds crunch. Using both beats either one alone.' },
    { section: 'To cook and serve' },
    { item: 'High-oleic safflower oil, for frying', grams: '—', practical: '2 inches deep in pot' },
    { item: 'Jarred marinara, warmed, for dipping', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Set up', body: 'Line a sheet pan with parchment and clear a flat spot in the freezer for it. Put the flour in one shallow dish. Beat the eggs with the 60 g of milk in a second. In a third, mix both breadcrumbs, the Italian seasoning, garlic powder, and salt.', why: 'String cheese is the right cheese here: low-moisture, the perfect size, and it holds its shape far longer in the heat than fresh or block mozzarella.' },
    { title: 'First coat', body: 'Work in batches of six or so. Roll each cheese piece in flour and tap off the excess, dip it in egg, then roll it in crumbs. Set it on the sheet pan.', why: 'The flour gives the egg something to grip. Without it the coating slides off the smooth cheese.' },
    { title: 'Second coat', body: 'Once all the pieces have one coat, go back through: egg again, then crumbs again, pressing the crumbs on firmly and paying attention to the ends.', checkpoint: 'A thick, solid shell with no cheese showing anywhere — especially the cut ends, where blowouts start.', why: 'One coat always has thin spots. The second layer closes them so the melting cheese has nowhere to escape.' },
    { title: 'Freeze solid', body: 'Freeze the sheet pan uncovered at least 2 hours, until the sticks are hard all the way through. Move them to freezer bags, press out the air, and label.', checkpoint: 'They clack like sticks of chalk when knocked together.', why: 'Frozen cheese buys time. The crust browns and sets before the center gets hot enough to melt and burst out.' },
    { title: 'Heat the oil', body: 'Pour oil 2 inches deep into a heavy pot and heat to 375°F (190°C). Set a wire rack over a sheet pan.', why: 'Hotter than for chicken on purpose: the shell needs to set in about a minute, before the cheese melts through.' },
    { title: 'Fry from frozen', body: 'Take out only as many sticks as you are cooking — do not thaw. Fry 5–6 at a time for 60–90 seconds, turning once, until golden. Drain on the rack and let the oil come back to 375°F between batches.', checkpoint: 'Golden brown, and the first wisp of cheese is just starting to bubble at an end. Pull them now — any longer and they split.' },
    { title: 'Rest and serve', body: 'Rest 1–2 minutes so the cheese is molten rather than lava, then serve with warm marinara.' },
  ],
  notes: [
    'Why fry instead of air fry: the published air fryer versions say it plainly. Air-fried sticks can work (frozen, sprayed well, about 360°F for 6–8 minutes), but they brown unevenly, and since the cheese heats for six minutes instead of one, a few always blow out before the crust is really crisp. The pot of oil is fast and reliable, and on fried chicken night it is already hot — fry these after the chicken.',
    'Air fryer, if you skip the pot: cook straight from frozen at 360°F, spray the basket and the sticks well, and check at 5 minutes. Pull as soon as they are golden.',
    'A blowout usually means a thin spot at the ends or a stick that softened before frying. Patch suspect sticks with an extra dip of egg and crumbs before freezing.',
    'Keeps 3 months frozen. Twelve sticks is a side for four.',
    'Strained frying oil from the Crispy Chicken Sandwich is fine to reuse here.',
  ],
});
