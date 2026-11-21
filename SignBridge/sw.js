// Replaces the old SignBridge service worker at this address (it was registered from /SignBridge/sw.js).
// Browsers check this file for updates, so returning visitors get this version, which:
//   1. deletes the old offline copy of the site (caches named "signbridge-...", up to 120 MB),
//   2. removes itself,
//   3. reloads open old pages, which then reach index.html here and forward to the new address.
// It stores nothing and sends nothing anywhere.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith("signbridge-")).map((name) => caches.delete(name)));
    await self.registration.unregister();
    const pages = await self.clients.matchAll({ type: "window" });
    for (const page of pages) page.navigate(page.url);
  })());
});
