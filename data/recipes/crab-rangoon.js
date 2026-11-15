// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'crab-rangoon',
  title: 'Crab Rangoon',
  category: 'Sides',
  description: 'Takeout crab rangoon from the air fryer: a creamy, faintly sweet cream cheese and crab filling pinched into four-point wonton purses, brushed with oil and air fried until the points shatter.',
  yield: 'Makes 30, serves 4–6',
  time: '~40 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Filling' },
    { item: 'Cream cheese, full-fat block, softened', grams: '227 g', practical: '8 oz' },
    { item: 'Imitation crab, finely chopped and patted dry', grams: '170 g', practical: '6 oz' },
    { item: 'Scallions, thinly sliced', grams: '25 g', practical: '2 scallions' },
    { item: 'Granulated sugar', grams: '4 g', practical: '1 tsp' },
    { item: 'Light soy sauce', grams: '6 g', practical: '1 tsp' },
    { item: 'Worcestershire sauce', grams: '5 g', practical: '1 tsp' },
    { item: 'Toasted sesame oil', grams: '2 g', practical: '½ tsp' },
    { item: 'Garlic powder', grams: '0.8 g', practical: '¼ tsp' },
    { item: 'White pepper', grams: '—', practical: 'pinch' },
    { note: 'Use block cream cheese, not the whipped tub kind — the tub kind is softer and runs out of the wrapper in the heat.' },
    { section: 'Wrapping and cooking' },
    { item: 'Square wonton wrappers', grams: '240 g', practical: '30 wrappers' },
    { item: 'Water, for sealing', grams: '—', practical: 'small bowl' },
    { item: 'Neutral oil (safflower), for brushing', grams: '27 g', practical: '2 tbsp' },
    { section: 'To serve' },
    { item: 'Sweet and sour sauce or duck sauce, store-bought', grams: '—', practical: 'for dipping' },
  ],
  steps: [
    { title: 'Mix the filling', body: 'Beat the cream cheese with a spatula until smooth, then mix in the crab, scallions, sugar, soy sauce, Worcestershire, sesame oil, garlic powder, and white pepper. Refrigerate 10–15 minutes while you set up.', checkpoint: 'Evenly flecked with crab and scallion, and firm enough to hold a peak on a spoon.', why: 'Cold filling is easier to portion and less likely to squeeze out of the seams while you pinch.' },
    { title: 'Set up and preheat', body: 'Preheat the air fryer to 350°F (175°C). Lay out a few wrappers at a time on a dry board with the rest under a damp towel, and set the bowl of water and a sheet pan beside you.' },
    { title: 'Fill and fold', body: 'Put a rounded teaspoon of filling — about 14 g each — in the center of a wrapper. Wet all four edges with a fingertip. Bring two opposite corners up to meet over the filling and pinch, then bring the other two up and pinch all four seams closed from the center out, pressing out the air as you go.', checkpoint: 'A four-pointed star with sealed seams and no gaps; give it a gentle squeeze and no filling shows. Overfilled ones burst — stay at about 14 g each.', why: 'Trapped air expands in the heat and splits the seams. Pinching from the middle outward pushes it out before it can do that.' },
    { title: 'Oil them well', body: 'Arrange the rangoon in the basket in a single layer with a little space between them. Brush or spray them all over with oil — tops, sides, and points.', checkpoint: 'Every bit of wrapper looks lightly sheened. Dry, chalky spots stay pale and leathery.', why: 'The air fryer only crisps what is coated in fat. Oil is what turns a plain baked wrapper into a fried-tasting one.' },
    { title: 'Air fry', body: 'Air fry at 350°F for 7–9 minutes, checking at 5 minutes. Work in batches rather than crowding. Cook a test batch of three or four first, since air fryers vary.', checkpoint: 'Deep golden and blistered at the points and edges, with the bottoms dry and crisp. Pale bottoms need another minute.' },
    { title: 'Rest briefly and serve', body: 'Let them cool on a rack 2–3 minutes before serving with the dipping sauce.', why: 'The filling comes out molten. A couple of minutes lets it set so it does not burn mouths — little ones especially.' },
  ],
  notes: [
    'Why the air fryer: well-oiled, it gives crisp, golden rangoon with very little mess, and that is what most published tests found too. Deep-frying still gives the puffiest, most blistered wrapper. To fry instead, skip the brushing oil, heat 2 inches of oil to 350°F, and fry 5–6 at a time for 2–3 minutes, turning once.',
    'Real crab: swap in 170 g of lump or claw crabmeat, picked over and squeezed dry. It tastes better but is sweeter and more delicate, so taste the filling before you add the sugar.',
    'Freezer batch: freeze shaped, uncooked rangoon on a sheet pan until solid, then bag them for up to 2 months. Air fry from frozen at 350°F for 9–11 minutes; do not thaw first or the wrappers go gummy.',
    'Leftovers re-crisp in the air fryer at 350°F for 3 minutes.',
    'Wrappers: the standard square wonton wrappers from the produce or refrigerated section work fine. Keep them covered as you work — dry edges will not seal.',
  ],
});
