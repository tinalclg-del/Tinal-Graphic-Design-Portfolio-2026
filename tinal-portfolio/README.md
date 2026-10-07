# Tinal Jethava: Portfolio

A single-page portfolio (plain HTML, CSS and a little JavaScript, no build step, no plugins).
It includes the main page and two case studies (Roselle and Meridian Express Logistics)
that slide in from the right on the same page.

## Put it online with GitHub Pages
1. Create a new repository on GitHub (for example `portfolio`).
2. Upload **the contents of this folder** (not the folder itself) so that `index.html` sits at the top level of the repo.
   Make sure the `assets` folder and the `.nojekyll` file are uploaded too.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

Every path is relative, so it works the same in a project repo, a `username.github.io` repo or a custom domain.
File names are lowercase; keep them that way, because GitHub's servers are case-sensitive.

## Case study links
- Roselle: `/#/salon-brand-identity`
- Meridian: `/#/logistics-brand-identity`

## Bauhaus 93
It's a licensed system font, so it isn't included. Visitors without it see the Rammetto One fallback.
To show the real font to everyone, add a licensed `bauhaus93.woff2` to `assets/fonts/` and follow the note at the top of `style.css`.

## Editing
- Contact links: search for `contact__icon` in `index.html`.
- Colors: the variables at the top of `style.css`.
