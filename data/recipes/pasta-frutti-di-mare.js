// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pasta-frutti-di-mare',
  title: 'Pasta Frutti di Mare Bianco',
  category: 'Mains',
  subcat: 'Seafood',
  description: 'White wine seafood pasta — clean, briny, no cream. The shellfish cooking liquid becomes the sauce.',
  yield: 'Serves 6',
  time: '35 min (+30–60 min clam purge)',
  skill: 'Intermediate',
  ingredients: [
    { item: 'Linguine', grams: '600 g', practical: '~1⅓ lb' },
    { item: 'Clams (littleneck or manila)', grams: '750 g', practical: '~1¾ lb' },
    { item: 'Mussels', grams: '750 g', practical: '~1¾ lb' },
    { item: 'Shrimp, peeled and deveined', grams: '400 g', practical: '~14 oz' },
    { item: 'Squid, cleaned, sliced into rings (optional)', grams: '250 g', practical: '~9 oz' },
    { item: 'Dry white wine', grams: '300 g', practical: '1¼ cups' },
    { item: 'Extra virgin olive oil', grams: '80 g', practical: '6 tbsp' },
    { item: 'Garlic cloves, thinly sliced', grams: '30 g', practical: '7–8 large cloves' },
    { item: 'Crushed red pepper flakes', grams: '2 g', practical: '½ tsp' },
    { item: 'Fresh parsley, roughly chopped', grams: '25 g', practical: '½ cup packed' },
    { item: 'Lemon, zested and juiced', grams: '—', practical: '1 large' },
    { item: 'Kosher salt', grams: '—', practical: 'to taste' },
    { note: 'Simplified version (shrimp + scallops): drop the clams and mussels entirely. Add 400 g dry scallops. Ask the fishmonger if scallops are dry (untreated) — wet scallops release too much water.' },
  ],
  steps: [
    { title: 'Prep (do ahead)', body: 'Purge clams: soak in cold salted water (30 g salt per 1 L water) for 30–60 min. Drain and scrub shells. Clean mussels: scrub shells, pull off beards. Discard any that don\'t close when tapped.' },
    { title: 'Start pasta water', body: 'Bring a large pot of heavily salted water to a boil. Cook linguine 2 minutes under package al dente time — it finishes in the sauce. Reserve 500 g (2 cups) pasta water before draining.' },
    { title: 'Build the base', body: 'Warm olive oil in a large wide skillet over medium heat. Add sliced garlic and red pepper flakes. Cook 2–3 minutes until garlic is fragrant and lightly golden.', checkpoint: 'Kitchen smells deeply of garlic; oil has a faint golden color.' },
    { title: 'Steam the shellfish', body: 'Add clams and mussels. Pour in white wine. Cover and cook over medium-high 4–6 minutes, shaking the pan, until shells open. Discard any that stay closed. Remove shellfish to a bowl, leaving liquid in the pan.' },
    { title: 'Cook the shrimp', body: 'Add shrimp (and squid if using) to the same pan. Cook 2–3 minutes just until shrimp are pink and curled. Remove to the shellfish bowl.' },
    { title: 'Finish the sauce', body: 'Add drained pasta directly to the pan. Add a ladleful of pasta water. Toss over medium heat 2 minutes, adding more pasta water as needed until sauce is silky and clings to the pasta.', checkpoint: 'Sauce looks emulsified and coats the pasta — not watery, not dry.' },
    { title: 'Combine and serve', body: 'Return all seafood to the pan. Add lemon zest, lemon juice, and most of the parsley. Toss gently 30–60 seconds to warm through. Taste and adjust salt. Serve in wide bowls, topped with remaining parsley.' },
  ],
  notes: [
    'White wine: dry and unoaked — Pinot Grigio, Sauvignon Blanc, Vermentino. No "cooking wine."',
    'Don\'t overcook the seafood. They cook again briefly at the end — err on the side of underdone when first cooking.',
    'Pasta water is key — the starch emulsifies the oil and wine into a cohesive sauce.',
    'No cream. This is a bianco (white wine) preparation — cream would overpower the briny seafood.',
    'Best eaten immediately. Does not reheat well.',
  ],
});
