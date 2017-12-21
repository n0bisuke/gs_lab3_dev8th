
//ブラウザがservice Wokerをサポートしていたら
// if('serviceWorker' in navigator ) {
//     navigator.servieWorker
//         .register('/sw.js')
//         .then(function () {
//             console.log('service worker running');
//         });
// }

self.addEventListener('install',function(event) {
    console.log('[Service Worker] installing service worker...', event);
});
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] activating Service Worker...', event);
    return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] fetching Service Worker...', event);
    // event.respondWith(fetch(event.request));
});