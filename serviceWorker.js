const staticLadiesOfLux = "ladiesoflux-v1.3.0";
const assets = ["/", "/index.html", "/css/main.css", "/img/icon.png"]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(caches.open(staticLadiesOfLux).then(cache => {
        cache.addAll(assets)
    }))
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
    }))
})
