// Sovereign Offline Service Worker for Vaidik Gandhi Portfolio
// "Cloud goes down. Business doesn't."

const CACHE_NAME = "vaidiktech-sovereign-v4";

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

// Activate Event: Clean Old Caches immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-First for Navigation & Scripts, Cache-First for static offline assets
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (!url.protocol.startsWith("http")) return;

  // HTML navigation and JS chunks: Network First, fallback to cache
  const isPageOrScript =
    event.request.mode === "navigate" ||
    url.pathname.startsWith("/_next/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".json");

  if (isPageOrScript) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (event.request.mode === "navigate") {
              return caches.match("/");
            }
            return new Response("Offline", { status: 503, statusText: "Service Unavailable" });
          });
        })
    );
    return;
  }

  // Static media / assets: Stale While Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
