// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'affogato',
  title: 'Affogato',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'A double shot poured over vanilla ice cream. Two ingredients, ninety seconds, and it lands as dessert and coffee at once — the best thing you can hand a guest after dinner.',
  yield: '1 serving',
  time: '~3 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Vanilla ice cream or gelato', grams: '~110 g', practical: '2 small scoops' },
    { item: 'Double espresso', grams: '—', practical: '2 oz' },
  ],
  steps: [
    { title: 'Chill the glass', body: 'Put the serving glass in the freezer while you set up. Scoop the ice cream into it and return it to the freezer.', why: 'A room-temperature glass melts the ice cream from below before the espresso even arrives, and you lose the hot-cold contrast that makes the drink.' },
    { title: 'Pull and pour', body: 'Pull a double espresso and pour it over the ice cream at the table, in front of whoever is eating it.' },
    { title: 'Serve immediately', body: 'Hand it over with a spoon. It has about two good minutes.' },
  ],
  notes: [
    'A splash of amaretto, Frangelico, or bourbon over the top makes it an adult dessert.',
    'A dark roast holds up better against the sugar in the ice cream than a light one.',
    'Salted caramel or coffee gelato both work; anything fruity does not.',
  ],
});
