// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'alfredo-sauce',
  title: 'Alfredo Sauce',
  category: 'Sauces',
  description: 'Rich, silky cream-based Alfredo. The entire recipe is about temperature control — cheese goes in off the heat, or it seizes.',
  yield: 'Sauces ~450g (1 lb) dry fettuccine — serves 4–6',
  time: '15 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Unsalted butter', grams: '113 g', practical: '½ cup (1 stick)' },
    { item: 'Heavy whipping cream', grams: '355 g', practical: '1½ cups' },
    { item: 'Garlic, minced', grams: '10 g', practical: '~2 cloves (2 tsp)' },
    { item: 'Italian seasoning (optional)', grams: '—', practical: '½ tsp' },
    { item: 'Black pepper', grams: '—', practical: '¼ tsp' },
    { item: 'Parmesan, freshly grated from a wedge', grams: '130 g', practical: '~1⅓ cups medium-grated' },
    { item: 'Reserved pasta water', grams: '30–60 g', practical: '2–4 tbsp' },
    { item: 'Salt', grams: '—', practical: 'to taste at the very end' },
    { note: 'Weigh the Parmesan — 130g regardless of grate size. Volume is unreliable: "2 cups" can be 100g microplaned or 180g box-grated. Pre-grated with anti-caking starch won\'t melt smoothly. Jarred minced garlic works fine; use 12g (heaped 2 tsp).' },
  ],
  steps: [
    { title: 'Simmer the base', body: 'Add butter and cream to a large skillet over medium-low. Once butter melts, bring to a gentle simmer 2–3 min, whisking occasionally.', checkpoint: 'Small bubbles at the edges, light steam — not a rolling boil. Boiling cream hard can break the sauce.' },
    { title: 'Bloom the aromatics', body: 'Whisk in garlic, Italian seasoning, and pepper. Simmer 1 min.', why: 'A brief simmer softens the garlic\'s raw edge and infuses the fat with seasoning. Fat carries these flavors far better than the finished sauce would.' },
    { title: 'Add cheese — off the heat', body: 'Remove pan from heat (or drop to the lowest setting). Add Parmesan in 3–4 handfuls, whisking each fully in before adding the next.', checkpoint: 'Smooth and glossy, coats the back of a spoon — no visible grain or clumps.', why: 'Parmesan proteins seize and clump above ~65–70°C. Residual heat is plenty to melt it. Dumping cheese into simmering cream is how Alfredo turns grainy.' },
    { title: 'Toss with pasta and season', body: 'Add drained pasta directly to the skillet with 30–60g reserved pasta water. Toss over low heat until sauce clings. Taste and salt now — the Parmesan brings significant salt.', why: 'Pasta water starch stabilizes the emulsion and helps the sauce grip the noodles instead of pooling.' },
    { title: 'Serve immediately', body: 'Alfredo thickens and can break as it cools. Warm bowls help considerably.' },
  ],
  notes: [
    'Grainy sauce: off-heat next time; whisk in a splash of hot pasta water and stir vigorously to partially rescue.',
    'Too thick: loosen with pasta water or a splash of cream.',
    'Broken/oily: kept over heat after cheese. Whisk in cold cream a tablespoon at a time.',
    'Scales linearly: for ½ lb pasta, use 57g butter / 178g cream / 65g Parmesan.',
    'Does not freeze well — cream sauces break on thawing.',
  ],
});
