// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'korean-beef-bowl',
  title: 'Korean Gochujang Beef Bowl',
  category: 'Mains',
  subcat: 'Beef',
  description: 'Ground beef glazed in gochujang, soy, and sesame over short-grain rice. About 20 minutes start to finish.',
  yield: 'Serves 4',
  time: '~20 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Beef' },
    { item: 'Ground beef (80/20)', grams: '454 g', practical: '1 lb' },
    { item: 'Neutral oil', grams: '14 g', practical: '1 tbsp' },
    { item: 'Garlic, minced', grams: '15 g', practical: '4 cloves' },
    { item: 'Fresh ginger, grated', grams: '6 g', practical: '1 tbsp' },
    { item: 'Gochujang', grams: '32 g', practical: '2 tbsp' },
    { item: 'Soy sauce', grams: '45 g', practical: '3 tbsp' },
    { item: 'Brown sugar, packed', grams: '25 g', practical: '2 tbsp' },
    { item: 'Toasted sesame oil', grams: '13 g', practical: '1 tbsp' },
    { item: 'Rice vinegar', grams: '15 g', practical: '1 tbsp' },
    { item: 'Water', grams: '60 g', practical: '¼ cup' },
    { section: 'To serve' },
    { item: 'Short-grain white rice (dry)', grams: '300 g', practical: '~1½ cups' },
    { item: 'Water (for rice)', grams: '360 g', practical: '1½ cups' },
    { item: 'Green onions, thinly sliced', grams: '30 g', practical: '3–4 stalks' },
    { item: 'Toasted sesame seeds', grams: '4 g', practical: '1 tsp' },
  ],
  steps: [
    { title: 'Start the rice', body: 'Rinse the rice until water runs mostly clear. Combine with 360 g water in a saucepan. Bring to a boil, reduce to the lowest heat, cover, and cook 18 minutes. Remove from heat and steam covered 5 more minutes.', checkpoint: 'Rice is tender, no water remains, grains separate cleanly.' },
    { title: 'Build the sauce', body: 'Whisk together gochujang, soy sauce, brown sugar, sesame oil, rice vinegar, and water in a small bowl. Set aside.', why: 'The water is key — without it the gochujang sauce seizes and scorches as the sugar hits the hot pan.' },
    { title: 'Brown the beef', body: 'Heat a skillet over medium-high. Add neutral oil. Add the ground beef and spread into a single layer — don\'t stir immediately. Let it brown undisturbed 2–3 minutes, then break apart and cook until no pink remains.', checkpoint: 'Beef has visible browning, not just grey.' },
    { title: 'Add aromatics', body: 'Push beef to the sides of the pan. Add garlic and ginger to the center; cook 30–60 seconds until fragrant. Don\'t let the garlic brown.' },
    { title: 'Glaze', body: 'Pour the sauce over the beef and toss to coat. Cook 2–3 minutes, stirring, until the sauce thickens and clings to the meat.', checkpoint: 'Sauce looks glossy and reduced, not watery — should coat the back of a spoon.' },
    { title: 'Serve', body: 'Spoon beef over rice. Top with sliced green onions and sesame seeds.' },
  ],
  notes: [
    'Optional toppings: fried egg (runny yolk cuts the heat nicely), cucumber ribbons, kimchi, sriracha.',
    'Ground pork is a great substitute.',
    'Cooked beef keeps refrigerated 3 days. Reheat in a skillet with a splash of water.',
  ],
});
