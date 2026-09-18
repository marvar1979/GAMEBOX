const CACHE = 'gamebox-v3';
const CORE = [
  './', './index.html', './css/app.css', './js/data-seed.js', './js/app.js',
  './assets/img/gamebox-logo.svg', './manifest.json',
  './json/users.json', './json/projects.json', './json/sprints.json', './json/tasks.json',
  './json/team.json', './json/builds.json', './json/milestones.json', './json/releases.json',
  './json/docs.json', './json/feedback.json', './json/activity.json', './json/notifications.json', './json/settings.json'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
