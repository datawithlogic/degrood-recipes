# Recipe photos

Drop a photo here named after the recipe slug, then add one line to that
recipe's file in `data/recipes/`:

```js
image: 'img/pot-roast.jpg',
```

Rules:

- **Filename = slug.** `img/<slug>.jpg` keeps it obvious which photo goes with what.
- **Optional.** A recipe with no `image` shows the category emoji card, exactly as before.
  Nothing breaks if you never add one.
- **Missing file is safe.** If the `image` path points at a file that isn't there, the card
  falls back to the emoji and the recipe page drops the hero block. No broken-image icon.
- **Shape:** cards and the recipe hero both crop to 16:9, centered. Shoot or crop landscape.
- **Size:** long edge around 1600 px, JPEG quality ~80, ideally under 300 KB. These are
  committed to the repo and served by GitHub Pages, so keep them small.
- **Only use photos you took**, or ones you have a license for. Photos from blogs, TikTok,
  or Instagram belong to whoever shot them.

Resize a photo before committing:

```bash
sips -Z 1600 ~/Desktop/IMG_1234.jpg --out img/pot-roast.jpg
```
