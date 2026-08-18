// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'chicken-enchiladas',
  title: 'Chicken Enchiladas',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Chicken simmered in a homemade red sauce, shredded, rolled in flour tortillas, and baked. The sauce doubles as a simmer liquid and topping.',
  yield: '8–10 enchiladas, serves 4–6',
  time: '~1 hr',
  skill: 'Easy',
  ingredients: [
    { section: 'Chicken & sauce' },
    { item: 'Boneless skinless chicken (breasts or thighs)', grams: '~910 g', practical: '2 lb' },
    { item: 'Yellow onion, diced', grams: '~150 g', practical: '1 medium' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '4' },
    { item: 'Chili powder', grams: '~24 g', practical: '3 tbsp — see notes' },
    { item: 'Ground cumin', grams: '~7 g', practical: '1 tbsp' },
    { item: 'Smoked paprika (optional)', grams: '—', practical: '2 tsp' },
    { item: 'Dried oregano', grams: '—', practical: '1 tsp' },
    { item: 'Cayenne (optional)', grams: '—', practical: '¼ tsp' },
    { item: 'Kosher salt', grams: '—', practical: '1 tsp' },
    { item: 'Tomato paste', grams: '~50 g', practical: '3 tbsp' },
    { item: 'Chicken broth', grams: '~700 g', practical: '3 cups' },
    { item: 'Neutral oil', grams: '14 g', practical: '1 tbsp' },
    { section: 'Assembly' },
    { item: 'Flour tortillas, 8"', grams: '—', practical: '8–10' },
    { item: 'Shredded cheese (cheddar, Monterey Jack, or Mexican blend)', grams: '~225 g', practical: '2 cups' },
    { item: 'Cilantro, sliced avocado (optional garnish)', grams: '—', practical: '—' },
  ],
  steps: [
    { title: 'Sear the chicken', body: 'Heat oil in a large pot over medium-high. Season chicken with salt and pepper; sear 2–3 min per side until lightly golden. Doesn\'t need to cook through. Transfer to a plate.', why: 'Searing first adds depth to the sauce — don\'t skip this step.' },
    { title: 'Build the sauce', body: 'Reduce to medium. Add onion, cook 3–4 min until soft. Add garlic, chili powder, cumin, paprika, oregano, cayenne; stir 30 sec until fragrant. Add tomato paste, cook 1 min. Add broth, scraping up browned bits.' },
    { title: 'Simmer the chicken', body: 'Return chicken (and any resting juices) to pot. Gentle simmer covered on low 15–20 min until fully cooked through (165°F).', checkpoint: 'Chicken shreds easily with two forks.' },
    { title: 'Shred and blend sauce', body: 'Remove chicken, shred with two forks. Immersion-blend the sauce until smooth (or transfer to blender in batches). Taste and adjust salt — add a pinch of sugar if too acidic. Stir ½–1 cup sauce into the shredded chicken. Reserve ½ cup sauce for topping.' },
    { title: 'Prep oven and tortillas', body: 'Preheat oven to 375°F (190°C). If tortillas feel stiff, wrap in foil and warm 5 min.', checkpoint: 'Tortillas soft and pliable — stiff ones will split when rolled.' },
    { title: 'Fill, roll, and top', body: 'Spread thin layer of sauce in bottom of 9×13" dish. For each tortilla: ~⅓ cup chicken + ~2 tbsp cheese, roll tightly, place seam-down. Pour remaining sauce over top, cover tortillas. Sprinkle remaining cheese.' },
    { title: 'Bake', body: 'Bake uncovered 15–20 min until cheese is melted and tortilla edges just begin to crisp.', checkpoint: 'Cheese fully melted with slight bubbling around edges.' },
  ],
  notes: [
    'If your chili powder blend contains cayenne, start with 2 tbsp and adjust after tasting the sauce.',
    'Serve with Mexican rice and beans.',
  ],
});
