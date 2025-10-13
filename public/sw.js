// Simple service worker to prevent 404 errors
// This file exists to handle requests from browsers that may have
// previously registered a service worker for this domain

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  // Claim clients to ensure the service worker is controlling them
  event.waitUntil(self.clients.claim());
  
  // Unregister itself to prevent future 404s
  self.registration.unregister()
    .then(function() {
      console.log('Service worker unregistered');
    })
    .catch(function(error) {
      console.log('Error unregistering service worker:', error);
    });
});