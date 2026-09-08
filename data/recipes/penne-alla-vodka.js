// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'penne-alla-vodka',
  title: 'Penne alla Vodka',
  category: 'Mains',
  subcat: 'Pasta',
  description: 'Crisp pancetta, tomato paste bloomed with onion, vodka simmered until the raw burn is gone, then cream. Half the tomatoes go through the blender and half stay chunky so the sauce has body without being a puree.',
  yield: 'Serves 4',
  time: '~35 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Sauce' },
    { item: 'Canned whole peeled tomatoes (28 oz can), with their juice', grams: '794 g', practical: '1 can' },
    { item: 'Olive oil', grams: '14 g', practical: '1 tbsp' },
    { item: 'Pancetta, cut into ½-inch pieces', grams: '85 g', practical: '3 oz' },
    { item: 'Yellow onion, minced', grams: '40 g', practical: '¼ cup' },
    { item: 'Tomato paste', grams: '16 g', practical: '1 tbsp' },
    { item: 'Garlic, minced', grams: '6 g', practical: '2 cloves' },
    { item: 'Red pepper flakes', grams: '1 g', practical: '½ tsp' },
    { item: 'Vodka', grams: '75 g', practical: '⅓ cup' },
    { item: 'Heavy cream', grams: '116 g', practical: '½ cup' },
    { item: 'Fresh basil, minced', grams: '5 g', practical: '2 tbsp' },
    { section: 'Pasta' },
    { item: 'Penne', grams: '454 g', practical: '1 lb' },
    { item: 'Table salt, for the pasta water', grams: '18 g', practical: '1 tbsp' },
    { item: 'Parmesan, grated, for serving', grams: '30 g', practical: '⅓ cup' },
    { note: 'Any plain vodka is fine — this is not the place for the good bottle. It is there as a solvent, not a flavor.' },
  ],
  steps: [
    { title: 'Prep the tomatoes', body: 'Drain the tomatoes, reserving the juice. Puree half of them smooth in a blender or food processor. Dice the other half into ½-inch pieces, discarding any tough cores. Combine the puree, the diced tomatoes, and enough of the reserved juice to make about 480 g total.', checkpoint: 'The mixture is loose and pourable but visibly chunky.', why: 'Splitting the can between smooth and chunky gives you a sauce that coats the pasta and still has something to chew — a fully pureed sauce reads as jarred.' },
    { title: 'Crisp the pancetta', body: 'Heat the 14 g olive oil in a large saucepan over medium. Add the 85 g pancetta and cook 6–8 minutes. Lift it out with a slotted spoon to a small bowl, leaving about 2 tablespoons of fat in the pan.', checkpoint: 'Pancetta is browned and crisp at the edges; the pan bottom is coated in clear rendered fat.' },
    { title: 'Build the base', body: 'Add the 40 g onion and the 16 g tomato paste to the fat. Cook, stirring, about 3 minutes.', checkpoint: 'The paste darkens from bright red to brick and the onion turns light golden; the mixture smells sweet, not raw.' },
    { title: 'Bloom the aromatics', body: 'Stir in the 6 g garlic and the 1 g red pepper flakes and cook 30 seconds.', checkpoint: 'Fragrant — pull it forward before the garlic takes on any color.' },
    { title: 'Add tomatoes and vodka', body: 'Stir in the tomato mixture and a pinch of salt. Take the pan off the burner, then add the 75 g vodka. Return to medium-high and simmer briskly 8–10 minutes, stirring often.', checkpoint: 'Reduced by about a quarter, and a spoonful tasted has no sharp alcohol bite left.', why: 'Off the heat before the vodka goes in — a pan of simmering sauce plus a splash of spirit over an open flame can flare.' },
    { title: 'Finish with cream', body: 'Stir in the 116 g heavy cream and heat through, about 1 minute. Season with salt.', checkpoint: 'Color shifts from red to a warm terracotta orange.' },
    { title: 'Cook the pasta', body: 'Meanwhile, boil the penne in well-salted water until just shy of al dente. Reserve about 60 g of the cooking water, then drain.', checkpoint: 'Slightly firmer than you want to eat it — it finishes in the sauce.' },
    { title: 'Marry and serve', body: 'Add the drained penne to the sauce over medium heat and toss 1–2 minutes, adding reserved pasta water if it tightens. Stir in the 5 g basil and the reserved pancetta. Serve with the 30 g Parmesan.', checkpoint: 'Sauce coats the outside and works its way into the tubes; nothing pools in the bottom of the pan.' },
  ],
  notes: [
    'No pancetta: start with 14 g more olive oil and skip straight to the onion. The sauce is still very good, just less savory.',
    'Rigatoni and ziti both work — anything ridged and tubular.',
    'The sauce alone keeps 4 days refrigerated or 3 months frozen. Reheat gently and add a splash of cream to bring it back before saucing fresh pasta.',
  ],
});
