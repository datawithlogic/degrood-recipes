// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'crispy-brussels-sprouts',
  title: 'Crispy Brussels Sprouts',
  category: 'Sides',
  description: 'The burger-joint side we order every time at Grindhouse: halved Brussels sprouts roasted cut-side down on a preheated sheet pan until deeply browned and crisp at the edges, then finished with balsamic glaze and a pinch of salt.',
  yield: 'Serves 4',
  time: '~35 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Brussels sprouts, trimmed and halved', grams: '680 g', practical: '1½ lb' },
    { item: 'Neutral oil', grams: '41 g', practical: '3 tbsp' },
    { item: 'Fine salt', grams: '4.5 g', practical: '¾ tsp' },
    { item: 'Black pepper', grams: '0.6 g', practical: '¼ tsp' },
    { item: 'Balsamic glaze, bottled', grams: '40 g', practical: '2 tbsp' },
    { item: 'Flaky salt, to finish', grams: '—', practical: 'pinch' },
    { item: 'Parmesan, finely grated (optional)', grams: '20 g', practical: '¼ cup' },
    { note: 'Pick sprouts about the same size. Halve the normal ones through the stem and quarter any longer than about 2½ inches so everything finishes together.' },
  ],
  steps: [
    { title: 'Preheat the pan', body: 'Set an oven rack in the lowest position, put a heavy rimmed sheet pan on it, and preheat the oven to 450°F with the pan inside. Give it at least 15 minutes after the oven says it is ready.',
      why: 'A ripping-hot pan sears the cut faces on contact like a griddle. That is where the deep brown, crisp-edged surface comes from. On a cold pan the sprouts steam for the first ten minutes and never catch up.' },
    { title: 'Prep and dry', body: 'Trim the stem ends, pull off any yellowed outer leaves, and halve the sprouts through the stem. Dry them very well in a salad spinner or with a towel. Keep any leaves that fall off; they turn into crisp little chips.',
      checkpoint: 'No water beading on the cut faces.' },
    { title: 'Season', body: 'Toss the sprouts and loose leaves in a large bowl with the oil, salt, and pepper until every cut face is glossy.' },
    { title: 'Roast cut-side down', body: 'Pull the hot pan out and carefully spread the sprouts on it, turning as many as you can cut-side down. Leave space between them. Roast 15–20 minutes without touching them.',
      checkpoint: 'You hear a sizzle the moment they hit the pan. Pull one: the cut face should be deep mahogany, nearly black at the edges.',
      why: 'Crowding is what makes sprouts soggy. Water needs room to escape. If they will not fit in one layer, use two pans.' },
    { title: 'Toss and finish crisping', body: 'Toss the sprouts with a spatula and roast 3–5 minutes more, until the outer leaves are crisp and a knife slides into the center of a large one with no resistance.',
      checkpoint: 'Loose leaves shatter when pressed, and the centers are tender, not crunchy-raw.' },
    { title: 'Glaze and serve', body: 'Tip the sprouts into a bowl, drizzle with the balsamic glaze, and toss once. Finish with a pinch of flaky salt and the parmesan if using. Serve right away.',
      why: 'Glaze is mostly sugar and burns at this oven temperature. It goes on after roasting, and on hot sprouts so it loosens and coats them.' },
  ],
  notes: [
    'Why the oven and not the air fryer: a 4-serving batch is more than a typical basket holds in one layer, so the air fryer means two rounds. The preheated sheet pan does the whole batch at once and gives the cut faces a better sear.',
    'Air fryer instead (good for 2 servings, or about 1 lb at a time): toss with the same oil and seasoning and air fry at 350°F for 20–25 minutes, shaking halfway, until well browned and tender. Hotter settings brown the outside before the center cooks.',
    'Grindhouse-style extras: a few strips of crumbled bacon, or a squeeze of lemon along with the glaze.',
    'Best straight out of the oven. Leftovers re-crisp in the air fryer at 375°F for 3–4 minutes; add fresh glaze after.',
  ],
});
