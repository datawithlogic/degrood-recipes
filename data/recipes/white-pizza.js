// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'white-pizza',
  title: 'White Pizza (Bianca)',
  category: 'Bread',
  subcat: 'Savory',
  description: 'Our version of the MTH Bianca. One ball of New York–Style Pizza dough with no red sauce: garlic oil, mozzarella, dollops of Parmesan-and-garlic ricotta, soft sweet garlic cloves, and prosciutto draped on after the bake.',
  yield: '1 pizza (~13")',
  time: '~20 min active (+ dough from New York–Style Pizza)',
  skill: 'Intermediate',
  ingredients: [
    { item: 'New York–Style Pizza dough, cold-fermented and tempered', grams: '345 g', practical: '1 ball' },
    { section: 'Slow-cooked garlic and garlic oil' },
    { item: 'Garlic cloves, peeled', grams: '45 g', practical: '10–12 cloves' },
    { item: 'Extra-virgin olive oil', grams: '54 g', practical: '¼ cup' },
    { section: 'Toppings' },
    { item: 'Whole-milk ricotta', grams: '180 g', practical: '¾ cup' },
    { item: 'Parmesan, finely grated', grams: '14 g', practical: '3 tbsp' },
    { item: 'Fine salt', grams: '0.8 g', practical: 'a pinch' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { item: 'Low-moisture mozzarella, shredded', grams: '140 g', practical: '1¼ cups' },
    { item: 'Prosciutto, thinly sliced', grams: '57 g', practical: '2 oz' },
    { item: 'Fresh basil leaves (optional)', grams: '—', practical: 'a few' },
    { item: 'Semolina or flour, for the peel', grams: '—', practical: 'for dusting' },
  ],
  steps: [
    { title: 'Cook the garlic low and slow', body: 'Put the garlic cloves and olive oil in your smallest saucepan, tilted so the oil covers the cloves. Cook over the lowest heat, with just a lazy bubble now and then, for 20–30 minutes. Pour into a small bowl to cool. This can be done a day ahead.', checkpoint: 'The cloves are pale gold and soft enough to mash with a fork. If they brown fast, the heat is too high: brown garlic tastes bitter.', why: 'This gives you roasted-garlic cloves without needing the oven, which is busy preheating to 550°F. You also get a garlic oil to brush on the crust.' },
    { title: 'Mix the ricotta', body: 'Mash about half the garlic cloves into the ricotta with a fork. Stir in the Parmesan, salt, and pepper. Keep the rest of the cloves whole.', checkpoint: 'Creamy and spoonable. If the ricotta looks wet or weepy, drain it in a fine strainer for 15 minutes first.' },
    { title: 'Stone and dough', body: 'Temper the dough ball and preheat the stone exactly as in the New York–Style Pizza recipe (top rack, 550°F, 45–60 minutes, no parchment). Stretch the dough to about 13 inches and move it to a semolina-dusted peel.' },
    { title: 'Build', body: 'Brush the whole surface with about 1 tablespoon of the garlic oil, rim included. Scatter the mozzarella edge to edge, leaving the rim bare. Drop the ricotta mixture on in small spoonfuls, spaced apart, and tuck the whole garlic cloves in between.', checkpoint: 'Patches of ricotta with mozzarella showing between them, not one solid layer. A solid layer of ricotta steams instead of browning.', why: 'With no red sauce, the oil and the mozzarella keep the crust from drying out and give it the browned, bubbly top.' },
    { title: 'Bake', body: 'Launch onto the stone and bake 7–10 minutes.', checkpoint: 'The mozzarella is bubbling with golden spots, the ricotta is lightly browned on top, and the underside is browned and firm.' },
    { title: 'Prosciutto after the bake', body: 'Slide the pie onto a board. Right away, tear the prosciutto into loose ribbons and drape it over the top. Drizzle on a little more garlic oil, add a few torn basil leaves if you like, rest 2 minutes, and slice.', why: 'Prosciutto baked at 550°F turns salty and leathery. Laid on the hot pie, it just softens and turns a little translucent, like the restaurant version.' },
  ],
  notes: [
    'Caramelized onions: slowly cook 1 large sliced onion in butter or the garlic oil over medium-low heat for 30–40 minutes until jammy and brown. Scatter them over the mozzarella before baking. They keep 4 days in the fridge, so make them ahead.',
    'Roasted potatoes: thinly slice leftover roasted potatoes and scatter them before baking. Or slice a small Yukon Gold paper-thin on a mandoline, toss with a pinch of salt for 10 minutes, blot dry, and toss with a little garlic oil. Slices that thin cook through in the bake.',
    'Oven-roasted garlic instead: cut the top off a whole head, drizzle with oil, wrap in foil, and roast at 400°F for 40–50 minutes. Do it the day before, because the oven needs to be at 550°F for the pizza.',
    'Leftover garlic oil is great on pasta or bread. Keep it in the fridge and use it within 4 days. Never store garlic in oil at room temperature.',
  ],
});
