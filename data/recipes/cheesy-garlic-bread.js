// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'cheesy-garlic-bread',
  title: 'Cheesy Garlic Bread',
  category: 'Bread',
  subcat: 'Savory',
  description: 'A pull-apart slab built on a ball of pizza dough — garlic butter underneath, a full blanket of mozzarella and Parmesan on top, broiled to blistered. Unlike our Garlic Butter Breadsticks, which are shaped ropes buttered after baking, this one bakes with the cheese on and gets torn into strips.',
  yield: '12 strips',
  time: '~30 min (dough already made)',
  skill: 'Easy',
  ingredients: [
    { section: 'Base' },
    { item: 'Pizza dough, at room temperature', grams: '450 g', practical: '1 lb ball' },
    { section: 'Garlic Butter' },
    { item: 'Unsalted butter, melted', grams: '28 g', practical: '2 tbsp' },
    { item: 'Garlic, minced', grams: '8 g', practical: '2 cloves' },
    { item: 'Italian seasoning', grams: '1 g', practical: '1 tsp' },
    { item: 'Garlic powder', grams: '1.5 g', practical: '½ tsp' },
    { item: 'Table salt (fine)', grams: '1.5 g', practical: '¼ tsp' },
    { section: 'Top' },
    { item: 'Low-moisture mozzarella, shredded', grams: '226 g', practical: '2 cups' },
    { item: 'Parmesan, finely grated', grams: '22 g', practical: '¼ cup' },
    { item: 'Dried parsley', grams: '0.5 g', practical: '1 tsp' },
    { note: 'Shred the mozzarella yourself if you can — bagged shreds are coated in starch and brown less evenly under the broiler.' },
  ],
  steps: [
    { title: 'Heat the oven and rest the dough', body: 'Heat the oven to 425°F (220°C) with a rack in the upper third. Let the 450 g dough sit covered at room temperature for 30–45 minutes before you try to stretch it.', checkpoint: 'The dough gives when you press it and the dent fills back in slowly. Cold dough springs straight back and will not hold a rectangle.' },
    { title: 'Make the garlic butter', body: 'Melt the 28 g butter, then stir in the minced garlic, Italian seasoning, garlic powder, and salt. Let it stand while you shape the dough.', why: 'The salt goes in the butter rather than on the dough — it dissolves there and spreads evenly across the whole slab instead of landing in patches.' },
    { title: 'Shape the slab', body: 'Line a half-sheet pan (13×18") with parchment. Press and stretch the dough into a rectangle roughly 9×13", leaving a slightly thicker border. If it fights you, rest it 5 minutes and go again.', checkpoint: 'Even thickness throughout, no thin translucent spots that will tear.' },
    { title: 'Butter and cheese', body: 'Brush the garlic butter over the entire surface, right out to the edges. Scatter the 226 g mozzarella evenly over the dough, then the 22 g Parmesan on top of it.', checkpoint: 'Cheese covers the dough edge to edge — bare spots bake into dry crackers.' },
    { title: 'Bake', body: 'Bake 12–15 minutes.', checkpoint: 'Cheese is fully melted and the crust edge is golden. Lift a corner with a spatula — the underside should be browned, not pale and floppy.' },
    { title: 'Broil', body: 'Switch to broil and watch through the door for 1–2 minutes. Pull it the moment the cheese blisters.', checkpoint: 'Cheese bubbling with dark brown spots across the surface. This goes from perfect to burnt in about 20 seconds, so do not walk away.' },
    { title: 'Rest, garnish, cut', body: 'Let it sit 5 minutes on the pan, then sprinkle with the dried parsley. Cut into 12 strips with a pizza wheel and serve warm with marinara or ranch.', why: 'The rest lets the molten cheese set just enough that it stays on the bread when you cut, instead of sliding off in one sheet.' },
  ],
  notes: [
    'Dough: our Neapolitan Pizza Dough recipe makes 560 g total as two balls — use the whole batch and stretch it a little thicker, or one 280 g ball for a half-size slab. Store-bought dough works fine; a 1 lb ball is the standard supermarket size.',
    'Make-ahead: shape, butter, and cheese the slab up to 4 hours ahead, cover, and refrigerate. Bake straight from the fridge, adding 2–3 minutes.',
    'Storage: refrigerate leftovers up to 3 days. Reheat on a sheet pan at 400°F for 6–8 minutes — the microwave makes the crust leathery.',
    'Good additions: pepperoni under the cheese, or a handful of pickled jalapeños on top before baking.',
  ],
});
