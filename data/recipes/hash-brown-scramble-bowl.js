// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'hash-brown-scramble-bowl',
  title: 'Hash Brown Scramble Bowl',
  category: 'Breakfast',
  description: 'Our home version of the Chick-fil-A scramble bowl: air-fried hash brown rounds, soft cheesy scrambled eggs, and chopped crispy chicken nuggets. The air fryer does the potatoes and chicken while you scramble, so it’s on the table in about 25 minutes.',
  yield: 'Serves 4',
  time: '~25 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Crispy base' },
    { item: 'Frozen hash brown rounds or tater tots, not thawed', grams: '454 g', practical: '1 lb' },
    { item: 'Crispy chicken nuggets (leftover or frozen breaded)', grams: '300 g', practical: '16 nuggets' },
    { note: 'Leftover nuggets from the Crispy Chicken Sandwich recipe are ideal. Bagged frozen breaded nuggets work just as well.' },
    { section: 'Soft scrambled eggs' },
    { item: 'Large eggs', grams: '~400 g', practical: '8 large' },
    { item: 'Fine salt', grams: '3 g', practical: '½ tsp' },
    { item: 'Whole milk', grams: '30 g', practical: '2 tbsp' },
    { item: 'Unsalted butter', grams: '14 g', practical: '1 tbsp' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { section: 'To finish' },
    { item: 'Monterey Jack and cheddar blend, shredded', grams: '113 g', practical: '1 cup' },
    { item: 'Salsa, hot sauce, or Polynesian sauce (optional), for serving', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Salt the eggs', body: 'Crack the eggs into a bowl, add the salt, and beat with a fork until no streaks of white remain. Let them sit while the potatoes cook; beat in the milk just before they go in the pan.', why: 'Salting a few minutes ahead loosens the egg proteins so they set into softer, more tender curds instead of tightening up and weeping.' },
    { title: 'Air fry the potatoes', body: 'Spread the frozen hash brown rounds in a single layer in the air fryer basket. Air fry at 400°F (204°C) for 12–15 minutes, shaking the basket halfway. Work in two batches if they won’t fit in one layer.', checkpoint: 'Deep golden and crackly on the outside; they should sound hollow when shaken.' },
    { title: 'Crisp the chicken', body: 'For the last 4–5 minutes, push the potatoes to one side and add the nuggets (or crisp them on their own right after). Leftover nuggets need about 4 minutes; frozen ones need the time on their package, usually 8–10 minutes at 400°F. Cut them into bite-size pieces once they’re hot.', checkpoint: 'Breading is crisp again and the center is hot all the way through.' },
    { title: 'Scramble low and slow', body: 'While the chicken crisps, melt the butter in a nonstick skillet over medium-low heat. Pour in the eggs and stir slowly and constantly with a silicone spatula, scraping the bottom and sides, until they form soft, glossy curds, 3–4 minutes. Pull the pan off the heat while they still look a little wet.', checkpoint: 'Large soft curds that still shine; they keep cooking for a minute after they leave the heat.' },
    { title: 'Melt in the cheese', body: 'Off the heat, scatter about half the cheese over the eggs, add the pepper, and fold once or twice so it melts into the curds.' },
    { title: 'Build the bowls', body: 'Divide the crispy potatoes among the bowls, then top with the cheesy eggs, the chopped chicken, and the rest of the cheese. Serve right away with salsa or hot sauce on the side for the grown-ups.', why: 'Potatoes go in first and eggs on top so the hash browns stay crisp under the eggs instead of steaming beneath them.' },
  ],
  notes: [
    'Sausage instead of chicken: brown 227 g bulk breakfast sausage in a skillet over medium heat, breaking it into crumbles, until no pink remains, about 8 minutes. Drain it, then scramble the eggs in the same pan.',
    'Shredded hash browns instead of rounds: cook 454 g frozen shredded hash browns in a 12-inch skillet over medium-high heat with 27 g neutral oil, in batches if you have scaled up. Press them flat, leave them alone 5–6 minutes until browned underneath, then flip in sections and brown the other side.',
    'The restaurant bowl comes with jalapeño salsa. Keep it on the side so the kid’s bowl stays mild.',
    'Best fresh. Leftover eggs reheat fine, but the potatoes go soft. Re-crisp them in the air fryer at 400°F for 3–4 minutes.',
  ],
});
