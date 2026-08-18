// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'baked-mac-cheese',
  title: 'Baked Mac & Cheese',
  category: 'Sides',
  description: 'Cheddar-Gruyère béchamel mac with a crispy panko-Parmesan crust. Cheese goes in off the heat — that\'s the entire trick to a smooth sauce.',
  yield: 'One 3–4 qt dish, serves 8',
  time: '~1 hr',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Pasta & sauce' },
    { item: 'Elbow macaroni or tubular pasta', grams: '~454 g', practical: '16 oz' },
    { item: 'Olive oil (to prevent sticking)', grams: '14 g', practical: '1 tbsp' },
    { item: 'Unsalted butter', grams: '~85 g', practical: '6 tbsp' },
    { item: 'All-purpose flour', grams: '~40 g', practical: '⅓ cup' },
    { item: 'Whole milk (cold)', grams: '~710 g', practical: '3 cups' },
    { item: 'Heavy cream (cold)', grams: '~240 g', practical: '1 cup' },
    { item: 'Sharp cheddar, shredded', grams: '~450 g', practical: '4 cups' },
    { item: 'Gruyère, shredded (Jarlsberg works)', grams: '~225 g', practical: '2 cups' },
    { item: 'Salt and pepper', grams: '—', practical: 'to taste' },
    { section: 'Panko topping' },
    { item: 'Panko breadcrumbs', grams: '~80 g', practical: '1½ cups' },
    { item: 'Unsalted butter, melted', grams: '~55 g', practical: '4 tbsp' },
    { item: 'Parmesan, shredded', grams: '~50 g', practical: '½ cup' },
    { item: 'Smoked paprika', grams: '—', practical: '¼ tsp' },
  ],
  steps: [
    { title: 'Prep', body: 'Preheat oven to 350°F (175°C). Lightly grease a 3–4 qt baking dish. Combine all shredded cheeses in one bowl so they\'re ready to add quickly.', why: 'Pre-mixing helps the cheeses incorporate smoothly when added in batches off the heat.' },
    { title: 'Cook pasta under al dente', body: 'Cook pasta 1 minute under package al dente time. Drain, toss with olive oil to prevent sticking.', why: 'Pasta finishes cooking in the oven — undercooking now prevents mush.' },
    { title: 'Roux', body: 'Melt butter in a deep pot over medium. Sprinkle in flour; whisk constantly ~1 min until foamy and blond — no raw flour smell.', checkpoint: 'Roux is bubbling gently across the surface, pale golden color.' },
    { title: 'Béchamel', body: 'Slowly whisk in cold milk and cream in stages. Continue whisking until thickened and small bubbles form at the edges. Cook 2 more min. Season with salt and pepper.', checkpoint: 'Smooth, no lumps. Coats back of spoon — clean line when finger is drawn across.', why: 'Cold dairy prevents clumping; controlled heat prevents scorching. Don\'t use warm milk here.' },
    { title: 'Melt cheese — off the heat', body: 'Remove pot from burner 10–15 sec. Add cheese in 2–3 batches, whisking each fully in before adding the next.', checkpoint: 'Glossy sauce, no oil separation, thick but pourable. If too thin: return to low heat 20–30 sec. If too thick: add splash of warm milk.', why: 'Residual heat melts cheese gently. Active heat turns cheese grainy and can separate the sauce.' },
    { title: 'Combine', body: 'Pour cheese sauce over pasta; fold gently until every piece is coated and sauce still flows slowly when lifted.' },
    { title: 'Layer', body: 'Add half the pasta to the baking dish. Top evenly with ~2 cups of remaining shredded cheese. Add remaining pasta over.' },
    { title: 'Top and bake', body: 'Toss panko with melted butter, Parmesan, and paprika. Sprinkle evenly over top. Bake uncovered 30 min until topping is crisp and browned, edges bubbling, center set.', checkpoint: 'Topping golden-brown and crunchy; edges visibly bubbling.' },
    { title: 'Rest', body: 'Let sit 5 min before serving — sauce will set slightly and not run.' },
  ],
  notes: [
    'Reheat at 300°F covered with foil to retain creaminess.',
  ],
});
