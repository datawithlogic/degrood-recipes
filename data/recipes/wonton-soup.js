// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'wonton-soup',
  title: 'Wonton Soup',
  category: 'Soups',
  description: 'Properly folded soup wontons — the little bundle with a ruffled tail that trails in the broth — poached in plain water and dropped into a clean gingered chicken broth. Uses the filling from our Pork and Shrimp Wontons, so this recipe is the broth, the fold, and the boil.',
  yield: 'Makes 40 wontons, serves 4',
  time: '~50 min',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Wontons' },
    { item: 'Wonton filling — make the filling from the Pork and Shrimp Wontons recipe', grams: '600 g', practical: '¾ batch' },
    { item: 'Square wonton wrappers, thin Hong Kong style', grams: '320 g', practical: '40 wrappers' },
    { item: 'Water, for sealing', grams: '—', practical: 'small bowl' },
    { note: 'Do not make a separate filling for this — mix the pork-and-shrimp filling from the Pork and Shrimp Wontons recipe exactly as written there, chill it the same way, and use about three quarters of it here. That filling is already built for this: the hard one-direction stirring that makes it smear well also makes it hold together as a poached ball instead of crumbling into the broth. Freeze the leftover quarter or smash and pan-fry it the original way.' },
    { section: 'Broth' },
    { item: 'Low-sodium chicken stock', grams: '1440 g', practical: '6 cups' },
    { item: 'Fresh ginger, sliced into coins', grams: '15 g', practical: '3 coins' },
    { item: 'Shaoxing wine', grams: '15 g', practical: '1 tbsp' },
    { item: 'Light soy sauce', grams: '18 g', practical: '1 tbsp' },
    { item: 'Toasted sesame oil', grams: '7 g', practical: '1½ tsp' },
    { item: 'Ground white pepper', grams: '1 g', practical: '½ tsp' },
    { item: 'Kosher salt', grams: '—', practical: 'to taste' },
    { section: 'To finish' },
    { item: 'Baby bok choy, halved lengthwise', grams: '280 g', practical: '4 heads' },
    { item: 'Scallions, thinly sliced', grams: '25 g', practical: '¼ cup' },
  ],
  steps: [
    { title: 'Simmer the broth', body: 'Put the 1440 g stock, the ginger coins, and the 15 g Shaoxing wine in a saucepan and bring to a bare simmer. Hold it there for 15 minutes while you fold, then stir in the 18 g light soy sauce, the 7 g sesame oil, and the 1 g white pepper. Taste and salt.', checkpoint: 'The broth smells warmly of ginger and the raw alcohol edge is gone. Keep it just below a simmer — a hard boil turns a clear broth cloudy.', why: 'Shaoxing wine here is aroma, not alcohol. It is a brewed rice wine with a nutty, sherry-like nose, and a tablespoon in a chicken broth gives it the specific rounded smell a takeout wonton soup has. Dry sherry is the standard one-for-one substitute; skip the wine entirely and the broth is fine but generic. If your bottle is the salted supermarket "cooking wine," hold back on the salt at the end.' },
    { title: 'Set up a folding station', body: 'Take the chilled filling out of the fridge. Lay a stack of wrappers on a dry board with a damp towel over them, set a small bowl of water beside you, and line a sheet pan with parchment dusted lightly with cornstarch.', checkpoint: 'The wrappers peel apart singly without tearing. If they are gluey, they are too warm — chill the stack 10 minutes.' },
    { title: 'Fill and fold', body: 'Hold one wrapper flat on your palm. Put about 15 g of filling — a rounded teaspoon, no more — just below center. Fold the wrapper up into a triangle and press the air out around the mound so the seal is tight. Now dab water on the two long bottom corners, bring them forward and under the mound until they overlap, and pinch them firmly together. You get a plump bundle with a ruffled tail behind it.', checkpoint: 'The bundle sits upright on its own with a visible fin of loose wrapper sticking up. No air pocket beside the filling, and the corner overlap is stuck fast — a loose pinch unravels in the pot.', why: 'That trailing tail is the whole point of the shape. It cooks to a silky, almost slippery texture that a sealed flat dumpling never gets, and it catches broth on the way to your mouth. This is why a soup wonton is folded and the pan-fried smashed version is not.' },
    { title: 'Line them up', body: 'Set each finished wonton on the cornstarched pan without letting them touch. Keep folding until you run out of wrappers. If they are sitting more than 20 minutes, cover loosely and refrigerate.', checkpoint: 'Bottoms stay dry and matte. A wonton that has gone translucent and wet underneath will tear when you lift it.' },
    { title: 'Boil the wontons', body: 'Bring a large pot of unsalted water — not the broth — to a rolling boil. Slide in half the wontons, stir once gently to unstick them from the bottom, and let the water return to a boil. When they float, add a mug of cold water to knock the boil down and cook 90 seconds more.', checkpoint: 'The wrappers have gone translucent and you can see the pink filling through them; the tails wave freely. Cut one open — no gray-pink center.', why: 'Cooking them in plain water keeps the starch that sloughs off the wrappers out of your broth. Wontons boiled directly in stock turn it thick and cloudy within one batch.' },
    { title: 'Blanch the greens', body: 'Drop the halved bok choy into the same boiling water for 60 to 90 seconds, then lift it out.', checkpoint: 'Leaves fully wilted and deep green, stems still snappy at the base.' },
    { title: 'Assemble', body: 'Fish the ginger coins out of the broth and discard them. Put 10 wontons and a share of bok choy in each bowl, then ladle the hot broth over. Scatter with scallions and serve right away.', checkpoint: 'The broth is clear enough to see the wontons sitting on the bottom of the bowl.' },
  ],
  notes: [
    'The filling is not written out here on purpose — it is the pork-and-shrimp mixture from the Pork and Shrimp Wontons recipe, unchanged. One batch of that filling makes both: fold three quarters into soup wontons and smash-fry the rest.',
    'Wrappers: look for the thinnest ones you can find, often labeled Hong Kong style and sold in yellow-tinged squares. Thick supermarket wrappers stay doughy in the middle of a soup wonton. Square wrappers only — the round ones will not make this fold.',
    'Freezing: line raw folded wontons on the cornstarched pan, freeze solid, then bag them. They keep 2 months and go into boiling water straight from frozen with about 2 minutes added. Do not freeze them cooked or in broth.',
    'Leftovers do not keep — a cooked wonton left sitting in broth bloats and splits within an hour. Boil only what you will eat and store the broth separately, where it keeps 4 days.',
  ],
});
