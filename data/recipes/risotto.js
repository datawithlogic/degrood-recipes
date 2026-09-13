// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'risotto',
  title: 'Parmesan Risotto',
  category: 'Sides',
  description: 'Arborio built ladle by ladle and finished off the heat with cold butter and a full cup of Parmesan. Stirred often but never constantly — that part is a myth, and it is what makes risotto gluey.',
  yield: 'Serves 6 as a side',
  time: '~40 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Chicken stock (Better Than Bouillon, normal strength)', grams: '1800 g', practical: '7½ cups' },
    { note: 'No salt is called for anywhere in this recipe. Better Than Bouillon at normal strength is already well salted, and the Parmesan adds more — see the first note below.' },
    { item: 'Unsalted butter, divided', grams: '56 g', practical: '4 tbsp' },
    { item: 'Extra-virgin olive oil', grams: '14 g', practical: '1 tbsp' },
    { item: 'Yellow onion, finely chopped', grams: '150 g', practical: '1 medium' },
    { item: 'Garlic, grated or pressed', grams: '6 g', practical: '2 cloves' },
    { item: 'Arborio rice', grams: '370 g', practical: '2 cups' },
    { item: 'Dry white wine (Pinot Grigio or Sauvignon Blanc)', grams: '240 g', practical: '1 cup' },
    { item: 'Parmigiano-Reggiano, finely grated', grams: '100 g', practical: '1 cup' },
    { item: 'Lemon juice', grams: '5 g', practical: '1 tsp' },
    { item: 'Fresh parsley, finely chopped', grams: '4 g', practical: '2 tbsp' },
    { item: 'Freshly cracked black pepper', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Heat the stock', body: 'Bring the 1800 g stock to a bare simmer in a saucepan, then hold it on the lowest heat for the whole cook.', checkpoint: 'Steaming with an occasional bubble — not boiling, which would reduce it and concentrate the salt.', why: 'Cold stock drops the pan temperature every time you add it, which stalls the cooking and slows the starch release that makes the dish creamy.' },
    { title: 'Soften the onion', body: 'Melt 28 g of the butter with the 14 g olive oil in a Dutch oven or wide, heavy pot over medium-low. Add the 150 g onion and cook 6–7 minutes, stirring often.', checkpoint: 'Soft and fully translucent with no color at all. Browning the onion tints the finished risotto grey-gold and pushes it sweet.' },
    { title: 'Add the garlic', body: 'Stir in the 6 g garlic and cook 30 seconds.', checkpoint: 'Fragrant, not browned.' },
    { title: 'Toast the rice', body: 'Add the 370 g Arborio and raise the heat to medium. Stir constantly for about 3 minutes.', checkpoint: 'Grain edges have gone translucent while the centers stay chalky white, and the rice smells faintly nutty.', why: 'Toasting firms the outside of each grain so it holds its shape through 25 minutes of stirring instead of collapsing into porridge.' },
    { title: 'Deglaze with wine', body: 'Pour in the 240 g wine. Stir for about 2 minutes until it is mostly absorbed.', checkpoint: 'A spoon dragged across the pan bottom leaves a channel that fills in slowly.' },
    { title: 'Build the risotto', body: 'Add the hot stock about a ladleful at a time — roughly a cup, enough to just cover the rice — waiting until each addition is nearly absorbed before the next. Keep the pot at a lively simmer and stir often, every 20 or 30 seconds, but put the spoon down in between. Expect 20–25 minutes, and most of the stock.', checkpoint: 'Bite a grain: tender through with a firm, distinct center, no chalk. Start tasting at 18 minutes.', why: 'Constant stirring is the myth worth dropping. It whips air in and cools the pan, and the result is gluey rather than creamy. Stir often enough to keep the grains moving against each other and the starch coming off, and no more than that.' },
    { title: 'Rest, then mantecare', body: 'Pull the pot off the heat, cover, and let it sit 2 minutes. Then add the remaining 28 g butter straight from the fridge, all 100 g Parmesan, and the 5 g lemon juice, and beat hard with a wooden spoon for 30–60 seconds.', checkpoint: 'All\'onda — shake the pot and the surface ripples in a slow wave. On the plate it should mound and then relax, not run to the edges.', why: 'This is mantecatura. Cold butter emulsifies into the starch instead of splitting out as grease, and the rest lets the pan drop below the temperature where Parmesan turns stringy.' },
    { title: 'Taste and serve', body: 'Taste before reaching for salt — between the bouillon and the cheese it is usually there already. Add pepper, loosen with a splash more hot stock if it has tightened, and serve straight away in warm bowls with the 4 g parsley and more Parmesan.', checkpoint: 'Still flowing when it hits the bowl. Risotto sets up fast, so plate it a shade looser than you want to eat it.' },
  ],
  notes: [
    'On salt: Better Than Bouillon at normal strength plus 100 g of Parmesan puts this near the ceiling on its own, which is why no salt is listed. If a batch reads salty to you, swap 360 g (1½ cups) of the stock for plain water next time — that is how America\'s Test Kitchen builds theirs, and it gives you the seasoning back under your own control.',
    'You may not need all 1800 g of stock, or you may want a splash past it. Ratios get you close; the texture check at the end is what decides. Keep the pot hot until the risotto is in bowls.',
    'Add-ins go in near the end so they do not break down: peas or roasted asparagus with the last ladle, sautéed mushrooms folded in at the rest, crisped pancetta scattered on top.',
    'It does not hold — the starch keeps setting and it turns stiff within about 10 minutes. Leftovers are better repurposed than reheated: chill overnight, roll with a cube of mozzarella inside, bread, and fry for arancini.',
  ],
});
