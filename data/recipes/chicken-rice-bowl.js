// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'chicken-rice-bowl',
  title: 'Soy–Honey–Ginger Chicken Rice Bowl',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Chicken thighs marinated and glazed in a savory-sweet soy-honey sauce. Kid-safe, weeknight-fast.',
  yield: 'Serves 4',
  time: '25 min (+15 min marinate)',
  skill: 'Easy',
  ingredients: [
    { item: 'Boneless skinless chicken thighs', grams: '800 g', practical: '~1¾ lb' },
    { item: 'Soy sauce', grams: '54 g', practical: '3 tbsp' },
    { item: 'Honey', grams: '42 g', practical: '2 tbsp' },
    { item: 'Rice vinegar', grams: '15 g', practical: '1 tbsp' },
    { item: 'Toasted sesame oil', grams: '14 g', practical: '1 tbsp' },
    { item: 'Garlic, grated or jarred minced', grams: '15 g', practical: '~4 cloves' },
    { item: 'Ground ginger', grams: '1 g', practical: '½ tsp' },
    { item: 'Cornstarch (for glaze)', grams: '8 g', practical: '1 tbsp' },
    { item: 'Water (for slurry)', grams: '30 g', practical: '2 tbsp' },
    { item: 'Gochugaru or chili flakes (optional)', grams: '2 g', practical: '½ tsp' },
    { item: 'Neutral oil (for pan)', grams: '14 g', practical: '1 tbsp' },
  ],
  steps: [
    { title: 'Mix the sauce', body: 'Whisk soy sauce, honey, rice vinegar, sesame oil, garlic, ground ginger, and chili flakes (if using). Hold the cornstarch and water aside — those go in at the glaze step.' },
    { title: 'Split and marinate', body: 'Cut chicken into bite-size pieces. Pour two-thirds of the sauce over the chicken; toss to coat. Reserve the remaining third in a separate container. Marinate 15 minutes on the counter.', why: 'Honey scorches over the high heat needed for a sear. Splitting the sauce lets you sear in the marinade without burning it, then finish with the clean reserved third.' },
    { title: 'Sear hot', body: 'Heat skillet or wok over medium-high with a thin film of neutral oil. Add chicken in a single layer — don\'t crowd, work in two batches if needed. Cook 5–6 minutes, turning, until caramelized and cooked through (74°C / 165°F internal).', checkpoint: 'Pieces are golden-brown, no longer pink at center.' },
    { title: 'Glaze', body: 'Lower heat to medium. Stir the cornstarch into the 30 g water until smooth. Pour the slurry and the reserved sauce into the pan. Toss 1–2 minutes until glossy and clinging.', checkpoint: 'Sauce coats the chicken and looks shiny, not watery.' },
    { title: 'Serve', body: 'Serve over steamed rice. Finish with sliced scallions, toasted sesame seeds, and cucumber ribbons or quick-pickled carrot.' },
  ],
  notes: [
    'Ground ginger replaces fresh at ½ tsp per 2 tbsp fresh. Flavor is warmer, less sharp.',
    'Jarred minced garlic: use 14 g (1 tbsp) per 4 fresh cloves. Drain off packing liquid first.',
  ],
});
