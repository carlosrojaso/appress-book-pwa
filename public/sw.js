
const currentCache = 'cache-v1.0.0';

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
    let version = 'v1.0.0';
    event.waitUntil(
      caches.keys()
        .then(
          cacheNames => {
            Promise.all(
              cacheNames
                .map(c => c.split('-'))
                .filter(c => c[0] === 'cache')
                .filter(c => c[1] !== version)
                .map(c => caches.delete(c.join('-')))
            )
          }
        )
    );
  });

  self.addEventListener('fetch', event => {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );   
  });