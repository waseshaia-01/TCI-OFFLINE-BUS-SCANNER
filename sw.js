const cacheName = "qr-offline-cache-v1";
const filesToCache = [
  "/index.html",
  "/dashboard.html",
  "/html5-qrcode.min.js",
  "/sw.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
