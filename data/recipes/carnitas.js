// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'carnitas',
  title: 'Pork Carnitas',
  category: 'Mains',
  subcat: 'Pork',
  description: 'Cubed pork butt braised slowly with orange, onion, garlic, bay, and cinnamon, then shredded and run under the broiler until the edges go crisp and lacquered. Soft inside, crackling outside.',
  yield: 'Serves 6 (about 24 tacos)',
  time: '~4½ hr, mostly unattended',
  skill: 'Easy',
  ingredients: [
    { section: 'Braise' },
    { item: 'Boneless pork butt, cut into 2-inch cubes', grams: '1.36 kg', practical: '3 lb' },
    { item: 'Diamond Crystal kosher salt', grams: '8 g', practical: '1 tbsp' },
    { note: 'Diamond Crystal kosher salt. With Morton, use half the weight.' },
    { item: 'Orange, juiced then quartered (peel and all)', grams: '180 g', practical: '1 medium' },
    { item: 'Yellow onions, quartered', grams: '340 g', practical: '2 medium' },
    { item: 'Garlic cloves, halved', grams: '30 g', practical: '6 cloves' },
    { item: 'Bay leaves', grams: '—', practical: '2' },
    { item: 'Cinnamon stick, broken into three pieces', grams: '2 g', practical: '1 stick' },
    { item: 'Vegetable oil', grams: '55 g', practical: '¼ cup' },
    { section: 'To serve' },
    { item: 'Corn tortillas', grams: '720 g', practical: '24' },
    { item: 'White onion, finely diced', grams: '170 g', practical: '1 medium' },
    { item: 'Cilantro, chopped', grams: '20 g', practical: '½ cup' },
    { item: 'Queso fresco, crumbled', grams: '120 g', practical: '1 cup' },
    { item: 'Limes, cut into wedges', grams: '200 g', practical: '3' },
  ],
  steps: [
    { title: 'Season and assemble', body: 'Heat the oven to 275°F. Spread the pork cubes in a 9×13" baking dish and toss with the salt. Squeeze the orange over the pork, then tuck the spent orange quarters, the quartered onions, garlic, bay leaves, and cinnamon pieces in among the meat.', checkpoint: 'The pork sits in a single crowded layer, not stacked — everything should touch the bottom of the dish.', why: 'The spent orange goes in whole because the peel carries the aromatic oils. The juice alone tastes thin and sweet by comparison.' },
    { title: 'Add fat and cover', body: 'Pour the oil evenly over the surface and cover the dish tightly with foil.', why: 'This is a confit more than a braise — no water goes in. The pork cooks in the fat it renders plus the oil, which concentrates flavor instead of diluting it.' },
    { title: 'Braise', body: 'Bake 3½ hours, undisturbed. Start checking at 3 hours.', checkpoint: 'A cube crushes against the side of the dish with light pressure from a spoon, and the meat has pulled visibly away from itself.' },
    { title: 'Separate and reserve', body: 'Uncover and let the pork cool in the dish 20 minutes. Fish out and discard the orange peel, onion, garlic, bay, and cinnamon. Pour the liquid and fat into a bowl or measuring cup and set aside — do not throw it out.', checkpoint: 'The liquid settles into two clear layers: clear fat on top, dark concentrated juices below.' },
    { title: 'Shred', body: 'Pull the pork into rough shreds and large chunks with two forks. Leave the pieces uneven — you want some large enough to stay juicy and some small enough to crisp.', checkpoint: 'A mix of bite-size shreds and thumb-size chunks, not a uniform mince.' },
    { title: 'Crisp under the broiler', body: 'Heat the broiler to high. Spread the shredded pork on a rimmed baking sheet and spoon over enough of the reserved fat and juices to coat it, about a third of what you collected. Broil 6 minutes, stir, and broil another 6 minutes.', checkpoint: 'The edges and thin shreds are deep brown and audibly crisp while the thicker pieces stay soft. Watch it — the last minute is where it turns.' },
    { title: 'Moisten and season', body: 'Off the heat, stir in a few more spoonfuls of the reserved juices to bring back moisture without killing the crunch. Taste and add salt.', checkpoint: 'Glossy, not dry, with crisp edges intact. If it looks matte and stiff, it needs more juice.' },
    { title: 'Warm tortillas and serve', body: 'Heat the corn tortillas in a dry nonstick skillet over medium-high, flicking on a few drops of water and covering briefly, until spotted and dry. Serve the carnitas with diced white onion, cilantro, queso fresco, and lime wedges.', checkpoint: 'Tortillas are pliable and steamy, not stiff or leathery.' },
  ],
  notes: [
    'Bone-in pork butt works well — braise it whole for the same 3½ hours and pull the meat off the bone before shredding.',
    'Make-ahead: braise and shred up to 3 days early, storing the pork and the reserved fat and juices separately in the fridge. Broil to order — carnitas crisped in advance goes soft.',
    'Freezes up to 3 months, shredded and un-crisped, with some of its fat and juices poured over.',
    'Leftovers are excellent in quesadillas, or fried into eggs for breakfast.',
  ],
});
