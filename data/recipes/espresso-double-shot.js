// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'espresso-double-shot',
  title: 'Espresso (Double Shot)',
  category: 'Coffee',
  subcat: 'Espresso',
  description: 'The base for every espresso drink on this site. The Luxe Café weighs and doses the coffee itself — you pick the shot, set the dial to the number it recommends, tamp, and pull.',
  yield: '1 double shot (~2 oz)',
  time: '~3 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Whole coffee beans, medium or medium-dark roast', grams: '—', practical: 'fill the hopper' },
    { note: 'Beans 4 days to 3 weeks off roast pull best. Older beans want a finer setting than the machine suggests.' },
  ],
  steps: [
    { title: 'Preheat', body: 'Let the machine come up to temperature, then lock the empty portafilter in and run a blank shot into the cup you plan to serve in.', why: 'This heats the group, the basket, and the cup at once. A cold basket drops brew temperature enough to sour the first ounce — it is the biggest free upgrade to a home shot.' },
    { title: 'Select the shot', body: 'Put the double basket in the portafilter, set it on the dock, and choose Espresso → Double Shot. The machine reads the basket and doses to it.' },
    { title: 'Set the dial', body: 'Set the grinder dial to the setting the machine recommends for that shot, then grind. It stops on its own.', checkpoint: 'The grounds should fill the basket to just below the rim — a heaping mound or an obviously shallow bed means the dial is well off.' },
    { title: 'Distribute and tamp', body: 'Tap the portafilter once on the counter to settle the bed, level the grounds with a finger swipe, then press the assisted tamper straight down until it bottoms out.', checkpoint: 'The puck should be flat and level edge to edge. A sloped puck channels, and the shot runs fast and thin on one side.' },
    { title: 'Pull', body: 'Lock the portafilter in and start the shot.', checkpoint: 'First drops around 6–10 seconds, then a honey-thick dark stream that lightens to caramel. Total time 25–30 seconds.' },
    { title: 'Adjust if needed', body: 'Ran fast, thin, and sour? Move the dial one step finer. Ran slow, dark, and bitter? One step coarser. Change one step at a time and re-pull.', why: 'The recommendation is a starting point tuned for an average bean. Roast level, freshness, and humidity all shift where the sweet spot actually lands.' },
    { title: 'Serve or build', body: 'Drink it within a minute, or use it as the base for a latte, cappuccino, americano, or anything in the Specialty section.' },
  ],
  notes: [
    'Ratio, if you want to change the drink rather than fix it: the stock double runs about 1:2.5 coffee to liquid. Tightening it makes a denser, syrupier shot; lengthening it makes a milder, sweeter one.',
    'Knock the puck out and wipe the basket dry between shots — leftover grounds throw off the next dose.',
    'The quad-shot program uses the deep Luxe basket and pulls about double the volume. Handy when you are building two milk drinks at once.',
    'Backflush with the blind basket weekly and descale on schedule. Scale shifts brew temperature long before the machine complains about it.',
  ],
});
