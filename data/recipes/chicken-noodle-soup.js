// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'chicken-noodle-soup',
  title: 'Chicken Noodle Soup',
  category: 'Soups',
  description: 'The weeknight classic. Chicken thighs poach right in boxed stock with onion, carrot, and celery, then get shredded back in. Wide egg noodles cook in their own pot so leftovers never turn to mush. Parsley and a squeeze of lemon brighten it at the end.',
  yield: 'Serves 6',
  time: '~45 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Soup' },
    { item: 'Unsalted butter', grams: '28 g', practical: '2 tbsp' },
    { item: 'Yellow onion, diced', grams: '160 g', practical: '1 cup' },
    { item: 'Carrots, peeled and sliced ¼ inch thick', grams: '150 g', practical: '2 large' },
    { item: 'Celery ribs, sliced ¼ inch thick', grams: '100 g', practical: '2' },
    { item: 'Garlic, minced', grams: '9 g', practical: '3 cloves' },
    { item: 'Dried thyme (or 3 fresh sprigs)', grams: '0.5 g', practical: '½ tsp' },
    { item: 'Bay leaves', grams: '—', practical: '2' },
    { item: 'Low-sodium chicken stock', grams: '1900 g', practical: '8 cups' },
    { item: 'Boneless, skinless chicken thighs', grams: '680 g', practical: '1½ lb' },
    { item: 'Fine salt', grams: '—', practical: 'to taste' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { section: 'Noodles' },
    { item: 'Wide egg noodles', grams: '170 g', practical: '6 oz' },
    { item: 'Unsalted butter or olive oil, for tossing', grams: '7 g', practical: '½ tbsp' },
    { section: 'To finish' },
    { item: 'Fresh parsley, chopped', grams: '15 g', practical: '¼ cup' },
    { item: 'Lemon juice, plus more to taste', grams: '15 g', practical: '1 tbsp' },
  ],
  steps: [
    { title: 'Soften the vegetables', body: 'Melt the 28 g butter in a Dutch oven or large pot over medium heat. Add the onion, carrots, and celery with a pinch of salt and cook, stirring now and then, until the onion is soft and translucent, 6–8 minutes. Add the garlic and thyme and stir 30 seconds.', checkpoint: 'Onion is translucent and the garlic smells sweet, not browned.' },
    { title: 'Poach the chicken in the stock', body: 'Pour in the stock, add the bay leaves, and bring to a boil. Lower the heat, slide in the whole thighs, and hold the pot at a gentle simmer, partly covered, for 20–25 minutes.', checkpoint: 'Bubbles just break the surface. The thighs read at least 175°F and pull apart easily with a fork.', why: 'A hard boil tightens the meat and clouds the broth. A gentle simmer keeps the thighs tender while they flavor the stock.' },
    { title: 'Boil the noodles separately', body: 'Meanwhile, bring a pot of well-salted water to a boil and cook the egg noodles until just tender, usually 6–8 minutes (check the package). Drain and toss with the 7 g butter or oil so they don’t stick together.', why: 'Noodles keep soaking up broth as they sit. Cooked in the soup, they bloat overnight and drink up most of the broth. Kept separate, they stay springy and the soup stays soup.' },
    { title: 'Shred and return', body: 'Lift the thighs onto a cutting board and shred them into bite-size pieces with two forks. Fish out the bay leaves, then stir the chicken back into the pot.' },
    { title: 'Season and brighten', body: 'Off the heat, stir in the parsley, the 15 g lemon juice, and the pepper. Taste and add salt a pinch at a time. Boxed stocks vary a lot, so this is the step where it comes together. Add more lemon if it tastes flat.', checkpoint: 'The broth tastes savory and round with just a hint of brightness. If it needs lemon to taste lively, it probably needs salt too.' },
    { title: 'Serve', body: 'Put a handful of noodles in each bowl and ladle the hot soup over them.' },
  ],
  notes: [
    'Storage: keep soup and noodles in separate containers. The soup keeps 4 days in the fridge or 3 months frozen (freeze it without noodles). Reheat the soup, then add the noodles to warm through.',
    'Bone-in thighs: use 907 g bone-in and skinless, and simmer 30–35 minutes. The bones add body to boxed stock. Pull the meat off and discard the bones before shredding.',
    'Rotisserie shortcut: skip poaching and stir in about 420 g of shredded rotisserie chicken once the vegetables are tender. Simmer the vegetables in the stock for 10 minutes first.',
    'Sick-day version: make the vegetable pieces smaller and cook the noodles a minute longer for little ones.',
  ],
});
