// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'queso',
  title: 'White Queso Dip',
  category: 'Sauces',
  description: 'The white cheese dip from Southern Mexican restaurants, the one that comes with every order: deli white American, milk, and mild green chiles, melted low and slow into a smooth, pourable dip. It stays silky as it cools and reheats without breaking, so it can go next to any Mexican meal in the book.',
  yield: 'About 3 cups, serves 6–8 as a dip',
  time: '~15 min',
  skill: 'Easy',
  ingredients: [
    { item: 'White American cheese, deli-sliced, torn into pieces', grams: '454 g', practical: '1 lb' },
    { item: 'Whole milk', grams: '180 g', practical: '¾ cup' },
    { item: 'Diced mild green chiles (small can), with their liquid', grams: '113 g', practical: '½ cup' },
    { item: 'Ground cumin', grams: '1 g', practical: '½ tsp' },
    { item: 'Garlic powder', grams: '0.8 g', practical: '¼ tsp' },
    { item: 'Cayenne (optional, for the grown-ups)', grams: '0.3 g', practical: 'pinch' },
    { item: 'Extra whole milk, to thin and for reheating', grams: '30–60 g', practical: '2–4 tbsp' },
    { note: 'Ask the deli counter for white American sliced to order, not individually wrapped singles. The deli loaf is the real restaurant cheese: it melts cleaner and has a milder, less plasticky flavor. Yellow American works the same way, it just looks like nacho cheese.' },
  ],
  steps: [
    { title: 'Tear the cheese', body: 'Tear or roughly chop the sliced cheese into postage-stamp pieces so it melts evenly instead of in a big slab.',
      why: 'American cheese is made with emulsifying salts (sodium citrate or sodium phosphate) that keep the fat and the water bound together when it melts. That is the whole secret of restaurant queso, and it is why this recipe needs no cornstarch, flour, evaporated milk, or sodium citrate. Those are tricks for making cheddar or Jack behave like American. Start with American and the problem is already solved.' },
    { title: 'Melt low and slow', body: 'Put the cheese, milk, green chiles with their liquid, cumin, garlic powder, and cayenne (if using) in a small heavy saucepan over medium-low heat. Stir often with a silicone spatula, scraping the bottom and corners, until everything is melted and smooth, 8–10 minutes.',
      checkpoint: 'Steaming and glossy, with no unmelted bits. It should never bubble hard. If it starts to boil around the edges, pull the pan off the heat for a minute.',
      why: 'Even emulsified cheese will tighten and turn stringy if you boil it. Gentle heat keeps it silky.' },
    { title: 'Adjust the thickness', body: 'Stir in the extra milk 1 tablespoon at a time until it pours off a spoon in a thick ribbon. Restaurant cheese dip is looser than you expect, and it keeps thickening as it sits.',
      checkpoint: 'A tortilla chip dragged through it comes out coated, and the trail closes back up within a second or two.' },
    { title: 'Serve warm', body: 'Pour into a warm bowl and serve with chips, or spoon it over a Steak Burrito, Chicken Enchiladas, or a plate of Mexican-Style Rice. To hold it warm for a meal, put it in a small slow cooker on Warm and give it a stir now and then.' },
  ],
  notes: [
    'This is the side for every Mexican night in the book: Steak Burrito, Marinated Skirt Steak Tacos, Chicken Enchiladas, Pork Carnitas, Sheet-Pan Chicken Fajitas, and Korean BBQ Chicken Tacos for the adventurous.',
    'Reheating: it sets up firm in the fridge, which is normal. Microwave at half power in 30-second bursts, stirring between each, with a splash of milk, or warm it on the stove over low. It comes back as smooth as the first time. Keeps 5 days covered in the fridge.',
    'Want more kick? Stir in a spoonful of minced pickled jalapeños at the end, or swap the mild chiles for hot ones. Add heat to a grown-up bowl rather than the whole pot.',
    'Chunky "queso with stuff": brown some chorizo or ground beef and stir it into a bowl just before serving, or add a spoonful of pico de gallo on top.',
  ],
});
