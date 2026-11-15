// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'garlic-parmesan-wings',
  title: 'Garlic Parmesan Wings',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Same two-stage air fryer wings as our lemon pepper version, tossed in warm garlic butter and showered with Parmesan instead.',
  yield: '~20 pieces, serves 3–4',
  time: '25 min (+optional 1–4 hr air-dry)',
  skill: 'Easy',
  ingredients: [
    { item: 'Chicken wings, split (drums + flats)', grams: '900 g', practical: '~2 lb' },
    { item: 'Baking powder, aluminum-free', grams: '16 g', practical: '4 tsp' },
    { item: 'Fine salt', grams: '3 g', practical: '½ tsp' },
    { note: 'Baking powder: 2 tsp per pound of wings — any more reads metallic. Salt stays at the low end of the lemon pepper version because the Parmesan is salty.' },
    { section: 'Garlic-parmesan finish' },
    { item: 'Unsalted butter', grams: '57 g', practical: '4 tbsp' },
    { item: 'Garlic, minced or finely grated', grams: '12 g', practical: '4 cloves' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { item: 'Parmesan, finely grated', grams: '30 g', practical: '5 tbsp' },
    { item: 'Fresh parsley, finely chopped (optional)', grams: '4 g', practical: '1 tbsp' },
    { item: 'Bottled ranch, for serving', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Thaw and dry', body: 'Thaw fully if frozen. Pat very dry with paper towels — get into the folds between skin and meat.', why: 'Surface moisture is the single biggest enemy of crisp skin. Everything else is downstream of this step.' },
    { title: 'Air-dry (optional)', body: 'Arrange on a rack uncovered in the fridge 1–4 hours, or overnight. Skin dries further and crisps noticeably better.' },
    { title: 'Coat', body: 'Toss wings with baking powder and salt until evenly filmed — no clumps.' },
    { title: 'Load the tray', body: 'Single layer on the air fry rack, skin side up, pieces not touching. Run batches rather than crowding — airflow is what crisps them.' },
    { title: 'Stage 1 — render', body: 'Air fry at 380°F (193°C) for ~12 minutes. This renders the subcutaneous fat without rushing the skin.', why: 'Never blast both stages at max — the skin browns before the fat renders and you end up with color but no real crispness.' },
    { title: 'Stage 2 — crisp', body: 'Flip. Air fry at max temperature (420–450°F) for 10–12 minutes, until deep golden and crackly. While they cook, melt the butter in a small pan over low heat, add the garlic and pepper, and warm gently 1–2 minutes, then take it off the heat.', checkpoint: 'Pull wings at 190–200°F internal, not 165°F. The garlic butter should smell sweet and toasty with the garlic still pale — browned garlic turns bitter.' },
    { title: 'Toss and finish', body: 'Put the hot wings in a large bowl, pour the garlic butter over, and toss to coat. Add the Parmesan and toss again, then scatter the parsley on top. Serve with ranch.', checkpoint: 'Every wing is glossy and speckled with cheese, with a little extra Parmesan clinging to the bottom of the bowl.', why: 'The cheese goes on after the butter so it sticks to the buttery surface. Added to the hot pan instead, it melts into an oily clump.' },
  ],
  notes: [
    'Soggy? You crowded the tray or skipped the dry step.',
    'Fine, powdery grated Parmesan coats more evenly than coarse shreds. Grate it on a rasp, or use the finely grated tub.',
    'Reheat in air fry mode at 375°F for 4–5 min. The microwave will undo all of this.',
    'Big pack: coat everything at once, cook in tray-sized batches, hold finished wings in a 200°F oven, and toss them all in the garlic butter just before serving.',
    'Half-and-half night: split the cooked wings and finish half this way and half as Air Fryer Lemon Pepper Wings.',
  ],
});
