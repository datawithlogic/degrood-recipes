// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'vanilla-latte',
  title: 'Vanilla Latte',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'A latte built on real vanilla syrup instead of the bottled stuff. The easiest guest drink to make well and the hardest to make badly.',
  yield: '1 drink (~12 oz)',
  time: '~4 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Vanilla syrup', grams: '20 g', practical: '1 tbsp' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
    { item: 'Whole milk, cold', grams: '240 g', practical: '8 oz' },
  ],
  steps: [
    { title: 'Syrup first', body: 'Put the vanilla syrup in the bottom of a warm 12 oz mug.' },
    { title: 'Pull the shot over it', body: 'Pull a double espresso directly into the mug and stir once.', why: 'The hot shot dissolves the syrup completely. Syrup added after the milk stays in a sweet slick at the bottom of the cup.' },
    { title: 'Froth and pour', body: 'Froth the cold milk on a thin-froth hot setting and pour into the center of the mug.' },
  ],
  notes: [
    'Brown sugar syrup in place of vanilla makes this a brown sugar latte — sharper and more caramel-forward.',
    'Iced version: syrup and espresso into a small cup, stir, then pour over ice and cold milk.',
  ],
});
