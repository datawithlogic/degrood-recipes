// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'mexican-rice',
  title: 'Mexican-Style Rice',
  category: 'Sides',
  description: 'Toasted rice simmered in tomato sauce and chicken broth. Great alongside enchiladas, tacos, or any Mexican dish.',
  yield: 'Serves 4–6',
  time: '~35 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Long-grain white rice', grams: '~400 g', practical: '2 cups' },
    { item: 'Neutral oil', grams: '28 g', practical: '2 tbsp' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '3 (or 1 tsp garlic powder)' },
    { item: 'Small onion, finely diced', grams: '~100 g', practical: '1 small' },
    { item: 'Ground cumin', grams: '—', practical: '1 tsp' },
    { item: 'Chili powder (optional)', grams: '—', practical: '½ tsp' },
    { item: 'Tomato sauce (8 oz can)', grams: '~227 g', practical: '1 can' },
    { item: 'Chicken broth', grams: '~700 g', practical: '3 cups' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
    { item: 'Fresh cilantro (optional garnish)', grams: '—', practical: '—' },
  ],
  steps: [
    { title: 'Toast the rice', body: 'Heat oil in a large skillet or saucepan over medium. Add rice; cook stirring frequently 5–6 min until lightly golden and nutty-smelling.', checkpoint: 'Slightly toasted color — not burnt, not still white.' },
    { title: 'Add aromatics', body: 'Stir in onion and garlic; cook ~2 min until onion is softened. Add cumin and chili powder; cook 30 sec until fragrant.' },
    { title: 'Add liquids', body: 'Stir in tomato sauce and broth. Season with salt and pepper. Bring to a boil.' },
    { title: 'Simmer', body: 'Reduce to low, cover, cook 18–20 min until liquid is absorbed and rice is tender.', checkpoint: 'Tilt the pan slightly — no visible liquid should pool at the bottom.' },
    { title: 'Rest and fluff', body: 'Remove from heat; rest covered 5 min. Fluff with a fork. Garnish with cilantro.' },
  ],
  notes: [
    'For extra color and texture: stir in ½ cup frozen peas or corn in the last 5 min.',
    'Reheats well with a splash of chicken broth to keep moist.',
  ],
});
