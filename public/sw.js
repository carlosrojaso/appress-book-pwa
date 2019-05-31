
const currentCache = 'cache-v1.1';

const files = [
    "favicon.ico",
    "icons/icon-128x128.png",
    "icons/icon-144x144.png",
    "icons/icon-152x152.png",
    "icons/icon-192x192.png",
    "icons/icon-384x384.png",
    "icons/icon-512x512.png",
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "index.html",
    "manifest.json",
  ];

  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(currentCache).then(cache => {
        return cache.addAll(files);
      })
    );
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== currentCache
        }).map(cacheName => caches.delete(cacheName))
      ))
    );
  });
  