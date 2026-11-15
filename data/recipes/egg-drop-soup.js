// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'egg-drop-soup',
  title: 'Egg Drop Soup',
  category: 'Soups',
  description: 'The ten-minute takeout soup: gingered chicken stock thickened just enough to hold silky egg ribbons in suspension, seasoned with white pepper and a few drops of sesame oil.',
  yield: 'Serves 4',
  time: '~15 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Broth' },
    { item: 'Low-sodium chicken stock', grams: '960 g', practical: '4 cups' },
    { item: 'Fresh ginger, sliced into coins', grams: '10 g', practical: '2 coins' },
    { item: 'Scallions, thinly sliced, whites and greens kept separate', grams: '20 g', practical: '2 scallions' },
    { item: 'Fine salt', grams: '3 g', practical: '½ tsp' },
    { item: 'Granulated sugar', grams: '1 g', practical: '¼ tsp' },
    { item: 'White pepper', grams: '0.5 g', practical: '¼ tsp' },
    { item: 'Ground turmeric (optional, for the takeout yellow)', grams: '0.4 g', practical: '⅛ tsp' },
    { section: 'Slurry, eggs, and finish' },
    { item: 'Cornstarch', grams: '16 g', practical: '2 tbsp' },
    { item: 'Cold water', grams: '30 g', practical: '2 tbsp' },
    { item: 'Large eggs', grams: '—', practical: '3 eggs' },
    { item: 'Toasted sesame oil', grams: '5 g', practical: '1 tsp' },
    { note: 'Salt depends entirely on your stock. With low-sodium stock, start with the 3 g and taste at the end; with regular stock, leave it out until you have tasted.' },
  ],
  steps: [
    { title: 'Simmer the stock', body: 'Bring the 960 g stock, ginger coins, and scallion whites to a boil in a medium saucepan, then turn it down and simmer 5 minutes. Stir in the salt, sugar, white pepper, and turmeric if using.', checkpoint: 'The broth smells clearly of ginger. Fish out the ginger coins now so nobody bites one.' },
    { title: 'Thicken', body: 'Whisk the 16 g cornstarch into the 30 g cold water. Stir the soup in a slow circle and pour the slurry in gradually, then let it bubble gently for 1 minute.', checkpoint: 'The broth turns from cloudy back to clear and coats a spoon in a thin sheen, about the body of warm maple syrup thinned out — loose, not gloppy.', why: 'Thickening first is what gives you ribbons. Thin broth lets the egg sink and break into shreds; slightly thickened broth holds each strand up long enough to set into a long, soft ribbon.' },
    { title: 'Beat the eggs gently', body: 'Crack the eggs into a measuring cup with a spout and beat with a fork just until the whites and yolks are combined — a few quick strokes, no froth.', why: 'Whipped-in air makes foamy, spongy egg instead of silky ribbons.' },
    { title: 'Drop the eggs', body: 'Turn the heat down so the soup is at a low simmer with small, lazy bubbles. Stir the soup in one direction to get it moving, then pour about a third of the egg in a thin stream from a few inches up. Wait 10–15 seconds, then stir gently once. Repeat with the rest of the egg in two more pours.', checkpoint: 'Long, thin, pale-yellow ribbons drifting through a clear broth. Slower stirring gives bigger, softer clouds; faster stirring gives finer threads.', why: 'A hard boil tears the egg into curds and turns the broth cloudy; a broth that is not moving at all lets the egg set in one lump. A low simmer with gentle motion is the narrow window.' },
    { title: 'Finish and serve', body: 'Turn off the heat. Stir in the 5 g sesame oil and the scallion greens, taste for salt, and serve right away.', checkpoint: 'Taste: savory and well-seasoned with a gentle warmth from the white pepper at the back of the throat.' },
  ],
  notes: [
    'Want it thicker, like some takeout spots? Go to 3 tbsp cornstarch in 3 tbsp water. Want it lighter? Use 1½ tbsp.',
    'A pinch of MSG (¼ tsp) is the missing takeout note if the soup tastes flat with the salt already right.',
    'Easy add-ins: a handful of frozen peas and corn, or diced silken tofu, simmered 2 minutes before the eggs go in.',
    'Best fresh. Leftovers keep 2 days; the cornstarch thins as it sits, so reheat gently without boiling and expect a looser soup.',
    'Serve alongside Sesame Chicken or Mongolian Beef with Crab Rangoon and Egg Rolls for the full takeout spread.',
  ],
});
