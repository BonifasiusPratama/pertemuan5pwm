self.addEventListener('install', function(event) {
  console.log('pratamanugraha: berhasil...');
  // TODO 3.4: Skip waiting
  self.skipWaiting();

});

// I'm a new service worker

self.addEventListener('fetch', function(event) {
  console.log('Fetching:', event.request.url);
});


self.addEventListener('activate', function(event) {
  console.log('Service worker activating...');
});
