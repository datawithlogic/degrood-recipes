// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'roast-chicken-spatchcock',
  title: 'Spatchcock Roast Chicken',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Backbone out, bird pressed flat, dry-brined overnight, then roasted hot on a rack. Flattening the chicken puts breast and thigh on the same plane so they finish together, and every square inch of skin faces the heat.',
  yield: 'Serves 4',
  time: '~1 hr active, plus overnight dry brine',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Bird and dry brine' },
    { item: 'Whole chicken', grams: '~1.8 kg', practical: '4 lb' },
    { item: 'Kosher salt', grams: '~12 g', practical: '4 tsp' },
    { item: 'Baking powder', grams: '~3 g', practical: '1 tsp' },
    { item: 'Black pepper, coarsely ground', grams: '~2 g', practical: '1 tsp' },
    { section: 'Herb butter' },
    { item: 'Unsalted butter, softened', grams: '43 g', practical: '3 tbsp' },
    { item: 'Garlic cloves, minced', grams: '—', practical: '3' },
    { item: 'Fresh thyme leaves, chopped', grams: '~2 g', practical: '2 tsp' },
    { item: 'Lemon zest', grams: '—', practical: '1 lemon' },
    { item: 'Olive oil', grams: '14 g', practical: '1 tbsp' },
    { note: 'The baking powder is not a leavener here — it raises the skin\'s pH so it browns faster and crisps harder. Use baking powder, not soda.' },
  ],
  steps: [
    { title: 'Spatchcock the bird', body: 'Set the chicken breast-side down on a cutting board. With sturdy kitchen shears, cut up along both sides of the backbone and remove it. Flip the bird breast-side up and press hard on the breastbone with the heel of your hand until it cracks and the chicken lies flat.', checkpoint: 'The bird stays flat on its own when you let go — legs splayed out to the sides.', why: 'Flattening equalizes the distance from the heat to the breast and thigh, so the breast is done at 150°F just as the thighs pass 170°F. Save the backbone for stock.' },
    { title: 'Dry brine, uncovered, overnight', body: 'Mix the 12 g salt, 3 g baking powder, and 2 g black pepper. Pat the chicken very dry and rub the mixture over the skin and the underside. Set the bird skin-side up on a wire rack over a rimmed baking sheet and refrigerate uncovered 12–24 hours.', checkpoint: 'Next day the skin looks dry, tight, and slightly translucent — almost like parchment.', why: 'The salt seasons the meat all the way through while the open air pulls moisture off the skin. Wet skin steams; dry skin crisps.' },
    { title: 'Make the herb butter', body: 'Mash the 43 g softened butter with the garlic, thyme, and lemon zest until evenly combined.' },
    { title: 'Butter under the skin', body: 'Take the chicken out of the fridge 30 minutes before roasting. Slide your fingers under the breast and thigh skin to loosen it, then push the herb butter into those pockets and smooth it flat from the outside. Rub the 14 g olive oil over the skin. Do not add more salt.', checkpoint: 'Butter shows as a thin even layer under the skin rather than one lump at the top of the breast.' },
    { title: 'Heat the oven', body: 'Preheat to 450°F (230°C) with a rack in the upper-middle position. Keep the bird on its wire rack over the rimmed sheet, breast-side up, legs pointing toward the outside of the pan.', why: 'Elevating the chicken on a rack lets hot air reach the underside, so the bottom skin renders instead of stewing in drippings.' },
    { title: 'Roast', body: 'Roast 40–50 minutes without opening the oven for the first 30 minutes. Start checking temperature at 40 minutes: the deepest part of the breast should read 150°F and the thigh joint 170–175°F.', checkpoint: 'Skin is deep mahogany and blistered; juices from the thigh run clear.' },
    { title: 'Rest', body: 'Move the chicken to a carving board and rest 10–15 minutes uncovered. Do not tent it with foil.', why: 'Foil traps steam against the skin and undoes the crisping you just spent a day building.' },
    { title: 'Carve', body: 'Cut down between the leg and breast to remove each leg quarter, then separate drumstick from thigh at the joint. Slice each breast off the bone and cut crosswise into thick slices. Pour the pan drippings over the carved meat.' },
  ],
  notes: [
    'A 3–5 lb bird all works; figure roughly 10 minutes of roasting per pound at 450°F and trust the thermometer over the clock.',
    'Short on time, the dry brine still helps at 4 hours uncovered in the fridge — overnight is better but not required.',
    'Roast halved small potatoes on the sheet pan under the rack; they cook in the drippings and are done when the chicken is.',
    'Simmer the backbone and picked carcass with an onion and a carrot for an hour for a quart of stock.',
  ],
});
