// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'risotto',
  title: 'Classic Risotto',
  category: 'Sides',
  description: 'Creamy Arborio rice built ladle-by-ladle. Better Than Bouillon makes a perfectly calibrated stock without fuss.',
  yield: 'Serves 4',
  time: '~35 min',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Chicken stock (Better Than Bouillon, normal strength)', grams: '~1400 g', practical: '6 cups' },
    { item: 'Olive oil', grams: '28 g', practical: '2 tbsp' },
    { item: 'Yellow onion, finely diced', grams: '~150 g', practical: '1 medium (~1 cup)' },
    { item: 'Arborio rice', grams: '~370 g', practical: '2 cups (dry)' },
    { item: 'Dry white wine (Pinot Grigio, Sauvignon Blanc)', grams: '~240 g', practical: '1 cup' },
    { item: 'Unsalted butter, divided', grams: '~70 g', practical: '5 tbsp' },
    { item: 'Parmesan, freshly grated', grams: '~100 g', practical: '~1 cup' },
    { item: 'Fresh parsley, finely chopped (optional)', grams: '—', practical: '¼ cup' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Warm the stock', body: 'Add chicken stock to a small saucepan; keep at a gentle simmer over low heat throughout. Stock must be hot when added to rice — cold stock stalls the cooking.', checkpoint: 'Hot but not boiling — small wisps of steam.' },
    { title: 'Sauté aromatics', body: 'Heat olive oil in a large skillet or wide saucepan over medium. Add onion; cook stirring often ~5 min until soft and lightly golden.', checkpoint: 'Tender, no raw crunch.' },
    { title: 'Toast the rice', body: 'Add Arborio; stir to coat each grain with oil. Cook 2–3 min, stirring.', checkpoint: 'Edges of grains translucent, centers still white. Rice smells nutty, looks glossy.' },
    { title: 'Deglaze with wine', body: 'Pour in wine; stir until almost fully absorbed.', checkpoint: 'Pan looks nearly dry again; rice releases a faint wine aroma.' },
    { title: 'Build the risotto', body: 'Add 1 ladle (~120g) of hot stock. Stir frequently. Once mostly absorbed, add another ladle. Continue 18–22 min until rice is tender and creamy but still has a slight bite at center.', checkpoint: 'Rice grains spread slowly when spooned — not a soupy puddle, not stiff paste.', why: 'The constant stirring coaxes starch from the surface of the Arborio grains, which creates the silky, emulsified consistency that defines risotto.' },
    { title: 'Finish with butter and cheese', body: 'Remove from heat. Stir in 3 tbsp butter and all the Parmesan until melted and glossy. Taste and adjust salt and pepper (stock may already carry enough salt).', checkpoint: 'Final texture flows slowly off the spoon — creamy, not stiff.' },
    { title: 'Serve', body: 'Spoon into warm bowls. Top with a small pat of remaining butter and parsley.' },
  ],
  notes: [
    'Optional depth: 1 clove minced garlic sautéed with the onion.',
    'Optional brightness: squeeze of lemon juice just before serving.',
    'Optional add-ins: peas, mushrooms, or roasted asparagus folded in with the last ladle of stock.',
    'Risotto doesn\'t hold well — serve immediately.',
  ],
});
