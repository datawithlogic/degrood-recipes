// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'french-toast',
  title: 'French Toast (Custard Method)',
  category: 'Breakfast',
  description: 'Thick bread soaked in a rich egg custard. Sugar and melted butter are non-negotiable — both affect browning and flavor significantly.',
  yield: '4–6 slices, serves 2',
  time: '30 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Thick-sliced bread (brioche, challah, or Texas toast)', grams: '~240 g', practical: '4–6 slices (~25 mm thick)' },
    { item: 'Eggs', grams: '~150 g', practical: '3 large' },
    { item: 'Whole milk', grams: '120 g', practical: '½ cup' },
    { item: 'Granulated sugar', grams: '25 g', practical: '2 tbsp' },
    { item: 'Unsalted butter, melted and slightly cooled', grams: '28 g', practical: '2 tbsp' },
    { item: 'Vanilla extract', grams: '5 g', practical: '1 tsp' },
    { item: 'Ground cinnamon', grams: '2 g', practical: '½ tsp' },
    { item: 'Fine salt', grams: '1 g', practical: 'small pinch' },
    { note: 'Richer custard: replace up to 60 g of the milk with heavy cream.' },
  ],
  steps: [
    { title: 'Make the custard', body: 'Whisk eggs until yolks and whites are fully combined. Add milk, melted butter, sugar, vanilla, cinnamon, and salt. Whisk until smooth.', checkpoint: 'No visible butter droplets; sugar dissolved; mixture is glossy.', why: 'Hot butter can scramble the eggs — let it cool to warm first.' },
    { title: 'Soak the bread', body: 'Add bread to the custard. Soak 3–5 minutes per side, pressing gently.', checkpoint: 'Slices feel noticeably heavier; center no longer looks dry when pressed, but bread still holds its shape.' },
    { title: 'Preheat the pan', body: 'Heat cast iron skillet over medium 2–3 minutes. Add a small pat of butter and let it foam and subside.', checkpoint: 'A drop of custard dripped in should sizzle immediately.' },
    { title: 'Cook', body: 'Lift slices, let excess custard drip off. Cook 3–4 minutes per side until deep golden brown. Reduce heat if browning too fast — the inside needs time to set.', checkpoint: 'Edges look set and matte before flipping; underside is caramel-brown.' },
  ],
  notes: [
    'Overnight soak: arrange soaked slices in a baking dish, cover, refrigerate overnight. Cook from fridge with 1 extra minute per side.',
    'Hold finished slices on a wire rack in a 200°F oven while finishing the batch.',
  ],
});
