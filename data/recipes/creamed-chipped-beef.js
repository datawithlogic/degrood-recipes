// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'creamed-chipped-beef',
  title: 'Creamed Chipped Beef on Toast',
  category: 'Mains',
  subcat: 'Beef',
  description: 'The old Army mess-hall classic, affectionately known as SOS: salty shreds of dried beef folded into a peppery milk gravy and poured over buttered toast. A rinse of the beef and a blond roux keep it savory instead of punishing.',
  yield: 'Serves 4',
  time: '~25 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Beef' },
    { item: 'Sliced dried beef, torn or cut into ribbons', grams: '227 g', practical: '8 oz' },
    { note: 'Sold in jars or vacuum packs near the lunch meat. Buy the thinnest slices you can find — they melt into the gravy instead of sitting on top of it.' },
    { section: 'Gravy' },
    { item: 'Unsalted butter', grams: '57 g', practical: '4 tbsp' },
    { item: 'All-purpose flour', grams: '30 g', practical: '¼ cup' },
    { item: 'Whole milk, warmed', grams: '732 g', practical: '3 cups' },
    { item: 'Worcestershire sauce', grams: '5 g', practical: '1 tsp' },
    { item: 'Dry mustard', grams: '1 g', practical: '½ tsp' },
    { item: 'Freshly ground black pepper', grams: '2 g', practical: '1 tsp' },
    { item: 'Freshly grated nutmeg', grams: '—', practical: '⅛ tsp' },
    { item: 'Kosher salt, only if needed', grams: '—', practical: 'to taste' },
    { section: 'To serve' },
    { item: 'Sturdy white sandwich bread or sourdough', grams: '360 g', practical: '8 slices' },
    { item: 'Butter for the toast', grams: '28 g', practical: '2 tbsp' },
    { item: 'Chives, thinly sliced', grams: '3 g', practical: '1 tbsp' },
  ],
  steps: [
    {
      title: 'Rinse the beef',
      body: 'Pile the 227 g dried beef in a strainer and rinse under hot running water for about 30 seconds, tossing with your fingers. Spread it on a towel and blot dry, then tear or slice it into ribbons roughly the width of a pencil.',
      checkpoint: 'The slices are separated and no longer tacky to the touch; a torn piece tastes seasoned rather than briny.',
      why: 'Dried beef is salt-cured, and unrinsed it will out-salt everything else in the pan. Rinsing pulls the surface salt so you can season the gravy on its own terms.',
    },
    {
      title: 'Frizzle the beef in butter',
      body: 'Melt the 57 g butter in a 10- or 12-inch skillet over medium heat. Add the beef and cook, stirring often, until the edges curl and catch a little color.',
      checkpoint: 'A few ribbons have crisp, faintly browned edges and the butter smells toasty — about 4 minutes.',
      why: 'Browning the beef before the liquid goes in builds the roasted, faintly smoky backbone the gravy otherwise lacks.',
    },
    {
      title: 'Make a blond roux',
      body: 'Sprinkle the 30 g flour over the beef and butter and stir constantly, scraping the pan bottom, for 1 to 2 minutes.',
      checkpoint: 'The mixture looks like wet sand clinging to the beef and smells like pie crust, with no raw-flour smell left — but it has not darkened past pale gold.',
      why: 'A blond roux cooks off the raw flour taste while keeping full thickening power; taken darker, it loses body and turns the gravy tan instead of ivory.',
    },
    {
      title: 'Whisk in the milk',
      body: 'Pour in about a quarter of the 732 g warm milk and whisk hard until the pan goes smooth and pasty. Add the rest in two more additions, whisking smooth each time before the next.',
      checkpoint: 'No lumps cling to the whisk and the surface is glossy and uniform before you add the next pour.',
    },
    {
      title: 'Simmer to nappe',
      body: 'Bring to a bare simmer over medium heat, stirring with a flat-edged spoon so nothing catches, and cook 5 to 7 minutes.',
      checkpoint: 'The gravy coats the back of the spoon and a finger drawn across leaves a clean line that holds.',
    },
    {
      title: 'Season at the end',
      body: 'Off the heat, stir in the 5 g Worcestershire, 1 g dry mustard, 2 g black pepper, and the nutmeg. Taste, then add salt only if it needs it.',
      checkpoint: 'It tastes peppery and savory with a faint warm background from the nutmeg — most batches need no salt at all.',
    },
    {
      title: 'Toast and butter',
      body: 'Toast the 8 slices of bread dark, well past golden, and butter them while hot. Cut each slice on the diagonal and lay two halves overlapping on each plate.',
      checkpoint: 'The toast is stiff enough to stand up in your hand and crackles when cut.',
    },
    {
      title: 'Serve immediately',
      body: 'Ladle the gravy over the toast, scatter the chives on top, and finish with another grind of pepper. Serve right away.',
      checkpoint: 'The gravy pools around the toast and slumps slowly rather than running flat across the plate.',
    },
  ],
  notes: [
    'Thin it, don\'t re-thicken it: the gravy sets up considerably as it cools. Loosen leftovers with a splash of milk over low heat rather than letting it stand thick.',
    'No dried beef? Thin-sliced deli corned beef or good ham, cut into ribbons, works the same way — skip the rinse and expect to add a pinch of salt at the end.',
    'Make-ahead: the gravy holds in the fridge 3 days in a sealed container. Reheat gently in a saucepan, whisking, and toast the bread fresh — soggy toast is the only way to ruin this.',
    'Beyond toast, this is excellent over split biscuits, a baked potato, or hash browns.',
  ],
});
