// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'stir-fry-sauce',
  title: 'All-Purpose Stir-Fry Sauce',
  category: 'Sauces',
  description: 'The master formula behind every stir-fry on this site. Mix a jar, keep it in the fridge, pour a measured amount per dish. Seven ingredients, each doing one job — salt, color, aroma, sweet, umami, body, finish.',
  yield: 'About 2⅓ cups — enough for 3 stir-fries',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Body — what carries everything else' },
    { item: 'Chicken stock (or water)', grams: '360 g', practical: '1½ cups' },
    { section: 'Salt and umami' },
    { item: 'Light soy sauce', grams: '72 g', practical: '¼ cup' },
    { item: 'Oyster sauce', grams: '42 g', practical: '2 tbsp' },
    { section: 'Color' },
    { item: 'Dark soy sauce', grams: '29 g', practical: '1½ tbsp' },
    { section: 'Aroma' },
    { item: 'Shaoxing wine', grams: '30 g', practical: '2 tbsp' },
    { section: 'Sweet and finish' },
    { item: 'Brown sugar, packed', grams: '13 g', practical: '1 tbsp' },
    { item: 'Toasted sesame oil', grams: '9 g', practical: '2 tsp' },
    { item: 'White pepper', grams: '—', practical: '¼ tsp' },
    { item: 'Salt', grams: '—', practical: '¼ tsp' },
    { note: 'Cornstarch is deliberately not on this list. It is whisked fresh at the wok — 1 tbsp cornstarch (8 g per stir-fry) into 1 tbsp cold water. Keeping it in the jar means the starch settles into a hard pad at the bottom that has to be scraped loose every time, and a wet starch slurry sitting in the fridge for weeks is the one part of this sauce that will actually spoil.' },
  ],
  steps: [
    { title: 'Measure the liquids into a jar', body: 'Into a pint jar, add the 360 g stock, 72 g light soy sauce, 42 g oyster sauce, 29 g dark soy sauce, and 30 g Shaoxing wine. A jar with a tight lid, not a bowl — this gets shaken, stored, and poured from the same container.' },
    { title: 'Add the seasonings and shake', body: 'Add the 13 g brown sugar, 9 g sesame oil, white pepper, and salt. Cap it and shake hard for 15 seconds.', checkpoint: 'No sugar grit left on the bottom when you tip the jar, and the oyster sauce has gone from a streaky ribbon to fully dispersed. The sauce should be a uniform dark mahogany — opaque, not translucent.' },
    { title: 'Label and refrigerate', body: 'Write the date on the lid. It goes in the fridge door and is ready whenever you are.', why: 'Dark soy is doing color, not salt. It is aged longer than light soy and usually has molasses or caramel added, which gives it a thick, faintly molasses-y depth and turns a whole wok amber with a teaspoon or two. Light soy is the salt — thin, sharp, and the primary seasoning. Never swap them 1:1 in either direction: dark soy standing in as the salt gives a muddy, bitter, almost black dish, and light soy standing in for color gives you a pale stir-fry that is aggressively over-salted before it ever looks right.' },
    { title: 'To use: measure, do not eyeball', body: 'Shake the jar, then pour ⅔ cup — a third of the batch — per stir-fry. That is roughly 160 g per stir-fry, the right amount for 1 lb of protein plus 4–5 cups of cut vegetables, serving 2–3. Pour it down the side of the hot wok, not onto the food.', checkpoint: 'It should hiss and steam on contact and reduce visibly within 30 seconds. If it just pools and sits, the pan was not hot enough.' },
    { title: 'Thicken at the wok with a fresh slurry', body: 'Whisk 1 tbsp cornstarch into 1 tbsp cold water until smooth and milky. With the sauce bubbling, drizzle in about half the slurry while tossing, wait 15 seconds, then add more only if you want it thicker. Kill the heat as soon as it looks right.', checkpoint: 'The sauce turns glossy and clings to the food instead of running off — it should coat a piece of broccoli and stay there. Cloudy or floury means it has not come to a full boil yet; keep tossing.', why: 'Cornstarch only sets once it boils, and it keeps thickening for several seconds after. Adding it all at once is how you end up with gluey sauce you cannot walk back.' },
  ],
  notes: [
    'Per use: ⅔ cup per stir-fry, which is about 160 g per stir-fry — sized for 1 lb of meat plus 4–5 cups of vegetables. One batch covers three dinners.',
    'Keeps 3–4 weeks in the fridge. Every ingredient in it is already a preserved pantry item, so it is stable — shake before each pour, since the sesame oil separates to the top.',
    'Varying it deliberately: more light soy for a saltier sauce, more dark soy for a darker one (go 1 tbsp at a time — it gets muddy fast), more sugar for a Cantonese-leaning sweetness, skip the oyster sauce and add 15 g more light soy for a vegetarian version, and hold the sesame oil out of the jar to drizzle it on at the end instead if you want the aroma sharper.',
    'Sourcing: for dark soy, Pearl River Bridge Superior Dark Soy or Lee Kum Kee Premium Dark Soy. For Shaoxing wine, buy the plain bottle whose label reads water, rice, wheat, salt — avoid anything sold as salted "cooking wine," which is salted specifically to dodge the liquor tax and will wreck your seasoning. Dry sherry is the standard 1:1 substitute if you are out.',
    'This is the sauce the other stir-fries here are built on — Beef and Broccoli, Kung Pao Chicken, and Steak Lo Mein all use the same lineup in slightly different proportions. Learn this one and those are variations, not separate recipes.',
  ],
});
