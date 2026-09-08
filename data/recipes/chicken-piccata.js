// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'chicken-piccata',
  title: 'Chicken Piccata',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Thin chicken cutlets browned in a hot skillet, then finished in a lemon-caper pan sauce mounted with butter. One pan, thirty minutes, and it eats like a restaurant plate.',
  yield: 'Serves 4',
  time: '~30 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Chicken' },
    { item: 'Boneless skinless chicken breasts, halved horizontally into 4 cutlets', grams: '~910 g', practical: '2 lb' },
    { item: 'Kosher salt', grams: '~6 g', practical: '2 tsp' },
    { item: 'Black pepper', grams: '—', practical: '½ tsp' },
    { item: 'All-purpose flour, for dredging', grams: '90 g', practical: '¾ cup' },
    { item: 'Vegetable oil', grams: '54 g', practical: '¼ cup' },
    { section: 'Pan sauce' },
    { item: 'Lemons', grams: '—', practical: '2' },
    { item: 'Shallot, minced', grams: '~30 g', practical: '1 large' },
    { item: 'Garlic clove, minced', grams: '—', practical: '1' },
    { item: 'Chicken broth', grams: '240 g', practical: '1 cup' },
    { item: 'Unsalted butter, cut into 6 pieces', grams: '43 g', practical: '3 tbsp' },
    { item: 'Capers, drained', grams: '~17 g', practical: '2 tbsp' },
    { item: 'Fresh parsley, minced', grams: '~4 g', practical: '1 tbsp' },
    { note: 'Cold butter matters — it emulsifies into the sauce instead of splitting into a greasy slick.' },
  ],
  steps: [
    { title: 'Pound and season the cutlets', body: 'Lay each cutlet between sheets of plastic wrap and pound to an even ½-inch thickness. Season both sides with the salt and pepper and let sit at room temperature 15 minutes.', checkpoint: 'Cutlets are uniform edge to edge — no thick lobe left at the wide end.', why: 'Even thickness is the whole ballgame here. A tapered cutlet overcooks at the thin end before the thick end is done.' },
    { title: 'Prep the lemons', body: 'Halve one lemon and cut one half into thin ¼-inch rounds; discard the seeds. Juice the remaining lemon and the leftover half to get 3 tbsp juice.' },
    { title: 'Dredge', body: 'Pat the cutlets dry. Spread the 90 g flour in a shallow dish and coat each cutlet, shaking off the excess. Set on a wire rack.', checkpoint: 'A thin, dusty, even coat — no gummy patches.' },
    { title: 'Brown the chicken', body: 'Heat half the 54 g oil in a 12-inch skillet over medium-high until it just begins to smoke. Add 2 cutlets and cook 2–3 minutes per side. Transfer to a plate and repeat with the remaining oil and cutlets.', checkpoint: 'Deep golden crust on both sides; chicken need not be fully cooked yet.' },
    { title: 'Build the sauce', body: 'Reduce heat to medium. Add the shallot and cook about 1 minute, then the garlic for 30 seconds. Pour in the 240 g broth, the lemon juice, and the lemon rounds, scraping the browned bits off the pan bottom.', checkpoint: 'Fond has dissolved and the liquid looks glossy brown, not pale.' },
    { title: 'Simmer the chicken through', body: 'Return the cutlets and any accumulated juices to the skillet. Simmer 4 minutes, flipping once halfway, until the chicken registers 160°F. Move the cutlets to a serving platter.' },
    { title: 'Mount the butter', body: 'Off the heat, whisk in the 43 g butter one piece at a time until the sauce is glossy and slightly thickened. Stir in the capers and parsley and season to taste.', checkpoint: 'Sauce coats the back of a spoon and looks creamy rather than broken.', why: 'Adding cold butter off the heat keeps the emulsion together — boiling it in will break the sauce.' },
    { title: 'Serve', body: 'Spoon the sauce and lemon rounds over the cutlets and serve immediately with buttered pasta, rice, or crusty bread.' },
  ],
  notes: [
    'A dry white wine can replace 60 g of the broth — add it with the shallot and reduce by half before the broth goes in.',
    'The sauce does not hold. Cutlets can be pounded and dredged up to an hour ahead, but make the sauce right before serving.',
    'Leftovers reheat best in a covered skillet over low heat with a splash of broth; the microwave turns the crust to paste.',
  ],
});
