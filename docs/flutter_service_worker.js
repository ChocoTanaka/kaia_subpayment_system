'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"@linenext/dapp-portal-sdk/build/index.cjs.js": "9189d16a18c9dba33e3402c8d7ae063a",
"@linenext/dapp-portal-sdk/build/index.es.js": "64493d2ffac92db9d46edcf0544205f7",
"@linenext/dapp-portal-sdk/build/src/core/browser/BrowserGuideUI.d.ts": "d4e5aca7fd15ca06246c1fcb8f3db761",
"@linenext/dapp-portal-sdk/build/src/core/client/BalanceApiClient.d.ts": "7d4fe911d2639ec3e172bb02f006b1bc",
"@linenext/dapp-portal-sdk/build/src/core/client/ChainNodeRpcClient.d.ts": "dc108060b3da560e5a2bd26c45c73879",
"@linenext/dapp-portal-sdk/build/src/core/client/DappClient.d.ts": "1058fdd8f9e87c70d6e6e51b257101a3",
"@linenext/dapp-portal-sdk/build/src/core/client/EventClient.d.ts": "c24b161f17642133de99b5bb8490d559",
"@linenext/dapp-portal-sdk/build/src/core/client/MetricApiClient.d.ts": "10bfc5196cea76f1abe6336af5596258",
"@linenext/dapp-portal-sdk/build/src/core/client/NoticeApiClient.d.ts": "a08e74603c5368ba939a413faf4c0810",
"@linenext/dapp-portal-sdk/build/src/core/client/PaymentClient.d.ts": "24edaa2d88b6918bc5dbf1cf4db90f73",
"@linenext/dapp-portal-sdk/build/src/core/client/RelayRequestClient.d.ts": "c88ee2e198ea71a5702a6f02f202f60a",
"@linenext/dapp-portal-sdk/build/src/core/client/WalletConnectClient.d.ts": "676fb654dd1b6d3b0a5ea12199da09bf",
"@linenext/dapp-portal-sdk/build/src/core/communicator/CommunicatorBase.d.ts": "b0798f588cc241700f40c5918e2e229e",
"@linenext/dapp-portal-sdk/build/src/core/communicator/MobileWalletCommunicator.d.ts": "8c34128c8a72c3e890543835d07910b3",
"@linenext/dapp-portal-sdk/build/src/core/communicator/SubLiffCommunicator.d.ts": "05a5a28a6f856884ab1837a5bd676713",
"@linenext/dapp-portal-sdk/build/src/core/communicator/WebWalletCommunicator.d.ts": "6953aa8030bebff369849b3af4c3e9d8",
"@linenext/dapp-portal-sdk/build/src/core/config/config.d.ts": "511e4ff6c6196d99316e6ac24a500805",
"@linenext/dapp-portal-sdk/build/src/core/const.d.ts": "3f487f2c9b8e1bcc00b871656821ca11",
"@linenext/dapp-portal-sdk/build/src/core/dto/EventDto.d.ts": "c771398ed94b458e15a77e224dccb7ce",
"@linenext/dapp-portal-sdk/build/src/core/dto/NoticeDto.d.ts": "a381ccfc399fd73895f1662a9c6d1e21",
"@linenext/dapp-portal-sdk/build/src/core/dto/SdkDappInfoDto.d.ts": "c4e443eea96cea048e7070efc03b3d18",
"@linenext/dapp-portal-sdk/build/src/core/enum/BannerType.d.ts": "2f866fe25c95bc5a5671f2453dacc227",
"@linenext/dapp-portal-sdk/build/src/core/enum/ProviderType.d.ts": "c045e7cea5047437ab87ddce374bb9a4",
"@linenext/dapp-portal-sdk/build/src/core/enum/WalletType.d.ts": "39806f560123874cf181a036536aa4c6",
"@linenext/dapp-portal-sdk/build/src/core/enum/WalletTypeEnforcement.d.ts": "6045dafef71b4cef0726674afb75a731",
"@linenext/dapp-portal-sdk/build/src/core/exception/Exceptions.d.ts": "b77a8242314c9fc556161a188c4dc6c9",
"@linenext/dapp-portal-sdk/build/src/core/exception/LongPollingTimeoutException.d.ts": "f7b287aceddecc8accb4893debd329f2",
"@linenext/dapp-portal-sdk/build/src/core/message/ExtensionMessage.d.ts": "9ecab0a90b8b3342c3b60e74bc70e4b3",
"@linenext/dapp-portal-sdk/build/src/core/message/LiffEventMessage.d.ts": "a465c8b597b62ec0f848eb958ece34f7",
"@linenext/dapp-portal-sdk/build/src/core/message/PaymentMessage.d.ts": "6f662cda68f6023ccf7026a67c57eb2b",
"@linenext/dapp-portal-sdk/build/src/core/message/RpcMessage.d.ts": "aa5d54c2a4c529599d9f59b7ed8591c7",
"@linenext/dapp-portal-sdk/build/src/core/model/BureaucracyModel.d.ts": "f8566cbebe590bb19038ee8acd9c31f5",
"@linenext/dapp-portal-sdk/build/src/core/popup/BannerEventListner.d.ts": "beeff67d98d2d89ac773fea240742a58",
"@linenext/dapp-portal-sdk/build/src/core/popup/ClickEventListener.d.ts": "19e1a692c5e2767fb178f421c62fb9d3",
"@linenext/dapp-portal-sdk/build/src/core/popup/NoticeBannerEventListener.d.ts": "558ec34b07cf564a005743b304072bbe",
"@linenext/dapp-portal-sdk/build/src/core/provider/EventProvider.d.ts": "f6fc65e32c044232fb658034fcdfe21b",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/BitgetExtensionProviderHandler.d.ts": "dcb7fcbffa1fb37e073601577da844c1",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/EventHandler.d.ts": "42399a1d47668e19aa153a9b5b4699be",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/ExtensionProviderHandler.d.ts": "0c68759d8c0468e1e76238747ca53dac",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/interface.d.ts": "fcd8aef39b1a68c5bed7cf110d209272",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/KaiaMobileIabHandler.d.ts": "69cb114f7ccd0e25c316bd82558a9191",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/OkxProviderHandler.d.ts": "a43aa6faeb684e7c9ef998f357c75488",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/PaymentProviderHandler.d.ts": "93e9f601ad9f6477ceacd255b33311ab",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/RelayProviderHandler.d.ts": "062672eb10629cefb78c4e4118fa550a",
"@linenext/dapp-portal-sdk/build/src/core/provider/handler/WalletConnectProviderHandler.d.ts": "fc1949ee814af98e06b5641d3eb173ac",
"@linenext/dapp-portal-sdk/build/src/core/provider/interface.d.ts": "23ab4fbcdbafdd7ad4a7bc41f438b6be",
"@linenext/dapp-portal-sdk/build/src/core/provider/InternalEventProvider.d.ts": "56a89974ee3ff27a9178c187548ec058",
"@linenext/dapp-portal-sdk/build/src/core/provider/PaymentProvider.d.ts": "faf204f71fff3f9cb65b34b2682552b7",
"@linenext/dapp-portal-sdk/build/src/core/provider/SdkWalletProvider.d.ts": "87ef13d0f64e6450e1cbf14fe7fdf43a",
"@linenext/dapp-portal-sdk/build/src/core/provider/WalletProvider.d.ts": "1e769849ad7528a3099accb94f5bc8ff",
"@linenext/dapp-portal-sdk/build/src/core/service/NoticeService.d.ts": "d6880cc03050042764d483a9ec06fc3b",
"@linenext/dapp-portal-sdk/build/src/core/service/TrackingService.d.ts": "fac1fd2c3d8eb55f73c1ac1e03812c9b",
"@linenext/dapp-portal-sdk/build/src/core/storage/SdkCookieStorage.d.ts": "58a3536d3fb71be3f34eefe2356fb744",
"@linenext/dapp-portal-sdk/build/src/core/storage/SdkLocalStorage.d.ts": "b512dda7041a7e955dd2e2b7be915d5e",
"@linenext/dapp-portal-sdk/build/src/core/util/BitgetExtensionUtil.d.ts": "f2b385d35ae86c2590db54f93e150dd5",
"@linenext/dapp-portal-sdk/build/src/core/util/BufferUtil.d.ts": "ae17710ccec17d189c6da3e31c03c4b7",
"@linenext/dapp-portal-sdk/build/src/core/util/bureaucracy/BureaucracyUtil.d.ts": "eb2a26c03f3027142164ba5a1080feb7",
"@linenext/dapp-portal-sdk/build/src/core/util/ExtensionUtil.d.ts": "9adc360de445a2f86e6d9ce67d03fae4",
"@linenext/dapp-portal-sdk/build/src/core/util/LiffUtil.d.ts": "970e31891db4079798928cb77d606ac1",
"@linenext/dapp-portal-sdk/build/src/core/util/MethodNameUtil.d.ts": "6440934dddac2c1906ea2dcade5a09c6",
"@linenext/dapp-portal-sdk/build/src/core/util/MethodPolicy.d.ts": "244d2ee675e55df63cf76b4cedcb0895",
"@linenext/dapp-portal-sdk/build/src/core/util/NumberParse.d.ts": "dc720792f55058ee22eeea3d9b3b0afb",
"@linenext/dapp-portal-sdk/build/src/core/util/PriceUtil.d.ts": "95bf5b1b8ac5c75d7bbba9c051d4db95",
"@linenext/dapp-portal-sdk/build/src/core/util/UserAgentUtil.d.ts": "b7cc3ffb702a09b4413dd5b182a5a715",
"@linenext/dapp-portal-sdk/build/src/core/util/Web.d.ts": "9ee0577afeab6e4da8ecb29dee4eadb2",
"@linenext/dapp-portal-sdk/build/src/core/wallet/IframeWalletSelector.d.ts": "59bd15a373f765f8a04e3509bf5f4044",
"@linenext/dapp-portal-sdk/build/src/core/wallet/interface.d.ts": "434f051f3023d01e448585e1ef0d00c0",
"@linenext/dapp-portal-sdk/build/src/core/wallet/LiffWalletSelector.d.ts": "e8fce5605b75631ce6f88d3797c4414f",
"@linenext/dapp-portal-sdk/build/src/DappPortalSDK.d.ts": "27e08bfc91e3badaa94d1a55dffbf476",
"@linenext/dapp-portal-sdk/build/src/error/Error.d.ts": "1037a9668603afa4e8c1368b17be6538",
"@linenext/dapp-portal-sdk/build/src/index.d.ts": "fbcbe247512a8804d52aabe3c41c33fb",
"@linenext/dapp-portal-sdk/build/src/ui/ClickEventEmitter.d.ts": "55fd1d390cb734c07e49809007708569",
"@linenext/dapp-portal-sdk/build/src/ui/EventBanner.d.ts": "a7395238069691c35f8cc0b769ebabd8",
"@linenext/dapp-portal-sdk/build/src/ui/NoticeBanner.d.ts": "c5ad0f497be1565b5f1aa84f84ac5bf9",
"@linenext/dapp-portal-sdk/build/src/ui/TokenApprovePopup.d.ts": "ad4d3eb2af13d2bacaa89e94d7dd5022",
"@linenext/dapp-portal-sdk/package.json": "a84944ec22e3f97141c2f0355f2374a4",
"@linenext/dapp-portal-sdk/README.md": "ab538aa33e79428672263ff869ac896c",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f26ff0e2ba1f6734313c51263c5fdaa5",
"assets/NOTICES": "de88e5a1327e01c9b9ddba4ff63cc259",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "c5797e5e6565b7c6e9af4d701eaf071c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7a343432f56a0bf0a005f67b774d7e6c",
"icons/unifi_Stable_192.png": "cdcdc23e2c2a654d29a13d5cfc13edde",
"icons/unifi_Stable_512.png": "9bbe104642f672f9295379fdeeda23ef",
"index.html": "18e8efef8841d929f956b19baaa6154b",
"/": "18e8efef8841d929f956b19baaa6154b",
"main.dart.js": "47479f6cad57b93cffd81586311a9511",
"manifest.json": "0eda926965d31196bfefaa8e011ffa74",
"version.json": "334c4cdc58fbd192da708b7c2bad3869"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
