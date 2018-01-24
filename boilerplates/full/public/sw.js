(global => {
  'use strict';

  importScripts('sw-toolbox.js');


  // Ensure that our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));

  toolbox.router.get('/4.6/*', toolbox.cacheFirst, {
    cache: {
      name: 'arcgis-jsapi',
      maxEntries: 100,
      maxAgeSeconds: 1200
    },
    origin: /js\.arcgis\.com$/
  });
})(self);