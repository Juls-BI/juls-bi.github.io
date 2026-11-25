# Juliana Smith | Portfolio

A fast, static portfolio site (plain HTML, CSS and JavaScript, no build step) built to WCAG 2.2 Level AA. Warm cream background, dark purple text and brand yellow accents, matching data-tides.com.

## Edit your content

Everything you are likely to change lives in `data/site.js`:

- `projects`: add a project by copying an object, dropping screenshots in `assets/img/projects/` (a full size `name.webp` and a 640px wide `name-thumb.webp` for the first image), and writing a description of what each screenshot shows in `alt`. That text is shown under the image for everyone.
- `links.linkedin`: your LinkedIn profile URL (already set). Clear it to hide the link.
- `pinnedRepos`: list repo names to control which GitHub repos appear. Leave it empty to show your six most recently updated public repos.
- `featuredPosts`: add posts and a "Featured posts" section appears.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

1. Create a new public repo on GitHub (name it `juls-bi.github.io` to get the root address `https://juls-bi.github.io`, or any name to get `https://juls-bi.github.io/<name>`).
2. Push this folder to the `main` branch.
3. In the repo go to Settings, Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. For a custom domain (for example `portfolio.data-tides.com`), add it under Pages, create a CNAME DNS record pointing to `juls-bi.github.io`, and tick Enforce HTTPS.

## Accessibility notes

- Fonts (Playfair Display and Source Serif 4) are self-hosted, so no third-party requests are made for them.
- Project details use the native `<dialog>` element: focus is trapped, Escape closes it, and focus returns to the card.
- The sticky header is accounted for with `scroll-padding-top`, so focused elements are never hidden behind it.
- `prefers-reduced-motion` turns off the scroll fade-in and smooth scrolling.
- Update the review date in `accessibility.html` whenever you re-test.
