// TacoTown Recipes — one recipe per file.
// To add a recipe: copy any file in data/recipes/, name it <slug>.js,
// edit the fields, then add the slug to data/manifest.js.
// Never edit a recipe by rewriting a whole other file — one file, one recipe.

RECIPES.push({
  slug: 'garlic-breadsticks',
  title: 'Garlic Butter Breadsticks',
  category: 'Bread',
  subcat: 'Savory',
  description: 'Soft, pillowy breadsticks brushed with garlic butter the moment they come out of the oven.',
  yield: '12 breadsticks',
  time: '~2 hr (includes rise)',
  skill: 'Easy',
  ingredients: [
    { section: 'Dough' },
    { item: 'Warm water (110°F / 43°C)', grams: '240 g', practical: '1 cup' },
    { item: 'Active dry yeast', grams: '7 g', practical: '2¼ tsp (1 packet)' },
    { item: 'Sugar', grams: '4 g', practical: '1 tsp' },
    { item: 'All-purpose flour', grams: '300 g', practical: '2½ cups' },
    { item: 'Fine salt', grams: '6 g', practical: '1 tsp' },
    { item: 'Olive oil', grams: '27 g', practical: '2 tbsp' },
    { section: 'Garlic Butter' },
    { item: 'Unsalted butter', grams: '57 g', practical: '4 tbsp' },
    { item: 'Garlic, minced', grams: '12 g', practical: '3–4 cloves' },
    { item: 'Fresh parsley, chopped', grams: '4 g', practical: '1 tbsp (or ½ tsp dried)' },
    { item: 'Fine salt', grams: '—', practical: 'small pinch' },
    { item: 'Grated Parmesan (optional finish)', grams: '20 g', practical: '~3 tbsp' },
  ],
  steps: [
    { title: 'Activate the yeast', body: 'Combine warm water, sugar, and yeast. Sit 5–10 minutes until foamy.', checkpoint: 'Mixture is noticeably foamy and smells yeasty. If it doesn\'t foam, water was too hot/cold — start again.' },
    { title: 'Make the dough', body: 'Add flour, salt, and olive oil to the yeast mixture. Mix until shaggy, then knead (by hand or dough hook speed 4) for 5–7 minutes until smooth and slightly tacky.', checkpoint: 'Dough pulls away from bowl sides cleanly and springs back slowly when poked.' },
    { title: 'First rise', body: 'Place in a lightly oiled bowl, cover. Rise in a warm spot 1 to 1.5 hours until doubled.' },
    { title: 'Shape', body: 'Preheat oven to 425°F (220°C). Line a sheet pan with parchment. Divide dough into 12 equal pieces (~48 g each). Roll each into a rope about 8–9 inches long. Place on pan, spaced an inch apart.' },
    { title: 'Rest and bake', body: 'Cover loosely and rest 15–20 minutes while oven finishes heating. Bake 10–12 minutes until golden on the bottom and lightly colored on top.', checkpoint: 'Don\'t overbake — you want soft, not crunchy.' },
    { title: 'Garlic butter', body: 'While they bake, melt butter over low heat. Add garlic, cook 1–2 minutes until fragrant (don\'t brown). Stir in parsley and salt. Brush generously over breadsticks the moment they come out of the oven. Finish with Parmesan if using.' },
  ],
  notes: [
    'Best eaten the day they\'re made. Reheat in a 350°F oven for 5 minutes to refresh.',
    'Dough can be made ahead and refrigerated after the first rise (up to 24 hours). Shape cold and rest 30 minutes before baking.',
    'Double everything for ~24 breadsticks.',
  ],
});
