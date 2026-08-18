// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'toll-house-cookies',
  title: 'Nestlé Toll House Cookies',
  category: 'Sweets',
  description: 'The classic recipe from the bag, full quantities, with chocolate chips reduced by half so the dough is the star.',
  yield: '~60 cookies (5 dozen)',
  time: '15 min + 9–11 min per sheet',
  skill: 'Easy',
  ingredients: [
    { item: 'All-purpose flour', grams: '270 g', practical: '2¼ cups' },
    { item: 'Baking soda', grams: '6 g', practical: '1 tsp' },
    { item: 'Fine salt', grams: '6 g', practical: '1 tsp' },
    { item: 'Unsalted butter, softened', grams: '226 g', practical: '2 sticks (1 cup)' },
    { item: 'Granulated sugar', grams: '150 g', practical: '¾ cup' },
    { item: 'Brown sugar, packed', grams: '165 g', practical: '¾ cup packed' },
    { item: 'Eggs', grams: '—', practical: '2 large' },
    { item: 'Vanilla extract', grams: '10 g', practical: '2 tsp' },
    { item: 'Semi-sweet chocolate chips', grams: '170 g', practical: '1 cup' },
    { note: 'Standard recipe uses 340 g (2 cups / one 12 oz bag). This uses half — 170 g (1 cup) — for a less chocolate-dense cookie.' },
  ],
  steps: [
    { title: 'Prep', body: 'Preheat oven to 375°F (190°C). Line baking sheets with parchment.' },
    { title: 'Cream butter and sugars', body: 'Beat softened butter, granulated sugar, and brown sugar on medium speed 2–3 minutes.', checkpoint: 'Mixture looks pale, fluffy, and noticeably increased in volume.' },
    { title: 'Add wet ingredients', body: 'Beat in eggs one at a time, then vanilla. Mix until smooth.', checkpoint: 'Batter is creamy with no egg streaks.' },
    { title: 'Combine dry', body: 'Whisk flour, baking soda, and salt in a separate bowl. Gradually stir into wet until just combined — don\'t overmix.' },
    { title: 'Fold in chips', body: 'Fold in chocolate chips until evenly distributed.' },
    { title: 'Bake', body: 'Drop rounded tablespoons (~22 g each) onto prepared baking sheets, spaced 2 inches apart. Bake 9–11 minutes until edges are golden but centers still look slightly underdone.', checkpoint: 'Pull early — cookies firm up as they cool on the pan.' },
    { title: 'Cool', body: 'Rest on baking sheet 2 minutes, then transfer to a wire rack.' },
  ],
  notes: [
    'Chill the dough 1 hour (or overnight) for taller, chewier cookies with less spread.',
    'Freeze portioned raw dough balls; bake from frozen at 375°F for 11–13 min.',
    'High altitude (above 5,000 ft): reduce granulated sugar to 133 g, brown sugar to 142 g, add 10 g (2 tsp) water to wet ingredients.',
  ],
});
