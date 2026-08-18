// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pot-roast',
  title: 'Classic Pot Roast',
  category: 'Mains',
  subcat: 'Beef',
  description: 'Chuck roast braised low and slow with red wine, beef broth, and root vegetables. The braising liquid becomes a rich natural jus.',
  yield: 'Serves 6–8',
  time: '~3.5 hr',
  skill: 'Easy',
  ingredients: [
    { item: 'Beef chuck roast', grams: '1.4–1.8 kg', practical: '3–4 lb' },
    { item: 'Salt and pepper', grams: '—', practical: 'generously' },
    { item: 'Olive oil', grams: '28 g', practical: '2 tbsp' },
    { item: 'Yellow onion, sliced', grams: '~200 g', practical: '1 large' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '3' },
    { item: 'Red wine (for deglazing)', grams: '~240 g', practical: '1 cup' },
    { item: 'High-quality beef broth', grams: '~950 g', practical: '4 cups' },
    { item: 'Worcestershire sauce', grams: '15 g', practical: '1 tbsp' },
    { item: 'Carrots, chunked', grams: '~300 g', practical: '4 medium' },
    { item: 'Parsnips, peeled and chunked', grams: '~300 g', practical: '4 medium' },
    { item: 'Potatoes, chunked', grams: '~600 g', practical: '4 medium' },
    { item: 'Bouquet garni', grams: '—', practical: 'rosemary + thyme + bay leaf + parsley, tied together' },
  ],
  steps: [
    { title: 'Prep', body: 'Preheat oven to 350°F (175°C). Pat roast thoroughly dry — surface moisture prevents browning. Season generously with salt and pepper.' },
    { title: 'Sear', body: 'Heat olive oil in a Dutch oven over medium-high until shimmering. Sear roast on all sides until deeply browned, 3–4 min per side. Remove to a plate.', checkpoint: 'Each side is a deep, dark brown — not grey. This is where most of the flavor comes from.', why: 'Maillard browning on the exterior of the roast creates hundreds of flavor compounds that make the finished braise taste complex rather than just beefy.' },
    { title: 'Aromatics', body: 'Add onion and garlic to the pot; sauté 3–4 min until translucent and lightly golden.' },
    { title: 'Deglaze', body: 'Pour in red wine, scraping up every browned bit from the bottom of the pot with a wooden spoon.', why: 'Those browned bits (fond) are concentrated flavor — none should be left behind.' },
    { title: 'Braise', body: 'Return roast to pot. Add broth and Worcestershire until liquid comes halfway up the meat. Add bouquet garni. Cover and transfer to oven. Cook 2.5–3 hr until very tender.', checkpoint: 'A fork or tongs should be able to pull the meat apart easily.' },
    { title: 'Add vegetables', body: 'About 1 hr before the roast is done, nestle carrots, parsnips, and potatoes around the meat in the braising liquid.', checkpoint: 'Vegetables fork-tender but still holding their shape.' },
    { title: 'Rest and serve', body: 'Remove from oven. Discard bouquet garni. Rest 10 min before serving. Sprinkle with fresh parsley or a squeeze of lemon. Optional: strain braising liquid and reduce on stovetop 10 min for a more concentrated gravy.' },
  ],
  notes: [
    'Optional overnight marinade: soak beef in red wine, garlic, and herbs before searing.',
    'Leftover braise liquid makes excellent soup or gravy base.',
  ],
});
