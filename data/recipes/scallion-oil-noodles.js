// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'scallion-oil-noodles',
  title: 'Scallion Oil Noodles (Cong You Ban Mian)',
  category: 'Mains',
  subcat: 'Pasta',
  description: 'The Shanghainese pantry noodle — scallions fried low and slow in oil until they collapse into brown crisps, then both soy sauces and sugar melted into that same oil. Five ingredients, and the only real technique is patience with the scallions.',
  yield: 'Serves 4',
  time: '~40 min',
  skill: 'Easy',
  ingredients: [
    { section: 'Scallion oil and sauce' },
    { item: 'Scallions, whites and greens separated, cut into 2-inch lengths', grams: '200 g', practical: '2 large bunches' },
    { item: 'Neutral oil (canola, peanut, grapeseed)', grams: '110 g', practical: '½ cup' },
    { item: 'Light soy sauce', grams: '54 g', practical: '3 tbsp' },
    { item: 'Dark soy sauce', grams: '38 g', practical: '2 tbsp' },
    { item: 'Granulated sugar', grams: '12 g', practical: '1 tbsp' },
    { note: 'This is one of the very few dishes where dark soy is a headline ingredient rather than a teaspoon of tint. There is nothing else to build color or body with, so it carries the near-black lacquer look and the faint molasses edge. Even here the light soy still outweighs it — light soy is the salt.' },
    { section: 'Noodles' },
    { item: 'Dried thin wheat noodles', grams: '450 g', practical: '4 portions' },
    { item: 'Kosher salt, for the noodle water', grams: '—', practical: 'to taste' },
  ],
  steps: [
    { title: 'Cut and dry the scallions', body: 'Trim the scallions and cut them into 2-inch lengths, then split the pale white sections lengthwise so they are no thicker than the greens. Keep whites and greens in separate piles. Spread everything on a towel and blot until genuinely dry.', checkpoint: 'No beaded water anywhere — the pieces should feel papery, not damp.', why: 'Wet scallions dropped into hot oil spit violently and then steam instead of frying. They go limp and khaki and never crisp, which costs you the entire dish.' },
    { title: 'Start the whites', body: 'Pour the 110 g oil into a wide skillet or wok and add the scallion whites while the oil is still cold. Set over medium-low. Let them bubble gently, stirring every couple of minutes.', checkpoint: 'A steady fine simmer of small bubbles, never a hard rolling fry. If the oil is loud, drop the heat.' },
    { title: 'Add the greens', body: 'After about 8 minutes, when the whites have wilted and turned pale gold, add the greens. Keep the heat low and stir occasionally. This is the long part — plan on 12 to 18 more minutes.', checkpoint: 'The greens shrink to about a third of their volume and darken from bright green to olive to brown.' },
    { title: 'Fry to crisp', body: 'Keep going until the scallions are deep mahogany brown and the oil has quieted down. Fish them all out with a spider or slotted spoon onto a plate lined with paper towel. They crisp further as they cool.', checkpoint: 'The bubbling has slowed to almost nothing and the kitchen smells toasty rather than sharp. A cooled piece snaps instead of bending. Pull them at deep brown — black is bitter and there is no rescuing it.' },
    { title: 'Build the sauce in the oil', body: 'Turn the heat to low. Add the 54 g light soy sauce, the 38 g dark soy sauce, and the 12 g sugar to the scallion oil still in the pan. Stir until the sugar dissolves and let it bubble for about 2 minutes, then pull it off the heat.', checkpoint: 'The sauce goes glossy and slightly syrupy and the soy no longer smells raw. It will look alarmingly black in the pan — that is correct.', why: 'Dark soy is doing color and a faintly molasses-y depth here, not seasoning. It is aged longer and usually finished with caramel or molasses, so it reads sweeter and rounder than light soy and it stains everything it touches. Light soy is the salt lever. Swap them one for one and you get two different failures: all light soy leaves you with a pale, flat, watery-looking bowl, and all dark soy gives you a bowl that looks right, tastes oddly sweet and muddy, and is still underseasoned.' },
    { title: 'Boil the noodles', body: 'Cook the 450 g noodles in well-salted boiling water until just al dente, a minute shy of the package time. Drain well but do not rinse.', checkpoint: 'A strand bitten in half shows the barest pale core.' },
    { title: 'Toss and serve', body: 'Add the hot drained noodles straight into the pan with the sauce and toss hard until every strand is an even glossy brown with no pale patches. Divide into bowls and pile the fried scallions on top. Toss again at the table so the crisps stay crisp until the last second.', checkpoint: 'Uniform color edge to edge, and the noodles slide rather than clump.' },
  ],
  notes: [
    'Sourcing: look for Pearl River Bridge, Lee Kum Kee, or Kimlan dark soy at an Asian grocer or online. A bottle labeled only "soy sauce" or "all-purpose" is light soy, not a substitute. Mushroom-flavored dark soy works here and adds a little savory depth.',
    'Shaoxing wine has no role in this dish — it is for cutting meaty funk in fillings and braises, not for a scallion oil. Save it for the wonton and hot-and-sour recipes.',
    'Storage: strain the sauce into a jar and refrigerate — it keeps 2 weeks and gets better. The fried scallions go in a separate airtight container at room temperature and stay crisp about 3 days; never store them in the sauce or they turn to mush overnight.',
    'Make double the scallion oil. It is worth having on hand for fried rice, cold noodles, or spooned over steamed fish, and the frying is the only work in the recipe.',
  ],
});
