// Guarda la app en el teléfono para que abra sin señal.
const CACHE='control-obras-v1';
const FILES=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('control-obras')&&x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=e.request.url;
  // Datos de Supabase siempre en vivo, nunca desde caché
  if(u.includes('supabase.co'))return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&(u.startsWith(self.location.origin)||u.includes('fonts.g')||u.includes('cdn.jsdelivr.net')))
    {const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return res}).catch(()=>caches.match('./index.html'))))});
