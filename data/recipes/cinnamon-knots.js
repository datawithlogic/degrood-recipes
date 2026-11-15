// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'cinnamon-knots',
  title: 'Cinnamon Knots',
  category: 'Sweets',
  description: 'Our take on the Papa Johns cinnamon pull-aparts. Soft milk-and-butter dough tied into knots, rolled in cinnamon-sugar butter, baked close together so they pull apart, and finished with a thick vanilla icing.',
  yield: '16 knots (one 9×13" pan)',
  time: '~30 min active + ~2 hr rising',
  skill: 'Intermediate',
  ingredients: [
    { section: 'Soft dough' },
    { item: 'All-purpose flour', grams: '360 g', practical: '3 cups' },
    { item: 'Granulated sugar', grams: '38 g', practical: '3 tbsp' },
    { item: 'Instant yeast', grams: '7 g', practical: '2¼ tsp' },
    { item: 'Fine salt', grams: '6 g', practical: '1 tsp' },
    { item: 'Whole milk, warm (~100°F)', grams: '240 g', practical: '1 cup' },
    { item: 'Unsalted butter, softened', grams: '43 g', practical: '3 tbsp' },
    { note: 'Active dry yeast works too: use the same amount and stir it into the warm milk for 5 minutes before adding.' },
    { section: 'Cinnamon-sugar butter' },
    { item: 'Unsalted butter, melted', grams: '57 g', practical: '½ stick' },
    { item: 'Granulated sugar', grams: '100 g', practical: '½ cup' },
    { item: 'Ground cinnamon', grams: '8 g', practical: '1 tbsp' },
    { section: 'Icing' },
    { item: 'Powdered sugar', grams: '113 g', practical: '1 cup' },
    { item: 'Whole milk', grams: '22 g', practical: '1½ tbsp' },
    { item: 'Vanilla extract', grams: '2 g', practical: '½ tsp' },
  ],
  steps: [
    { title: 'Mix and knead', body: 'In the mixer bowl, stir together the flour, sugar, yeast, and salt. Add the warm milk and run the dough hook on speed 1 until it comes together, about 1 minute. Add the softened butter a piece at a time, then knead on speed 2 for 6–8 minutes.', checkpoint: 'Smooth, soft, and slightly tacky. It should clear the sides of the bowl but may still stick a little at the bottom.', why: 'We use a soft enriched dough here, not a leftover New York–Style Pizza dough ball. Pull-aparts should be fluffy and tender. The milk, butter, and extra sugar soften the crumb and help the knots brown at 350°F. A lean pizza dough is built for chew and crisp at 550°F, so in a pan at 350°F it bakes up chewy and bready and goes stale within hours. King Arthur makes its own soft knots from a dinner-roll-style dough for the same reason.' },
    { title: 'First rise', body: 'Cover the bowl and let it rise somewhere warm for 60–90 minutes.', checkpoint: 'Roughly doubled. A floured finger poked in leaves a dent that fills back in slowly.' },
    { title: 'Make the cinnamon sugar', body: 'While it rises, butter a 9×13-inch pan. Put the melted butter in one shallow bowl, and mix the sugar and cinnamon in another.' },
    { title: 'Divide and tie', body: 'Press the dough flat and cut it into equal pieces of about 44 g each (16 for a single batch). Roll each piece into a rope about 9 inches long and tie it in a simple overhand knot, tucking the ends underneath.', checkpoint: 'If the ropes keep shrinking back, cover them and let them rest 5 minutes, then roll again.' },
    { title: 'Coat', body: 'Dip each knot in the melted butter, let the extra drip off, then roll it in the cinnamon sugar. Set the knots in the pan in even rows (4 by 4 for a single batch), with a little space between them. Drizzle any leftover butter over the top and sprinkle on the rest of the cinnamon sugar.' },
    { title: 'Second rise', body: 'Cover and let rise 30–45 minutes. Meanwhile, heat the oven to 350°F (175°C).', checkpoint: 'Puffy and touching their neighbors. That contact is what makes them pull apart.' },
    { title: 'Bake', body: 'Bake 20–25 minutes.', checkpoint: 'Golden on top, the cinnamon sugar bubbling at the edges, and a center knot reads 190°F. Pulled apart, a center knot is set, not doughy.' },
    { title: 'Ice and serve', body: 'Whisk the powdered sugar, milk, and vanilla until thick and smooth, adding more milk a few drops at a time only if needed. Let the knots cool 10 minutes, then drizzle the icing back and forth over the top, or pipe it from a zip-top bag with the corner cut off.', checkpoint: 'The icing should fall in a thick ribbon that holds its shape. Too thin, and it soaks in and disappears.', why: 'Icing slightly warm knots lets it set into a soft glaze. On hot knots it melts away.' },
  ],
  notes: [
    'Make ahead: after coating, cover the pan and refrigerate overnight (up to 16 hours). In the morning, let it sit at room temperature 45–60 minutes until puffy, then bake.',
    'Leftover pizza dough in a pinch: one New York–Style Pizza dough ball makes about 8 knots, coated and baked the same way. They will be chewier and more like bread than pull-aparts, so eat them warm.',
    'Cream cheese icing, closer to Papa Johns: beat 2 oz softened cream cheese with 1 cup powdered sugar, a splash of milk, and the vanilla.',
    'Doubling the batch? Use two 9×13-inch pans.',
    'Best the day they are made. Rewarm leftovers in the microwave for 15–20 seconds.',
  ],
});
