// locahost:4002
self.addEventListener('fetch', function(e) {
    //if (e.request.url.indexOf('https://api.github.com') !== -1)
    e.respondWith(
        caches.open('my-site-sw-vs-001').then(function(cache) {
            return cache.match(e.request).then(function(response) {
                return response || fetch(e.request).then(function(response) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});