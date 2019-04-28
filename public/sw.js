/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "ffaadd7090ccc9894c343dc6edcf7d63"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "4eb27c4935821238c7bc0ca80a20b63d"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "7b77bf7ba95c6157993e8f8d576cbe27"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "32c1b8e4c143af7fd3ea577946dc133a"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "13c5a5b2b57f768a89cfc71cce51e6bd"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "577afa5f8be8a0be114f8f83e14bc73e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "6f7bf21f0a3ddb87395d77d0f77432aa"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "60c33f9b23cc43fe1d884a4dfe7b6032"
  },
  {
    "url": "index.html",
    "revision": "ddfe356a2e66115d4924f9e5a1294ba2"
  },
  {
    "url": "manifest.json",
    "revision": "2c956a55ebdeb23295c6ad907fc29b4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
