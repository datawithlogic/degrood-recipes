// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pretzel-bites',
  title: 'Sourdough Pretzel Bites',
  category: 'Bread',
  subcat: 'Sourdough',
  description: 'Chewy, golden pretzel bites made with active sourdough starter. The baking soda boil is what gives them the pretzel snap.',
  yield: '~6 dozen bites',
  time: '~6 hr (includes 3–4 hr rise)',
  skill: 'Easy',
  ingredients: [
    { item: 'Active sourdough starter (fed and peaked)', grams: '100 g', practical: '~⅓ cup' },
    { item: 'Warm water (~90–95°F)', grams: '250 g', practical: '1 cup' },
    { item: 'Granulated sugar', grams: '25 g', practical: '2 tbsp' },
    { item: 'Fine salt', grams: '8 g', practical: '1½ tsp' },
    { item: 'Bread flour', grams: '450 g', practical: '~3¾ cups' },
    { item: 'Unsalted butter, melted', grams: '30 g', practical: '2 tbsp' },
    { section: 'Boil + topping' },
    { item: 'Water', grams: '1500 g', practical: '6 cups' },
    { item: 'Baking soda', grams: '30 g', practical: '2 tbsp' },
    { item: 'Coarse salt', grams: '—', practical: 'for sprinkling' },
    { note: 'No starter? Use 2 tsp instant yeast instead. Increase flour to 500g, skip bulk rise → shape after 10 min rest, proof 1–1.5 hr.' },
  ],
  steps: [
    { title: 'Mix the dough', body: 'In stand mixer bowl, combine starter, warm water, sugar, and melted butter. Mix briefly. Add flour and salt; speed 2 until shaggy, then knead 5–7 min until smooth and elastic.', checkpoint: 'Dough pulls away from bowl sides but is still slightly tacky.' },
    { title: 'Bulk ferment', body: 'Transfer to lightly oiled Cambro. Rise at room temp 3–4 hr until doubled.' },
    { title: 'Shape into bites', body: 'Turn onto floured surface. Divide into 6 equal pieces. Roll each into a rope ~¾" thick. Cut into 1–1.5" pieces.', checkpoint: 'Pieces look like small marshmallows, even in size.' },
    { title: 'Second rise', body: 'Place on parchment-lined sheet pans, spaced apart. Cover loosely and rest 30–40 min until slightly puffy.' },
    { title: 'Boil', body: 'Preheat oven to 425°F. Bring 1.5L water to a gentle boil; carefully add baking soda. Boil bites in batches of 10–12 for 30 seconds each. Remove with slotted spoon, return to sheet pan.', checkpoint: 'Bites puff and become slightly tacky on the surface.', why: 'The baking soda boil raises the pH of the skin, which drives the Maillard browning and gives pretzel bites their distinctive deep color and snap.' },
    { title: 'Top and bake', body: 'Sprinkle coarse salt over bites while still damp from boiling. Bake 12–15 min until deep golden brown.', checkpoint: 'Tops are glossy and browned; bottoms lightly firm.' },
  ],
  notes: [
    'Best warm. Serve with cheese dip, Dijon, or spicy mustard.',
    'Sweet variation: skip salt; coat warm bites in melted butter + cinnamon sugar.',
  ],
});
