// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'potato-soup',
  title: 'Creamy Potato Soup',
  category: 'Soups',
  description: 'Big-batch creamy potato soup — 5 lb gold potatoes, BTB chicken stock, crispy bacon, roux-thickened, partial-blended for a creamy-chunky texture.',
  yield: '~12–14 servings',
  time: '~1 hr',
  skill: 'Easy',
  ingredients: [
    { item: 'Bacon, chopped', grams: '~340 g', practical: '12 slices' },
    { item: 'Unsalted butter', grams: '85 g', practical: '6 tbsp' },
    { item: 'Yellow onion (2 medium), diced', grams: '~400 g', practical: '~2 cups' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '6' },
    { item: 'All-purpose flour', grams: '84 g', practical: '~⅔ cup' },
    { item: 'Gold potatoes, peeled, ≤1" dice', grams: '2270 g', practical: '5 lb' },
    { item: 'Water', grams: '1900 g', practical: '8 cups' },
    { item: 'Better Than Bouillon, chicken', grams: '~50 g', practical: '8–10 tsp — start with 8' },
    { item: 'Whole milk', grams: '950 g', practical: '4 cups' },
    { item: 'Heavy cream', grams: '310 g', practical: '1⅓ cups' },
    { item: 'Kosher salt', grams: '—', practical: '~1 tsp to start — season at end' },
    { item: 'Black pepper', grams: '—', practical: '2 tsp' },
    { item: 'Ancho chili powder (optional)', grams: '—', practical: '½–1 tsp' },
    { item: 'Bay leaf + thyme sprig (optional)', grams: '—', practical: 'remove before blending' },
    { section: 'Toppings' },
    { item: 'Reserved crispy bacon, cheddar, chives/green onion, sour cream', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Make BTB broth', body: 'Heat 1.9L water in a small saucepan until steaming. Whisk in 8–10 tsp BTB until dissolved. Keep on low heat.', why: 'Hot broth added to a hot roux prevents lumping and keeps the cooking temperature stable.' },
    { title: 'Render the bacon', body: 'Add chopped bacon to a cold 8-qt Dutch oven; set over medium heat. Cook until crisp. Remove to paper towels. Leave ~2–3 tbsp bacon fat in the pot.' },
    { title: 'Sweat aromatics', body: 'Add butter to pot. When melted, add onion; cook 5–7 min until translucent and sweet. Add garlic 30–60 sec until fragrant.' },
    { title: 'Roux and bloom', body: 'Sprinkle flour over aromatics; stir constantly 2–3 min until foamy and blond. Add ancho chili powder (if using) for ~30 sec to bloom in the fat.', checkpoint: 'No raw flour smell; roux is bubbling and pale golden.' },
    { title: 'Build the soup', body: 'Add potatoes, the hot BTB broth, milk, cream, salt, pepper, and aromatics (bay/thyme). Scrape up any fond from the bottom.' },
    { title: 'Cook potatoes', body: 'Bring to a boil, then reduce to a lively simmer. Cook stirring occasionally 12–18 min until fork-tender (longer for larger dice).', checkpoint: 'A fork slides through a potato cube with no resistance.' },
    { title: 'Partial blend', body: 'Remove bay/thyme. Blend about half the pot with an immersion blender (or carefully ladle half into a stand blender and return). This gives a creamy body with plenty of chunks.' },
    { title: 'Finish and adjust', body: 'Off heat or on low, stir in half the bacon. Simmer 5–10 min to meld. Taste: add more BTB dissolved in hot water, salt, and pepper if needed. Too thick: add warm milk or water. Too thin: simmer uncovered or blend a bit more.' },
    { title: 'Serve', body: 'Ladle into bowls. Top with remaining bacon, shredded cheddar, chives, and sour cream.' },
  ],
  notes: [
    'BTB is quite salty — always start conservative with added salt and season at the very end.',
    'Keep potato dice ≤1" for even cooking. If still firm after the timer, just keep simmering.',
    'Leftovers keep 3–4 days. Reheat gently over medium-low, stirring — the roux-thickened base can scorch if rushed.',
  ],
});
