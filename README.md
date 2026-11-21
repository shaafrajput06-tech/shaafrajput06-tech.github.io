# Old SignBridge address: switched off

SignBridge is now SignMate, at <https://signmate-pk.github.io/>. Its old address,
`https://shaafrajput06-tech.github.io/SignBridge/`, was switched off on 2026-11-21 at the owner's request
("make old website disappear, only the newest one should exist"). It shows GitHub's "404" page and does
not forward anywhere.

These files live in the repository **`shaafrajput06-tech.github.io`** on the owner's GitHub account, which
answers every address under `shaafrajput06-tech.github.io/`:

| File | What it does |
|---|---|
| `SignBridge/sw.js` | Browsers that saved the old site for offline use ask for this file now and then. This version deletes the saved copy (caches named `signbridge-...`, up to 120 MB), removes itself and reloads the page, which then shows the 404. Without it, those browsers could keep showing the old site offline. |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are (so this README is not turned into a home page). |

There is no `index.html` and no `404.html` on purpose. Once the old offline copies have had time to clear
(a few months), the repository can be deleted.

`tests/test_site_address.py` checks that this folder holds no web pages.
