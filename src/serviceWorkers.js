// --------------
// Configs
// --------------

const currentCache = 'cache-0';

const filesFromCache = [
  '/index.html',
  '/bundle.js',
  '/page2.bundle.js',
  '/page3.bundle.js',
  '/page4.bundle.js'
];

// --------------
// Pre-cache
// --------------

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(currentCache)
      .then(cache => cache.addAll(filesFromCache))
  );
});

// --------------
// Removing outdated caches
// --------------

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
        cacheNames
          .filter(cacheName => !(cacheName === currentCache))
          .map(cacheName => caches.delete(cacheName))
    ))
  );
});

// --------------
// Cache falling back to the network
// --------------

// This gives you the "Cache only" behavior for things in the cache
// and the "Network only" behaviour for anything not cached

self.addEventListener('fetch', event => {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(res => {
      // Fall back to network
      return res || fetch(event.request);
    }).catch(() => {
      // Generic fallback:
      // return caches.match('/offline.html');
    })
  );
});