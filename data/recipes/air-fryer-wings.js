// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'air-fryer-wings',
  title: 'Air Fryer Lemon Pepper Wings',
  category: 'Mains',
  subcat: 'Chicken',
  description: 'Crispy skin, tender inside, finished in butter and lemon pepper. Two-stage cook is the whole trick.',
  yield: '~20 pieces, serves 3–4',
  time: '25 min (+optional 1–4 hr air-dry)',
  skill: 'Easy',
  ingredients: [
    { item: 'Chicken wings, split (drums + flats)', grams: '900 g', practical: '~2 lb / ~20 pieces' },
    { item: 'Baking powder, aluminum-free', grams: '16 g', practical: '4 tsp' },
    { item: 'Fine salt', grams: '3–5 g', practical: '½–¾ tsp' },
    { item: 'Unsalted butter (finish)', grams: '30 g', practical: '2 tbsp' },
    { item: 'Lemon pepper seasoning (finish)', grams: '12–15 g', practical: '~2 tbsp' },
    { note: 'Salt: if your lemon pepper blend contains salt, use only 3 g here. Baking powder: 8 g per 450 g (1 lb) of wings — don\'t eyeball past that, too much reads metallic. Aluminum-free only (Rumford, etc.).' },
  ],
  steps: [
    { title: 'Thaw and dry', body: 'Thaw fully if frozen. Pat very dry with paper towels — get into the folds between skin and meat.', why: 'Surface moisture is the single biggest enemy of crisp skin. Everything else is downstream of this step.' },
    { title: 'Air-dry (optional)', body: 'Arrange on a rack uncovered in the fridge 1–4 hours, or overnight. Skin dries further and crisps noticeably better.' },
    { title: 'Coat', body: 'Toss wings with baking powder and salt until evenly filmed — no clumps.' },
    { title: 'Load the tray', body: 'Single layer on the air fry rack, skin side up, pieces not touching. Run batches rather than crowding — airflow is what crisps them.' },
    { title: 'Stage 1 — render', body: 'Air fry at 380°F (193°C) for ~12 minutes. This renders the subcutaneous fat without rushing the skin.', why: 'Never blast both stages at max — the skin browns before the fat renders and you end up with color but no real crispness.' },
    { title: 'Stage 2 — crisp', body: 'Flip. Air fry at max temperature (420–450°F) for 10–12 minutes, until deep golden and crackly.', checkpoint: 'Pull at 190–200°F internal, not 165°F. Wings need high heat to render the collagen — counterintuitively, this is what makes them tender, not dry.' },
    { title: 'Finish and serve', body: 'Melt butter. Toss hot wings to coat, then shower with lemon pepper and toss again. Rest 2–3 minutes.', why: 'Lemon pepper goes on after cooking — high heat scorches the herbs and turns the citrus bitter.' },
  ],
  notes: [
    'Soggy? You crowded the tray or skipped the dry step.',
    'Reheat in air fry mode at 375°F for 4–5 min. The microwave will undo all of this.',
    'Big Costco pack: coat everything at once, cook in tray-sized batches, hold finished wings in a 200°F oven.',
  ],
});
