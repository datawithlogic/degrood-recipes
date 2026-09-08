// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'drip-coffee',
  title: 'Drip Coffee',
  category: 'Coffee',
  subcat: 'Brewed',
  description: 'A pot of regular coffee. The machine handles the dose and the water — the only thing worth touching is the grind dial, because the stock drip recommendation runs too coarse out of the box.',
  yield: '~4 cups (32 oz)',
  time: '~7 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Whole coffee beans', grams: '—', practical: 'fill the hopper' },
    { item: 'Filtered water', grams: '—', practical: 'fill to the line' },
    { note: 'The carafe size you pick sets the dose and the water. Classic or Rich changes the strength from there.' },
  ],
  steps: [
    { title: 'Set the dial', body: 'Pick the size, then set the grinder dial two or three steps finer than the machine recommends for drip. The stock drip suggestion sits at the coarse extreme and brews thin and sour.', checkpoint: 'The grounds should feel like coarse sand — grainy between your fingers, not powdery.' },
    { title: 'Brew', body: 'Choose Classic for a balanced pot or Rich for a stronger, slower-flowing one, and start it.', checkpoint: 'A full brew should take 4–5 minutes. Much faster means the grind is too coarse.' },
    { title: 'Serve', body: 'Pour within 20 minutes. Coffee held on a hot plate past that starts tasting scorched.' },
  ],
  notes: [
    'Over Ice mode brews stronger with less water so the melting ice lands you back at normal strength — use it for iced drip, not the regular setting over ice.',
    'If a Rich pot still tastes weak, the grind is the culprit, not the mode — go finer before you go looking for settings.',
  ],
});
