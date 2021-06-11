'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.json": "8124010888320c2d5e0ee811d115be7f",
"assets/assets/app_icons/bash.png": "de070002c6eb333c3bd2f0338616eb1e",
"assets/assets/app_icons/chrome.png": "eb4b82902fc47531701c4afd55b3ff7b",
"assets/assets/app_icons/gedit.png": "5bf59fed3883ce94b737fbf534d06c5b",
"assets/assets/app_icons/gnome-control-center.png": "1b68649c0534c3caa633702e57ab2f35",
"assets/assets/app_icons/profile.png": "c0827cc5def3a760982e437f74e524f6",
"assets/assets/app_icons/spotify.png": "6ba69164251bf55968f69532889bd648",
"assets/assets/app_icons/todolist.png": "ae36f8037a3a2b1491ec7c6184d57118",
"assets/assets/app_icons/vscode.png": "19f8f6b532ff362479a60765da0836f0",
"assets/assets/config/system_config.json": "819f54bc9a39804e23fad83440b0ca7f",
"assets/assets/social_media/code.png": "2bd0bc5fb8b198b4a24e988b08db0864",
"assets/assets/social_media/email.png": "cded0395504144daffc7a523c5f5892c",
"assets/assets/social_media/github.png": "2b160f659b654f00586c97d88b41639c",
"assets/assets/social_media/instagram.png": "f15920259876d6ffe48b26a00aa28a7b",
"assets/assets/social_media/linked.png": "0b6a1524f9dde2b5580c4546ebbb362f",
"assets/assets/status/2.svg": "3ae5ba5e6a94fbcadb76b54bfe0f0dc8",
"assets/assets/status/about.svg": "c93b3176a4a425fd59391288b277c255",
"assets/assets/status/audio-headphones-symbolic.svg": "79ca66ebb26d2c1375f58b02f5d026ad",
"assets/assets/status/audio-volume-medium-symbolic.svg": "e96fa0568f74373aaff179f1dd01d16e",
"assets/assets/status/battery-good-symbolic.svg": "9ce48685fa93c4cf73ebe06af36a2755",
"assets/assets/status/bluetooth-symbolic.svg": "71a56a4f03f5462cac4951c76b6e5e30",
"assets/assets/status/changes-prevent-symbolic.svg": "c4154673de71e65d835a514438a6c27b",
"assets/assets/status/display-brightness-symbolic.svg": "37c127e056bd0f639a40de7220709f79",
"assets/assets/status/network-wireless-signal-good-symbolic.svg": "2a0828387a975612d1eb25e2e5c1fded",
"assets/assets/system/folder.png": "8c772f7d6ec2b87d2182b92a58653eec",
"assets/assets/system/folder.svg": "d1cefdb821f710119d691f49e676f597",
"assets/assets/system/js.png": "845442c895006fe4e578c7477c2dc1e6",
"assets/assets/system/logo.png": "6acde00f6572710498a471bb00880fd0",
"assets/assets/system/php.png": "b75983d05251a18a62d8580ee0e5be8b",
"assets/assets/system/zip.png": "b8142b5ab72c5f100a283097b1093059",
"assets/assets/wallpapers/minified/wall-1.jpg": "05f4d3dd2abf1a1ea9f6a60347d6c4d4",
"assets/assets/wallpapers/minified/wall-2.png": "e8e46ed2a71c8b96d47b6c60918e75e4",
"assets/assets/wallpapers/minified/wall-3.jpg": "47281cf2c397260adbdb3937cdc9ac8c",
"assets/assets/wallpapers/minified/wall-4.jpg": "2c5bd8298daf328e2864c7f689567e33",
"assets/assets/wallpapers/minified/wall-5.jpg": "86037e64484142b53ef8564e11f2a4bb",
"assets/assets/wallpapers/minified/wall-6.png": "09ae4ab7d9d6ad9823d13a05991c17aa",
"assets/assets/wallpapers/minified/wall-7.png": "879cc106e0018c07b86ae35eb5571c25",
"assets/assets/wallpapers/minified/wall-8.jpg": "706d135b848fd9d9c9e61334fee9a8e4",
"assets/assets/wallpapers/wall-1.jpg": "05f4d3dd2abf1a1ea9f6a60347d6c4d4",
"assets/assets/wallpapers/wall-2.png": "43a838ccbe12320c0edbba984505ba50",
"assets/assets/wallpapers/wall-3.jpg": "1d172858fdfc17298e7581d25d3e3037",
"assets/assets/wallpapers/wall-4.jpg": "c205d059532d20a8fb00a56fcb425c2a",
"assets/assets/wallpapers/wall-5.jpg": "d65910410148dfd878d3bab0f478cbeb",
"assets/assets/wallpapers/wall-6.png": "17155907a7074f49195b4dc2bde36a89",
"assets/assets/wallpapers/wall-7.png": "7165377778d990dbfb4299680c3d111c",
"assets/assets/wallpapers/wall-8.jpg": "6ef6d3cbed31d853dfb43e41e1700ec8",
"assets/assets/window/window-close.svg": "cb4942335e25e2fb7141fbda5b0260b0",
"assets/assets/window/window-maximize.svg": "bbab36ffd9acebe52ee88d28d459cfdb",
"assets/assets/window/window-minimize.svg": "a20648c54ba260562dc684c66ecc2431",
"assets/assets/window/window-restore.svg": "d5d7824e73286a244e987384146738c5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "c4cac0b724ea631107c2a0d806ed395d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"battery.js": "40df8d8d91dd77e9c7448a2ad18608c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/loading.json": "2bd2e27c457c4444d120322f4a1e21b2",
"icons/logo.png": "6acde00f6572710498a471bb00880fd0",
"index.html": "e7686a3ecc4967414d24f2221389767a",
"/": "e7686a3ecc4967414d24f2221389767a",
"main.dart.js": "f4b9ad65406e1d9d1c187544fe56d8ff",
"manifest.json": "7eb38060f4e173098d93e51345687ebf",
"version.json": "b56b9c085297ce1d4241706a823f2c10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
