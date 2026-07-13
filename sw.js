const CACHE='juntosve-v5';
const ASSETS=['/','/index.html','/api/recursos.json'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  if(e.request.url.includes('earthquake.usgs.gov')
    ||e.request.url.includes('chart.googleapis.com')
    ||e.request.url.includes('api.qrserver.com')
    ||e.request.url.includes('unpkg.com')
    ||e.request.url.includes('docs.google.com')
    ||e.request.url.includes('script.google.com')){
    return;
  }
  e.respondWith(
    fetch(e.request).then(res=>{
      const clone=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return res;
    }).catch(()=>caches.match(e.request))
  );
});
