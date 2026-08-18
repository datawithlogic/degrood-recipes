// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'sourdough-focaccia',
  title: 'Sourdough Discard Focaccia',
  category: 'Bread',
  subcat: 'Sourdough',
  description: 'Zero hand folds — the mixer does everything. Transforms unfed discard into fluffy, olive-oil-rich focaccia in about 3 hours.',
  yield: 'One 9×13" sheet',
  time: '~3 hr (mostly hands-off)',
  skill: 'Easy',
  ingredients: [
    { item: 'Sourdough discard (cold OK — stir first)', grams: '200 g', practical: '~¾ cup' },
    { item: 'Warm water (80–85°F)', grams: '265 g', practical: '~1 cup + 2 tbsp' },
    { item: 'Extra-virgin olive oil (dough)', grams: '25 g', practical: '2 tbsp' },
    { item: 'Bread flour or AP flour', grams: '400 g', practical: '~3⅓ cups' },
    { item: 'Fine sea salt', grams: '10 g', practical: '~1½ tsp' },
    { item: 'Olive oil for pan', grams: '30 g', practical: '2 tbsp' },
    { item: 'Toppings (classic: rosemary + flaky salt)', grams: '—', practical: 'to taste' },
    { note: 'Faster rise option: add 1g instant yeast with the flour.' },
  ],
  steps: [
    { title: 'Autolyze 20 min', body: 'Add discard, water, and 25g oil to mixer bowl. Run hook on stir briefly to blend. Add flour + salt; mix on stir until no dry patches (~1 min). Transfer to lightly oiled 2L Cambro. Cover loosely, Proof mode 20 min.', checkpoint: 'Surface hydrated, dough has spread slightly and looks cohesive.' },
    { title: 'Knead', body: 'Return dough to lightly oiled mixer bowl. Knead speed 2 for ~5–7 min until dough pulls cleanly from bowl sides and slaps the bowl.', checkpoint: 'Soft windowpane: stretch a piece — edges turn translucent before tearing.' },
    { title: 'Bulk ferment ~1½ hr', body: 'Return to oiled Cambro. Mark starting level. Proof mode ~1.5 hr.', checkpoint: 'Dough has risen ~50%, domes slightly, wobbles when container is nudged.' },
    { title: 'Pan and final proof', body: 'Oil 9×13" sheet pan with 30g olive oil, tilting to coat. Scrape dough in. Oil fingers and press/stretch toward corners. If it resists, wait 5 min and finish. Cover and proof 45–60 min in Proof mode.', checkpoint: 'Dough fills most corners, looks pillowy, finger poke springs back slowly.' },
    { title: 'Dimple and top', body: 'Drizzle a little more olive oil. Press straight down with oiled fingertips to create deep, even dimples all over. Add toppings (rosemary + flaky salt is classic).' },
    { title: 'Bake', body: 'Preheat full-size oven to 450°F (232°C). Bake 20–25 min, rotating halfway.', checkpoint: 'Deep golden top, ≥200°F at center. Optional 1 min broil for extra bronze — watch closely.' },
    { title: 'Cool', body: 'Slide to a rack. Cool 10 min. Bottom should be crisp and browned.' },
  ],
  notes: [
    'Overnight option: after bulk, refrigerate in pan up to 18 hr; bake straight from fridge.',
    'Re-crisp leftover slices at 350°F for 5 min.',
    'Variation: swap 50g flour for whole wheat for a nuttier flavor.',
  ],
});
