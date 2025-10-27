// sw.js

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("tym-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./LOGOTYM.jpg",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
