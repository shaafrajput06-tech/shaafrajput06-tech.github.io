# Forwarding page for the old SignBridge address

SignBridge, now called SignMate, moved from `https://shaafrajput06-tech.github.io/SignBridge/` to
`https://signmate-pk.github.io/` (see `docs/DOMAIN.md` in the SignBridge repository).

GitHub Pages does not forward a project site after its repository moves to another account, so these
files do it. They belong in a repository called **`shaafrajput06-tech.github.io`** on the owner's own
GitHub account (that repository's Pages site answers every address under
`shaafrajput06-tech.github.io/`, including the old `/SignBridge/...` links):

| File | What it does |
|---|---|
| `SignBridge/index.html` | the old home page: forwards to the new site, keeping `?query` and `#part` |
| `404.html` | any other old link such as `/SignBridge/asl-selftest.html`: forwards to the same page on the new site |
| `SignBridge/sw.js` | replaces the old offline worker: deletes the old offline copy on returning visitors' devices, removes itself and reloads the page so it forwards |
| `.nojekyll` | tells GitHub Pages to publish the files as they are |

`tests/test_site_address.py` checks that the address in these files matches `shared_data/site.json`.
