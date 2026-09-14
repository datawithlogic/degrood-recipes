// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'dumpling-dipping-sauce',
  title: 'Dumpling Dipping Sauce',
  category: 'Sauces',
  description: 'Chinkiang black vinegar forward, the way northern dumpling sauce actually runs — sour first, salty second, with sesame oil, chili oil, ginger and scallion. Five minutes, no cooking.',
  yield: 'About ½ cup — enough for 4',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Chinkiang black vinegar', grams: '30 g', practical: '2 tbsp' },
    { item: 'Light soy sauce', grams: '27 g', practical: '1½ tbsp' },
    { item: 'Sugar', grams: '4 g', practical: '1 tsp' },
    { item: 'Chili oil, with the sediment', grams: '14 g', practical: '1 tbsp' },
    { item: 'Toasted sesame oil', grams: '7 g', practical: '1½ tsp' },
    { item: 'Fresh ginger, finely minced', grams: '6 g', practical: '1 tbsp' },
    { item: 'Scallion, thinly sliced', grams: '10 g', practical: '1 scallion' },
    { item: 'Toasted sesame seeds', grams: '3 g', practical: '1 tsp' },
    { note: 'Made for the Pork and Shrimp Wontons on this site — the vinegar cuts straight through the fatty pork filling, which is exactly the job it is there to do. Works the same for any boiled, steamed, or pan-fried dumpling.' },
  ],
  steps: [
    { title: 'Dissolve the sugar', body: 'Whisk the 4 g sugar into the 30 g black vinegar and 27 g light soy sauce in a small bowl.', checkpoint: 'No grit on the bottom of the bowl when you drag the whisk across it.' },
    { title: 'Add the oils', body: 'Stir in the 14 g chili oil and 7 g sesame oil. Scoop the chili oil from the bottom of the jar so you get the toasted flakes and sediment, not just the clear oil.', checkpoint: 'The oils sit as a loose slick on top rather than emulsifying — that is correct. It gets re-stirred at the table.' },
    { title: 'Stir in the aromatics', body: 'Add the 6 g ginger, the sliced scallion, and the 3 g sesame seeds.', why: 'The ginger and scallion go in raw and are never cooked here. Their sharpness is doing the same job as the vinegar — cutting fat and meaty richness — and heat would soften exactly the edge you want.' },
    { title: 'Rest 10 minutes, then serve', body: 'Let it sit while the dumplings cook, then divide into small bowls, one per person.', checkpoint: 'Taste it: sour should hit first, salty right behind, with heat and sesame trailing. If salt leads, add another 7 g vinegar.', why: 'Chinkiang vinegar is malty and complex rather than simply sharp, and it is less acidic than white vinegar — which is why it can lead the sauce at 2 tbsp without tasting like a pickle. Rice vinegar substituted 1:1 will read thin and one-note.' },
  ],
  notes: [
    'Per use: about 2 tbsp per person as a dipping sauce. One batch serves 4.',
    'Best the day it is made. The vinegar-and-soy base keeps a week in the fridge, but the raw ginger and scallion go dull and slightly bitter after a day — mix the base ahead if you like, and add the aromatics at serving.',
    'Variations: a clove of grated raw garlic makes it sharper and more assertive; for soup dumplings, drop everything but the vinegar and add a small pile of finely julienned ginger, which is the Shanghai way; skip the chili oil entirely and it is still a complete sauce.',
    'Sourcing: look for the yellow-label bottle marked Chinkiang or Zhenjiang Vinegar at a Chinese grocery — Gold Plum is the standard. Do not substitute balsamic unless you are genuinely stuck; most are too sweet and too thick.',
  ],
});
