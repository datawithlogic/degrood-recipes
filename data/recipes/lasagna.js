// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'lasagna',
  title: 'Lasagna',
  category: 'Mains',
  subcat: 'Pasta',
  description: 'Classic layered lasagna with a simmered meat sauce, ricotta-egg cheese layer, and plenty of mozzarella.',
  yield: 'One 9×13" pan, serves 8–10',
  time: '~1.5 hr',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Meat sauce' },
    { item: 'Ground beef', grams: '~454 g', practical: '1 lb' },
    { item: 'Italian sausage', grams: '~454 g', practical: '1 lb' },
    { item: 'Onion, finely chopped', grams: '~150 g', practical: '1 medium' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '3' },
    { item: 'Crushed tomatoes (28 oz can)', grams: '~794 g', practical: '1 can' },
    { item: 'Tomato sauce (15 oz can)', grams: '~425 g', practical: '1 can' },
    { item: 'Tomato paste (6 oz can)', grams: '~170 g', practical: '1 can' },
    { item: 'Dried basil', grams: '—', practical: '2 tsp' },
    { item: 'Dried oregano', grams: '—', practical: '1 tsp' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
    { section: 'Cheese layer' },
    { item: 'Whole-milk ricotta', grams: '~425 g', practical: '15 oz' },
    { item: 'Egg', grams: '—', practical: '1 large' },
    { item: 'Parmesan, grated', grams: '~50 g', practical: '½ cup' },
    { item: 'Fresh parsley, chopped', grams: '—', practical: '2 tbsp' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
    { section: 'Assembly' },
    { item: 'Lasagna noodles, cooked al dente', grams: '—', practical: '12 noodles' },
    { item: 'Mozzarella, shredded', grams: '~450 g', practical: '4 cups' },
  ],
  steps: [
    { title: 'Make the meat sauce', body: 'Brown ground beef and sausage over medium heat. Drain fat. Add onion and garlic, cook until softened. Add crushed tomatoes, tomato sauce, and paste; stir well. Add basil, oregano, salt, and pepper. Simmer 30 min.', checkpoint: 'Sauce is thick and deeply red, no longer watery.' },
    { title: 'Make the cheese mixture', body: 'Mix ricotta, egg, Parmesan, parsley, salt, and pepper in a bowl until smooth.' },
    { title: 'Assemble', body: 'Preheat oven to 375°F (190°C). Thin layer of meat sauce in bottom of 9×13" dish. Repeat 3 times: noodles → ⅓ ricotta mixture → mozzarella → meat sauce. End with meat sauce and a final blanket of mozzarella. Cover with foil.' },
    { title: 'Bake', body: 'Bake covered 25 min. Remove foil, bake 25 min more until bubbly and golden.', checkpoint: 'Cheese is browned and bubbling at the edges; center looks set.' },
    { title: 'Rest', body: 'Let sit 10 min before slicing — this is the difference between neat squares and a collapsing mess.' },
  ],
  notes: [
    'Make-ahead: assemble a day ahead, refrigerate covered. Add 10–15 min to bake time from cold.',
    'Leftovers reheat extremely well — slice and microwave covered, or oven at 350°F covered with foil.',
  ],
});
