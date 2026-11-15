// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'air-fryer-fries',
  title: 'Air Fryer Fries',
  category: 'Sides',
  description: 'Real crisp fries from russets with a couple tablespoons of oil. A short soak, a low-temperature par-cook, and a hot finish do what the double fry does in a pot. Our side for both fried chicken night and burger night.',
  yield: 'Serves 3–4',
  time: '~50 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Russet potatoes, peeled', grams: '680 g', practical: '1½ lb' },
    { item: 'High-oleic safflower oil', grams: '27 g', practical: '2 tbsp' },
    { item: 'Fine salt, to finish', grams: '3 g', practical: '½ tsp' },
    { item: 'Black pepper (optional)', grams: '0.6 g', practical: '¼ tsp' },
    { note: 'Russets only. Their high starch and low moisture are what give a fluffy center and crisp shell; waxy potatoes turn out leathery.' },
  ],
  steps: [
    { title: 'Cut', body: 'Cut the potatoes into ½-inch planks, then stack the planks and cut into ½-inch sticks.', checkpoint: 'Even sticks. Uneven fries mean some burn while others stay limp.' },
    { title: 'Rinse and soak', body: 'Rinse the sticks in a bowl of cold water until the water stops going cloudy. Drain, cover with hot tap water, and soak 10 minutes.', why: 'Rinsing washes off loose surface starch that would otherwise glue the fries together and scorch. The hot soak starts softening the outside so the par-cook goes faster.' },
    { title: 'Dry completely', body: 'Drain and spread the fries on a clean kitchen towel. Roll them up and pat until the surfaces feel dry, not damp.', why: 'Water on the surface has to steam off before anything can brown. Dry fries crisp; wet ones steam.' },
    { title: 'Oil and par-cook', body: 'Toss the fries with the 27 g of oil in a large bowl. Spread them in the air fryer basket and cook at 350°F for 15–20 minutes. Halfway through, tip them into the bowl, toss gently, and return them to the basket.', checkpoint: 'Soft all the way through when pinched, but still pale with no real color.', why: 'This is the air-fryer version of the first, low-temperature fry. It cooks the inside fully before the outside sets, which is what gives you a fluffy center.' },
    { title: 'Crisp', body: 'Raise the temperature to 400°F and cook about 15 minutes more, tossing in the bowl every 5 minutes.', checkpoint: 'Deep golden, blistered at the edges, and they rattle when you shake the basket.', why: 'Tossing in the bowl instead of shaking the basket breaks far fewer fries.' },
    { title: 'Season and serve', body: 'Tip into the bowl, toss with the salt and pepper while hot, and serve right away.', checkpoint: 'Salt sticks on contact. Wait a minute and it slides right off.' },
  ],
  notes: [
    'Bigger batch: an overfilled basket steams instead of crisping. If the fries are more than two layers deep, par-cook in two loads, then combine everything for the 400°F finish, adding a few minutes.',
    'Hold the first batch in a 200°F oven on a sheet pan while the second crisps.',
    'Seasoned-salt or garlic fries: swap the plain salt for seasoned salt, or toss with a little garlic powder and grated Parmesan at the end.',
    'Reheat at 400°F for 3–4 minutes. They come back nearly as crisp as fresh.',
  ],
});
