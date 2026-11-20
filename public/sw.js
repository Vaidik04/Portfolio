// Sovereign Offline Service Worker for Vaidik Gandhi Portfolio
// "Cloud goes down. Business doesn't."

const CACHE_NAME = "vaidiktech-sovereign-v1";

const PRECACHE_ASSETS = [
  "/",
  "/projects",
  "/architecture",
  "/lab",
  "/proof",
  "/about",
  "/credentials",
  "/contact",
  "/assets/vaidik_authentic_portrait.jpg",
  "/assets/vaidik_authentic_square.jpg",
  "/assets/vaidiktech_symbol.svg",
  "/icon.svg",
];

// Install Event: Precache Critical Shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).then(() => self.skipWaiting());
    })
  );
});

// Activate Event: Clean Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate with Offline Fallback
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore cross-origin non-GET or browser extension schemes
  if (!url.protocol.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and request is an HTML navigation, serve cached root or fallback
          if (event.request.mode === "navigate") {
            return caches.match(event.request).then((page) => page || caches.match("/"));
          }
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
