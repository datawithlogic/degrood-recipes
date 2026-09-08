// TacoTown Recipes — one recipe per file.

RECIPES.push({
  slug: 'brown-sugar-shaken-espresso',
  title: 'Brown Sugar Shaken Espresso',
  category: 'Coffee',
  subcat: 'Specialty',
  description: 'Espresso shaken hard with brown sugar syrup and cinnamon, poured over ice and topped with oat milk. Shaking aerates the shot into a thick tan foam — it is the entire point of the drink.',
  yield: '1 drink (~12 oz)',
  time: '~5 min',
  skill: 'Easy',
  ingredients: [
    { item: 'Double espresso, hot', grams: '—', practical: '2 oz' },
    { item: 'Brown sugar syrup', grams: '20 g', practical: '1 tbsp' },
    { item: 'Ground cinnamon', grams: '—', practical: '¼ tsp' },
    { item: 'Ice cubes', grams: '~200 g', practical: '1½ cups' },
    { item: 'Oat milk, cold', grams: '120 g', practical: '4 oz' },
  ],
  steps: [
    { title: 'Combine and shake', body: 'Put the hot espresso, brown sugar syrup, cinnamon, and a scoop of ice in a cocktail shaker. Shake hard for 15 seconds.', checkpoint: 'The shaker frosts over and the liquid inside turns opaque and foamy — it should look like a coffee milkshake, not a dark liquid.', why: 'Shaking a hot shot against ice both chills it instantly and whips air into the crema. A stirred version is flat and tastes noticeably thinner.' },
    { title: 'Pour over ice', body: 'Fill a 16 oz glass with fresh ice and strain the shaken espresso over it.' },
    { title: 'Top', body: 'Pour the cold oat milk over the top and serve without stirring.' },
  ],
  notes: [
    'Oat milk is the right call here — its body holds up to the shaking and it is sweeter than dairy against the cinnamon.',
    'No shaker? A pint jar with a tight lid does the same job.',
  ],
});
