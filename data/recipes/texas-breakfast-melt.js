// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'texas-breakfast-melt',
  title: 'Texas Breakfast Melt',
  category: 'Breakfast',
  description: 'Waffle House–style: thick buttered Texas toast griddled golden around a folded egg, crisp bacon, and two slices of melting American cheese. Bake the bacon in the oven, and the stovetop is free for the eggs and the melts.',
  yield: 'Makes 4 sandwiches (serves 2–4)',
  time: '~30 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Fillings' },
    { item: 'Bacon', grams: '~400 g', practical: '12 slices' },
    { item: 'Large eggs', grams: '~200 g', practical: '4 large' },
    { item: 'Fine salt', grams: '1.5 g', practical: '¼ tsp' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { item: 'American cheese', grams: '170 g', practical: '8 slices' },
    { section: 'Bread' },
    { item: 'Texas toast (thick-sliced white bread, plain)', grams: '—', practical: '8 slices' },
    { item: 'Unsalted butter, softened', grams: '57 g', practical: '4 tbsp' },
    { note: 'Use the plain thick-sliced loaf from the bread aisle, not the frozen garlic Texas toast.' },
  ],
  steps: [
    { title: 'Bake the bacon', body: 'Heat the oven to 400°F (204°C). Lay the bacon on a foil-lined sheet pan (a rack on top is a bonus) and bake 15–20 minutes. Drain on paper towels and break each slice in half so it fits the bread.', checkpoint: 'Browned and crisp at the edges but still a little flexible in the middle, so it doesn’t shatter out of the sandwich.', why: 'The oven cooks every slice evenly with no splatter and no babysitting, which leaves the skillet free for the eggs.' },
    { title: 'Butter the bread', body: 'Spread the softened butter edge to edge on one side of each slice of Texas toast.', why: 'Softened butter spreads all the way to the crust without tearing the bread, so the whole face browns evenly.' },
    { title: 'Cook folded eggs', body: 'Beat the eggs with the salt and pepper. Heat a lightly buttered nonstick skillet over medium-low and pour in one egg’s worth. Let it set into a thin round, about 1 minute, then fold the sides in to make a square roughly the size of the bread. Slide it onto a plate and repeat for the rest.', checkpoint: 'Set all the way through with no browning; soft, pale yellow, and pliable.' },
    { title: 'Stack', body: 'Lay half the bread butter-side down. On each one, layer a slice of cheese, a folded egg, three slices’ worth of bacon, and a second slice of cheese. Top with the remaining bread, butter-side up.', why: 'One slice of cheese against each piece of bread glues the whole stack together as it melts, so it doesn’t slide apart when you flip it.' },
    { title: 'Griddle until melty', body: 'Heat a 12-inch skillet or griddle over medium-low. Add two sandwiches and cook 3–4 minutes per side, pressing gently with a spatula once. Cover the pan for the first side so the cheese starts melting before the bread gets too dark. Repeat with the other two, or hold the first batch on a rack in a 200°F oven.', checkpoint: 'Both sides are evenly golden-brown and the cheese is oozing at the edges.' },
    { title: 'Serve', body: 'Cut each melt in half on the diagonal and serve hot. One whole sandwich is a big breakfast for an adult, and a half is right for a kid.' },
  ],
  notes: [
    'Sausage instead of bacon: shape 340 g bulk breakfast sausage into thin patties, one per sandwich, a little wider than the bread (they shrink). Cook them in a skillet over medium, 4–5 minutes per side, until no pink remains.',
    'Fried egg instead of folded: fry each egg over-hard and break the yolk so it doesn’t run out when you cut the sandwich.',
    'Extra-crisp crust: spread mayonnaise on the outside instead of butter. It browns more evenly and is less likely to scorch.',
    'Waffle House builds this with three slices of bacon, one egg, and two slices of American per sandwich, which is the ratio used here.',
  ],
});
