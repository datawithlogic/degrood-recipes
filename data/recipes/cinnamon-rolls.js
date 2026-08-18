// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'cinnamon-rolls',
  title: 'Sourdough Cinnamon Rolls',
  category: 'Bread',
  subcat: 'Pastries',
  description: 'Fluffy sourdough rolls with a cinnamon-brown sugar filling and a simple vanilla glaze. Overnight-cold-proof option for morning baking.',
  yield: '~9 rolls (8×8 or 9×9 pan)',
  time: '~6 hr same-day, or overnight + 30 min',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Dough' },
    { item: 'All-purpose flour', grams: '400 g', practical: '~3⅓ cups' },
    { item: 'Whole milk, warm (~90°F)', grams: '180 g', practical: '¾ cup' },
    { item: 'Active sourdough starter (peaked, bubbly)', grams: '80 g', practical: '~⅓ cup' },
    { item: 'Granulated sugar', grams: '40 g', practical: '3 tbsp' },
    { item: 'Unsalted butter, very soft', grams: '40 g', practical: '3 tbsp' },
    { item: 'Egg', grams: '~55 g', practical: '1 large' },
    { item: 'Fine salt', grams: '8 g', practical: '1½ tsp' },
    { section: 'Filling' },
    { item: 'Brown sugar', grams: '100 g', practical: '½ cup packed' },
    { item: 'Ground cinnamon', grams: '14 g', practical: '2 tbsp' },
    { item: 'Unsalted butter, very soft', grams: '40 g', practical: '3 tbsp' },
    { section: 'Glaze' },
    { item: 'Powdered sugar, sifted', grams: '100 g', practical: '~¾ cup' },
    { item: 'Whole milk', grams: '15–45 g', practical: '1–3 tbsp' },
    { item: 'Vanilla extract', grams: '5 g', practical: '1 tsp' },
  ],
  steps: [
    { title: 'Mix and hydrate dough', body: 'Combine flour, milk, starter, sugar, softened butter, and egg in stand mixer. Speed 1–2 for 2–3 min until a shaggy dough forms. Cover and rest 30–45 min.', checkpoint: 'Dough is evenly hydrated, no dry patches.' },
    { title: 'Add salt and knead', body: 'Add 8g salt. Speed 1–2 for 5–8 min until smooth and elastic — dough pulls away from bowl sides and springs back slowly when poked.', checkpoint: 'Pulls cleanly from bowl sides; slow-spring poke test.' },
    { title: 'Bulk ferment', body: 'Transfer to lightly oiled 2L Cambro. Ferment at 72–78°F for 2–5 hr until risen 60–80% and puffy.', checkpoint: 'Dough has noticeably risen and feels puffy but not collapsed.' },
    { title: 'Roll and fill', body: 'Lightly flour counter. Roll dough into a 14×10" rectangle. Mix filling (butter, brown sugar, cinnamon) and spread evenly to all edges. Roll tightly from the long side into a log. Slice into 9 even rolls — dental floss works better than a knife. Place in parchment-lined 8×8" or 9×9" pan with slight spacing.' },
    { title: 'Final proof', body: 'Cover and proof until rolls are puffy and touching. Warm: 2–4 hr at ~78°F. Cold overnight: refrigerate 8–16 hr, bake straight from fridge (add 3–5 min to bake time).', checkpoint: 'Rolls look pillowy and jiggle when you nudge the pan.' },
    { title: 'Bake', body: 'Bake at 375°F convection (or 400°F conventional) for 20–25 min until golden and center rolls reach 190–200°F internal.', checkpoint: 'Tent with foil after 15 min if tops are browning too fast.' },
    { title: 'Glaze', body: 'Cool rolls 10 min in pan. Whisk glaze and drizzle over warm (not hot) rolls. Adjust milk for desired consistency — thin for drizzle, thicker for a spread.' },
  ],
  notes: [
    'Best eaten the day they\'re made. Reheat individual rolls at 300°F for 8–10 min.',
  ],
});
