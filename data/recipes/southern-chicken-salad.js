// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'southern-chicken-salad',
  title: 'Southern Chicken Salad',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Creamy, simple, deli-counter chicken salad like the Fox Bros sandwich. Gently poached chicken stays juicy, then gets folded with mayo, crunchy celery, a little mustard, and lemon. Pile it on soft bread or a croissant, or spoon it over greens.',
  yield: 'Serves 6',
  time: '~45 min (+30 min chill)',
  skill: 'Easy',
  ingredients: [
    { section: 'Poached chicken' },
    { item: 'Boneless, skinless chicken breasts', grams: '907 g', practical: '2 lb' },
    { item: 'Cold water', grams: '1420 g', practical: '6 cups' },
    { item: 'Table salt', grams: '36 g', practical: '2 tbsp' },
    { note: 'This is table salt. With Diamond Crystal kosher salt, use about 4 tbsp. The grams are what matter, and most of it stays in the water.' },
    { section: 'Dressing' },
    { item: 'Mayonnaise', grams: '165 g', practical: '¾ cup' },
    { item: 'Lemon juice', grams: '30 g', practical: '2 tbsp' },
    { item: 'Dijon mustard', grams: '10 g', practical: '2 tsp' },
    { item: 'Celery ribs, finely diced', grams: '100 g', practical: '2' },
    { item: 'Fine salt', grams: '1.5 g', practical: '¼ tsp' },
    { item: 'Black pepper', grams: '1.2 g', practical: '½ tsp' },
    { section: 'For serving' },
    { item: 'Croissants or soft sandwich bread, lettuce, or mixed greens', grams: '—', practical: 'to serve' },
  ],
  steps: [
    { title: 'Start the chicken in cold salted water', body: 'Stir the 36 g salt into the 1420 g cold water in a Dutch oven or large pot until dissolved. Add the chicken breasts in a single layer, fully submerged. Set the pot over medium heat with a thermometer in the water.', why: 'Starting cold and heating slowly lets the outside and the center cook at nearly the same rate, so the edges don’t go stringy before the middle is done. The salted water seasons the meat all the way through.' },
    { title: 'Heat to 170°F, then let it coast', body: 'When the water reaches 170°F (small bubbles on the bottom, steaming but not simmering), turn off the heat, cover, and let the chicken sit in the hot water 15–20 minutes.', checkpoint: 'The thickest breast reads 160–165°F. If not, cover and check again in 3–4 minutes.' },
    { title: 'Cool', body: 'Move the chicken to a paper-towel-lined plate and pat dry. Refrigerate it uncovered until cool to the touch, about 20 minutes.', why: 'Mayo mixed into warm chicken turns oily and thin. Cool chicken keeps the dressing creamy.' },
    { title: 'Mix the dressing', body: 'While the chicken cools, whisk the mayonnaise, lemon juice, mustard, salt, and pepper in a large bowl. Stir in the celery.' },
    { title: 'Chop and fold', body: 'Cut the chicken into ½-inch pieces, or pull it into shreds if you like a looser salad. Fold it into the dressing until every piece is coated.', checkpoint: 'Creamy and cohesive, holds together on a spoon, but not swimming. Fold in another spoonful of mayo if it looks dry.' },
    { title: 'Chill and season', body: 'Cover and refrigerate at least 30 minutes so the flavors meld. Taste again cold and adjust the salt, pepper, and lemon; cold food needs a little more seasoning.' },
    { title: 'Serve', body: 'Pile it onto soft bread or split croissants with lettuce, or scoop it over greens.' },
  ],
  notes: [
    'Rotisserie shortcut: skip poaching and use about 680 g of chopped meat from a store rotisserie chicken (skin removed), white and dark mixed. Cut the added salt to a pinch because rotisserie chicken is already well seasoned.',
    'Optional add-ins: 150 g red grapes, halved, and 57 g toasted chopped pecans (toast in a dry skillet over medium, 4–5 minutes). Fold them in just before serving so the pecans stay crunchy.',
    'Boneless thighs work too and stay even juicier. Poach them the same way and pull them at 175°F.',
    'Keeps 3–4 days in the fridge. Don’t freeze it; the mayo separates.',
    'Method adapted from the America’s Test Kitchen poaching technique (cold salted water heated to 170°F, then off the heat).',
  ],
});
