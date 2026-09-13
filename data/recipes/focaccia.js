// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'focaccia',
  title: 'Focaccia',
  category: 'Bread',
  subcat: 'Savory',
  description: 'The no-starter version: commercial yeast, a short bulk, and an overnight cold ferment in the pan \u2014 or a straight room-temperature rise when you want it the same day. 78% hydration, a flood of olive oil underneath, and a salt brine poured into the dimples so the top stays dappled and savory.',
  yield: 'One 9×13" pan',
  time: '~18 hr overnight, or ~5 hr same day',
  skill: 'Easy',
  ingredients: [
    { section: 'Dough' },
    { item: 'Bread flour', grams: '400 g', practical: '3⅓ cups' },
    { item: 'Water, lukewarm (85°F)', grams: '312 g', practical: '1⅓ cups' },
    { item: 'Honey', grams: '21 g', practical: '1 tbsp' },
    { item: 'Extra-virgin olive oil', grams: '27 g', practical: '2 tbsp' },
    { item: 'Diamond Crystal kosher salt', grams: '8 g', practical: '2¾ tsp' },
    { item: 'Instant yeast', grams: '3 g', practical: '1 tsp' },
    { note: 'Active dry yeast works too — same 3 g, but whisk it into the lukewarm water with the honey and let it sit 10 minutes before mixing.' },
    { section: 'Pan and finish' },
    { item: 'Extra-virgin olive oil, for the pan', grams: '54 g', practical: '¼ cup' },
    { item: 'Extra-virgin olive oil, for the top', grams: '27 g', practical: '2 tbsp' },
    { item: 'Water, for the brine', grams: '45 g', practical: '3 tbsp' },
    { item: 'Diamond Crystal kosher salt, for the brine', grams: '5 g', practical: '1¾ tsp' },
    { item: 'Fresh rosemary, leaves stripped', grams: '2 g', practical: '1 tbsp' },
    { item: 'Flaky sea salt', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Mix the dough', body: 'Whisk the 312 g water, 21 g honey, 27 g olive oil, 8 g kosher salt, and 3 g instant yeast in a large bowl until the honey dissolves. Add the 400 g bread flour and stir with a stiff spatula until no dry flour remains — about a minute. It will be a wet, shaggy, unlovely mass. Cover and rest 20 minutes.', checkpoint: 'No dry patches at the bottom of the bowl; the dough pulls away from the spatula in one sticky sheet.' },
    { title: 'Four folds over an hour', body: 'With a wet hand, reach under one side of the dough, stretch it up, and fold it over the center. Rotate the bowl a quarter turn and repeat three more times, then flip the dough smooth-side up. Cover and repeat this whole sequence every 15 minutes, four rounds total.', checkpoint: 'By the last round the dough resists the stretch, holds a dome instead of slumping, and feels smooth rather than ragged.' },
    { title: 'Short bulk at room temp', body: 'Cover and leave at warm room temp 1 hour.', checkpoint: 'Dough has risen roughly 50%, the surface shows a few bubbles, and it jiggles as one mass when you shake the bowl.' },
    { title: 'Flood the pan and transfer', body: 'Pour the 54 g olive oil into a 9×13" metal pan and tilt to coat the bottom and all four sides. Scrape the dough in, turn it once to coat, and gently press it toward the corners with oiled fingertips. It will not reach — that is fine. Do not dimple yet.', checkpoint: 'Dough covers about two-thirds of the pan and sits in a visible pool of oil, not a greased film.', why: 'That much oil is not greasing — the dough fries in it from below, which is what gives focaccia its crackling, deep-gold underside.' },
    { title: 'Final rise \u2014 overnight or same day', body: 'Cover the pan tightly and pick a path.\n\n\u2022 Overnight (better flavor): refrigerate 12\u201318 hours. Pull the pan out and leave it covered on the counter about 2 hours to come back to room temperature.\n\u2022 Same day: skip the fridge and leave the covered pan at room temperature 2\u20133 hours.\n\nEither way, partway through the counter time ease the dough the rest of the way into the corners with oiled fingers \u2014 wait 10 minutes and try again if it springs back.', checkpoint: 'Dough fills the corners, looks marshmallowy, and wobbles like set custard when you nudge the pan. Either path is ready by feel, not by the clock. Preheat to 450\u00b0F once it looks close.', why: 'Cold slows the yeast but not the enzymes, so the overnight path builds real bread flavor. Same day is a fair trade rather than a free shortcut \u2014 it bakes up lighter in flavor, and it is the one to pick when you decided on focaccia this afternoon.' },
    { title: 'Dimple and brine', body: 'Stir the 45 g water and 5 g kosher salt together until dissolved. Drizzle the 27 g olive oil over the dough, then press straight down to the pan bottom with oiled fingertips, all over, about an inch apart. Spoon the brine into the dimples, scatter the 2 g rosemary and a pinch of flaky salt.', checkpoint: 'Dimples hold and do not spring back, and the surface is pooled and glossy — the brine should look like too much liquid.', why: 'The brine seasons the crust and steams off in the oven, keeping the top tender and dappled instead of drying into a hard shell.' },
    { title: 'Bake', body: 'Bake on a lower-middle rack at 450°F for 20–25 minutes, rotating once halfway.', checkpoint: 'Top is deep gold with darker freckles on the ridges, edges have pulled from the pan, and the center reads 205°F.' },
    { title: 'Lift and cool', body: 'Run an offset spatula around the edges and slide the focaccia straight onto a wire rack. Cool at least 15 minutes before cutting.', checkpoint: 'Underside is evenly golden and crisp when lifted with a spatula, and taps hollow. Cooling on the rack keeps it from steaming itself soft.' },
  ],
  notes: [
    'Toppings go on at the dimpling stage, pressed into the dimples so they do not scorch: halved cherry tomatoes, thin-sliced red onion, pitted olives, or thin lemon rounds. Anything watery should be patted dry first.',
    'Store cut side down at room temp, loosely covered, up to 2 days — never the fridge. Revive slices at 400°F for 5 minutes; they come back nearly new.',
    'A glass or ceramic 9×13" dish works but browns the bottom less. Metal is worth using here.',
  ],
});
