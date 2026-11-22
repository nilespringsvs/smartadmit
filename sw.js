const C="nsvs-v1",A=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","https://cdn.tailwindcss.com/3.4.17","https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(A.map(u=>c.add(new Request(u,{mode:u.startsWith("http")?"no-cors":"same-origin"}))))));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{if((r.ok||r.type==="opaque")&&!e.request.url.includes("tile.openstreetmap")){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}return r}).catch(()=>m)))});
