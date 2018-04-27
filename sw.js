self.addEventListener(install, event=>{
event.waitUntill(
caches.open(v1).then(cache=>{
return cache.addAll([
'index.html',
'hanuman/hanuman.html',
'hanuman/main.js'
]);
});
)
});
