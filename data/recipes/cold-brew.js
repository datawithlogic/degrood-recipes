// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'cold-brew',
  title: 'Cold Brew',
  category: 'Coffee',
  subcat: 'Iced',
  description: 'Coarse-ground coffee extracted cold. Low acid, smooth, and it keeps a week in the fridge. The machine does it in minutes with cold-pressure pulses; the jar method takes overnight and costs nothing.',
  yield: '~4 cups concentrate',
  time: 'Machine ~15 min · Jar 16 hr',
  skill: 'Easy',
  ingredients: [
    { item: 'Whole coffee beans, medium or dark roast', grams: '—', practical: 'fill the hopper' },
    { item: 'Cold filtered water', grams: '—', practical: 'fill to the line' },
    { note: 'On the machine, the size you pick sets both the dose and the water. For the jar method below, use 100 g of beans to 800 g of water — a 1:8 concentrate.' },
  ],
  steps: [
    { title: 'Set the dial coarse', body: 'Pick the cold brew program and size, then set the grinder dial to the setting it recommends — it will be near the coarse end of the range.', why: 'Cold water extracts slowly, so a fine grind over a long steep pulls bitter compounds and turns the batch muddy. Coarse keeps it clean.' },
    { title: 'Brew', body: 'Start it and let it run. Fill the reservoir with ice water rather than tap water for a colder, sweeter extraction.', checkpoint: 'Finished concentrate is opaque and nearly black — you should not be able to see through it in the carafe.' },
    { title: 'Or brew in a jar', body: 'Grind coarse, stir the grounds and cold water together in a large jar, cover, and refrigerate 16 hours. Strain through a fine mesh sieve lined with a coffee filter.' },
    { title: 'Store', body: 'Keep the concentrate in a sealed jar in the fridge.' },
    { title: 'Serve', body: 'Fill a glass with ice and pour concentrate and water or milk in equal parts.' },
  ],
  notes: [
    'Keeps 7–10 days refrigerated. It does not go bad so much as go flat — the aromatics fade first.',
    'Dark roasts give the chocolate-and-caramel cold brew flavor most people are after. Light roasts come out surprisingly tea-like and fruity.',
    'Freeze leftover concentrate in an ice tray for coffee ice cubes.',
  ],
});
