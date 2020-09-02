                        importScripts("/web-dev/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/web-dev/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/web-dev/index.html","revision":"03eee36162dce5a07c79b5eeaec7d142"},{"url":"/web-dev/javascript/nodejs/2019/03/23/welcome-to-jekyll.html","revision":"6eb3a57e338a078d1b3a211ce0cd68ad"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: 'programacao-internet-i',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
  /\.html$/,
  workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
  /assets\/(img|icons)/,
  workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
  /^https?:\/\/cdn.staticfile.org/,
  workbox.strategies.staleWhileRevalidate()
);
