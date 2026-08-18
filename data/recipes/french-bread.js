// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'french-bread',
  title: 'French Bread (Baguettes)',
  category: 'Bread',
  subcat: 'Loafs',
  description: 'Crusty baguette-style bread. Dough cycle in the bread maker, hand-shaped, scored and baked with steam for a crackly crust.',
  yield: '2 baguettes',
  time: '~3 hr',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Warm water (110°F / 43°C)', grams: '315 g', practical: '1⅓ cups' },
    { item: 'Granulated sugar', grams: '30 g', practical: '2½ tbsp' },
    { item: 'Active dry yeast', grams: '6 g', practical: '2 tsp' },
    { item: 'Bread flour (King Arthur recommended)', grams: '485 g', practical: '~4 cups' },
    { item: 'Fine salt', grams: '12 g', practical: '2 tsp' },
    { item: 'Unsalted butter, melted', grams: '28 g', practical: '2 tbsp' },
  ],
  steps: [
    { title: 'Bread maker dough cycle', body: 'Add ingredients in the order your machine requires (usually: liquids first, then flour, yeast on top away from salt). Run the dough cycle only — do not bake in the machine.', checkpoint: 'Check 5–10 min into kneading: dough should form a smooth elastic ball. Press against paddle with a spatula if needed for even knead. Windowpane test: stretch a small piece thin — nearly translucent without tearing.' },
    { title: 'Rest and shape', body: 'Turn dough onto a lightly floured surface. Divide into 2 equal pieces. Cover with a cloth and rest 15 minutes to relax the gluten.' },
    { title: 'Shape baguettes', body: 'Flatten each piece gently, fold lengthwise, roll into a tight cylinder 12–14" long. Place seam-down on parchment.' },
    { title: 'Second rise', body: 'Cover and rise until doubled, 30–45 minutes. Oven warm function works well — if too hot, turn off once warm and keep door closed. Place lightly oiled plastic wrap between cloth and dough to prevent sticking.', checkpoint: 'Loaves look clearly puffed and feel airy, spring back slowly when poked.' },
    { title: 'Prep for baking', body: 'Preheat oven to 425°F (218°C). Place a shallow pan of water on the bottom rack for steam. Optional: brush tops with egg wash for sheen. Score with diagonal cuts ½" deep.' },
    { title: 'Bake', body: 'Convection bake 10 minutes at 425°F, then reduce to 375°F for 15–20 minutes. Do not open the door during baking.', checkpoint: 'Deep golden color; hollow sound when tapped on the bottom.' },
    { title: 'Cool', body: 'Transfer to a wire rack and cool completely before slicing — at least 30 minutes.' },
  ],
  notes: [
    'King Arthur bread flour is specifically noted — other flours may vary in absorption.',
  ],
});
