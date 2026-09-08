// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'pork-tenderloin',
  title: 'Roast Pork Tenderloin with Mustard Crust',
  category: 'Mains',
  subcat: 'Pork',
  description: 'Two tenderloins seared, painted with whole-grain mustard, and armored in pre-toasted Parmesan panko. Roasting on a wire rack keeps the crust crisp all the way around.',
  yield: 'Serves 4–6',
  time: '~40 min',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Pork' },
    { item: 'Pork tenderloins, silverskin trimmed off', grams: '900 g', practical: '2 tenderloins' },
    { item: 'Diamond Crystal kosher salt', grams: '8 g', practical: '1 tbsp' },
    { item: 'Black pepper, freshly ground', grams: '2 g', practical: '1 tsp' },
    { item: 'Vegetable oil', grams: '14 g', practical: '1 tbsp' },
    { section: 'Crumb crust' },
    { item: 'Panko bread crumbs', grams: '75 g', practical: '1½ cups' },
    { item: 'Unsalted butter, melted', grams: '42 g', practical: '3 tbsp' },
    { item: 'Parmesan, finely grated', grams: '33 g', practical: '⅓ cup' },
    { section: 'Mustard glue' },
    { item: 'Whole-grain mustard', grams: '60 g', practical: '¼ cup' },
    { item: 'Dijon mustard', grams: '15 g', practical: '1 tbsp' },
    { item: 'White wine vinegar', grams: '15 g', practical: '1 tbsp' },
    { item: 'Garlic cloves, minced', grams: '10 g', practical: '2 cloves' },
    { item: 'Fresh rosemary, minced', grams: '2 g', practical: '2 tsp' },
    { item: 'Cayenne pepper', grams: '—', practical: 'a pinch' },
    { note: 'Trim the silverskin — that silvery membrane never softens and will make the roast curl as it cooks. Slide a thin knife under one end and angle the blade upward.' },
  ],
  steps: [
    { title: 'Heat the oven and toast the panko', body: 'Set a rack in the middle of the oven and heat to 425°F. Set a wire rack inside a rimmed baking sheet. In a dry skillet over medium heat, toss the panko with the melted butter and toast, stirring constantly, 4–6 minutes. Scrape into a shallow dish and stir in the Parmesan.', checkpoint: 'Evenly golden brown, like sand at the waterline — it should smell toasty. It will not brown much further in the oven, so take it all the way now.', why: 'Raw panko on a 15-minute roast comes out pale and dusty. Toasting it first in butter means the crust is already crisp and browned when the pork hits temperature.' },
    { title: 'Season and sear', body: 'Pat the tenderloins dry and season all over with the salt and pepper. Wipe out the skillet, add the oil, and heat over medium-high until shimmering. Sear the tenderloins about 6 minutes total, turning to brown all sides. Move them to the wire rack.', checkpoint: 'Browned on every surface, still soft when pressed. You are building color here, not cooking the pork through.' },
    { title: 'Mix the mustard glue', body: 'Stir together the whole-grain mustard, Dijon, white wine vinegar, garlic, rosemary, and cayenne.', checkpoint: 'Thick enough to hold a peak on the spoon. If it looks loose, add a little more whole-grain mustard.' },
    { title: 'Coat', body: 'Brush the mustard mixture over the top and sides of each tenderloin in a thick, even layer — skip the underside, where it would just steam. Press the panko firmly onto the mustard with your palm until the crust holds.', checkpoint: 'The crust stays put when you tilt the tenderloin. Any bald patches will only get worse in the oven — patch them now.', why: 'Mustard is the adhesive as much as the seasoning: its emulsifiers grip both the meat and the crumbs, so the crust does not slide off in one sheet when you carve.' },
    { title: 'Roast', body: 'Roast on the wire rack 12–16 minutes. Start checking at 12 minutes with an instant-read thermometer pushed into the thickest end.', checkpoint: '140°F internal. Tenderloin is lean and unforgiving — a few minutes past this is the difference between juicy and chalky.' },
    { title: 'Rest', body: 'Move the tenderloins to a carving board and rest 10 minutes, uncovered so the crust stays crisp.', checkpoint: 'They coast up to about 145°F and the centers will be faintly pink — that is correct and safe.', why: 'Tenting with foil here would trap steam and soften every bit of crust you just built. Uncovered is worth the slightly faster heat loss.' },
    { title: 'Carve and serve', body: 'Slice crosswise into medallions about ¾ inch thick, using a sharp knife and a firm single stroke so the crust does not shatter. Serve immediately.', checkpoint: 'Clean-edged medallions with the crust still attached around the rim.' },
  ],
  notes: [
    'Whole-grain mustard can be swapped one-for-one with more Dijon — the crust will be smoother and sharper.',
    'Make-ahead: toast the panko and mix the mustard up to 2 days early, keeping the panko at room temperature in a sealed jar and the mustard in the fridge.',
    'Leftovers are best cold, sliced thin for sandwiches. Reheating softens the crust and overcooks the pork.',
    'Pork tenderloins are often sold two to a package, which is exactly what this recipe uses. Do not confuse tenderloin with pork loin — a loin roast is far larger and cooks completely differently.',
  ],
});
