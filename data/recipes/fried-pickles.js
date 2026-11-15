// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'fried-pickles',
  title: 'Air Fryer Fried Pickles',
  category: 'Sides',
  description: 'Dill pickle chips in a crunchy panko coat, made in the air fryer with no pot of oil. Served hot with bottled ranch.',
  yield: 'Serves 4 as a side',
  time: '~30 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Dill pickle chips, drained', grams: '240 g', practical: '~32 chips' },
    { section: 'Breading' },
    { item: 'All-purpose flour', grams: '38 g', practical: '5 tbsp' },
    { item: 'Garlic powder', grams: '1.6 g', practical: '½ tsp' },
    { item: 'Paprika', grams: '1 g', practical: '½ tsp' },
    { item: 'Whole eggs', grams: '—', practical: '2 large' },
    { item: 'Dill pickle juice, from the jar', grams: '15 g', practical: '1 tbsp' },
    { item: 'Japanese panko', grams: '90 g', practical: '1½ cups' },
    { item: 'High-oleic safflower oil', grams: '13 g', practical: '1 tbsp' },
    { item: 'Dried dill (optional)', grams: '0.5 g', practical: '½ tsp' },
    { item: 'Cooking spray', grams: '—', practical: 'as needed' },
    { note: 'No salt in the breading — the pickles bring plenty. Cayenne is left out for the kid; add a pinch to the flour for the grown-up batch.' },
    { section: 'Serving' },
    { item: 'Bottled ranch dressing', grams: '120 g', practical: '½ cup' },
  ],
  steps: [
    { title: 'Dry the pickles', body: 'Spread the chips on a double layer of paper towels, cover with more towels, and press. Leave them 10–15 minutes, then press again.', checkpoint: 'The surface looks matte, not shiny-wet.', why: 'Brine left on the surface steams the coating loose from the pickle. This is the step that decides whether the breading stays on.' },
    { title: 'Set up the breading', body: 'Mix the flour, garlic powder, and paprika in one shallow dish. Beat the eggs with the 15 g of pickle juice in a second. In a third, toss the panko with the 13 g of oil and the dill until the crumbs look evenly damp.', why: 'Raw panko stays white and chalky in an air fryer. Rubbing the oil into the crumbs first browns them evenly, which spray alone does not quite do.' },
    { title: 'Bread', body: 'Working a few at a time, toss the chips in the flour and shake off the excess, dip in egg and let it drip, then press firmly into the panko on both sides. Lay them on a sheet pan.', checkpoint: 'Each chip is fully covered with no pickle showing through.' },
    { title: 'Air fry', body: 'Preheat the air fryer to 400°F. Spray the basket, lay in a single layer of chips with space between them, and spray the tops. Cook 4–5 minutes, flip each one with tongs, spray again, and cook 3–5 minutes more. Repeat with the rest.', checkpoint: 'Deep golden and crisp on both sides.', why: 'Flip with tongs rather than shaking — loose panko flies off if you shake the basket.' },
    { title: 'Serve hot', body: 'Serve right away with the ranch for dipping. They lose their crunch within about 15 minutes.' },
  ],
  notes: [
    'Thicker crinkle-cut chips hold up best. Thin sandwich slices dry out and go leathery.',
    'Spears instead of chips: same breading, 12–15 minutes total, flipping halfway.',
    'Reheat at 400°F for 3–4 minutes.',
  ],
});
