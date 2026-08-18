// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'chicken-cordon-bleu-casserole',
  title: 'Chicken Cordon Bleu Casserole',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Weeknight shortcut casserole — rotisserie chicken, smoked ham, fluffy rice, Gruyère, and a condensed-soup cream sauce. About 10 minutes of hands-on work.',
  yield: 'Serves 4–6',
  time: '~45 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Base' },
    { item: 'White rice, uncooked', grams: '~270 g', practical: '1⅓ cups' },
    { item: 'Water', grams: '—', practical: 'per rice cooker line' },
    { item: 'Shredded rotisserie chicken', grams: '~340 g', practical: '~3 cups' },
    { item: 'Smoked ham, diced ¼"', grams: '~150 g', practical: '~1 cup' },
    { section: 'Sauce' },
    { item: 'Condensed cream of chicken soup', grams: '~298 g', practical: '1 can (10.5 oz)' },
    { item: 'Whole milk', grams: '180 g', practical: '¾ cup' },
    { item: 'Dijon mustard (optional)', grams: '—', practical: '1 tsp' },
    { item: 'Garlic powder (optional)', grams: '—', practical: '½ tsp' },
    { item: 'Black pepper', grams: '—', practical: '¼ tsp' },
    { section: 'Topping' },
    { item: 'Gruyère, shredded', grams: '~115 g', practical: '1 cup' },
    { item: 'Panko breadcrumbs or crushed crackers', grams: '~55 g', practical: '½ cup' },
    { item: 'Unsalted butter, melted', grams: '28 g', practical: '2 tbsp' },
  ],
  steps: [
    { title: 'Cook rice', body: 'Rinse rice until runoff is only slightly cloudy. Cook in rice cooker (optional: swap ¼ cup water with milk for extra richness).', checkpoint: 'Cooker switches to Warm; fork-fluffed rice is tender, not wet.' },
    { title: 'Whisk sauce', body: 'Whisk condensed soup + milk until completely smooth. Add Dijon, garlic powder, and pepper.', checkpoint: 'Mixture flows like thick cream, no lumps.' },
    { title: 'Layer', body: 'Lightly grease 9×13" baking dish. Fluff rice and spread evenly. Scatter chicken and ham over rice. Pour sauce evenly, nudging into corners until rice is mostly coated. Sprinkle Gruyère.' },
    { title: 'Add crunch topping', body: 'Toss panko with melted butter until evenly glossy. Distribute over casserole.' },
    { title: 'Bake uncovered', body: 'Bake at 350°F (175°C) for 25 min.', checkpoint: 'Edges bubbling, topping golden, center ≥165°F. Add 5-min intervals if needed.' },
    { title: 'Rest and serve', body: 'Let stand 5 min to set before scooping.' },
  ],
  notes: [
    'Jarlsberg is a solid Gruyère substitute.',
    'Reheat individual portions covered at 350°F until 165°F internal (~15 min).',
  ],
});
