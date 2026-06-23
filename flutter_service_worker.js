'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ceff699fc867591a2545f158a56fbb92",
".git/config": "b5a50248352b3cfc80089334b7b84018",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cebae15768116f80ff4fd137ed54c0ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc93f8fa360ce0cc33d20a4277a561d2",
".git/logs/refs/heads/main": "bc93f8fa360ce0cc33d20a4277a561d2",
".git/logs/refs/remotes/origin/main": "03eca45594ce977c700156c26b9aacef",
".git/objects/04/4ad56133566acbd74272c3a68b8c8c1463058f": "9022b2558bbad21a8b23af3e79ee9190",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/fa43907b541ab00f0aee853389ac003e139667": "116798b19e74cb71fa61ae2af87bf21a",
".git/objects/0c/5306033ce0a34498d2b9e66457c94dbb1274b1": "20d2e52d80a2d4df26ec5c914f56b2ea",
".git/objects/11/7ac50727879594c68abf1e44c6a82fe503d7eb": "746d9c511ffdb1563a15c9b18d733171",
".git/objects/12/3fcd0917f26b93007b765ff7486b339c2ea126": "b622f200dd704c49b1f858ce068825ac",
".git/objects/19/ae1774980111624bc7de400251a4210040b330": "6743e5d98d30d8d5c45ba32fe52657a1",
".git/objects/1e/c741594f10be6bb6b1d3567526a9d3b3a31dd5": "9cde75d81f9d44d12f8ffd6c65d84939",
".git/objects/20/926b5a9793c3aafcfcd9dea5b86807c7e87032": "5ce7f2aafd4fc1628196c95bc2b782b1",
".git/objects/23/480aed2d17b8165d68ed2eb4dcbcaccee8ebec": "fd8a47c23621aba27d2920a86b354c0f",
".git/objects/2f/36c5cf4d13b964eb65bc50d0ab9c6bd317cb36": "8f1be9328e51aea4287c35c34acdebe6",
".git/objects/32/3f0c15ad8525df486107ac77e0d070feb22e04": "1e9faca39288604cb18974a14e1da2dc",
".git/objects/33/8ac301c9cc59b3f80e6d043a7c7b047ee4763d": "2020f96fa91bbdb226578d3ba93d1b4b",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/df268fd0acb0a51f74a109d0578c444dc1e185": "e620cbf2fda31c63b27abb5120533281",
".git/objects/3b/b33d5f7360f956a229544ba564dc1c7a38ab05": "96d63c08d7eebf6bd68a3aa252cb1c45",
".git/objects/3d/09e94426eaa74622d923acec14a0d95a48a206": "8e43262c7f8511cf448e0ac8136ebd32",
".git/objects/3d/b3a7a00a16cf068f11b5abf70d8dfd3327aa18": "a3d89204be62d3cb93c99487349167be",
".git/objects/3f/3ed3e095c903a6d17db2ae171b4d3a986099d8": "a1e702a90a48b435111636aefeb3b440",
".git/objects/40/07c6781d5e3d20bd49e1162b1fee72bf9b5414": "aa46a929b56d6a22b1d9ac7e62c338d3",
".git/objects/44/e96043699bfbcdab17969799f293670c724529": "8fbf8e0157af3e1451c06e0bbc2aa80f",
".git/objects/45/fbe4f4e91cda0679bb3eab9bcc979cd7161a47": "60d270414163d31f69dd4982c354f487",
".git/objects/47/dade54b33e9038a37f9c8fc2deab254410e2f6": "a1fcae4785dc01b383f7e92f125f4ef5",
".git/objects/49/208f74be3fd046f858302472581d17788d4aad": "1423741832c101374752c98d8b3c38e7",
".git/objects/49/6059448b349971a8347861713d52909e1a4204": "eb187f722e9a4d278f067a3c029dbf23",
".git/objects/4b/020fd7e189039f54f78bde018ea2bf765b462b": "94c0876d1694bd110a2567ae6c38d56d",
".git/objects/4b/ab2cea260a812dec530a690a43ecf579f63723": "e1557997c853de5682e7a7376df3a5af",
".git/objects/4d/3f1977d0e117a333e1dc84a820e390f9331241": "f8dc0cf7ae8e59f250102d5595c0acbd",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/8356f0d7e5e7570d4ed24a318b47e37d95c335": "7f2ca33265800c6598dee32984a901a4",
".git/objects/59/85fad6d159b3d7d2b4988d23d469fbd1c82527": "9ad4298f41f298505610f4f7c37f4456",
".git/objects/60/95705ed5cbd5eeabe8a2c90656ffd308d20669": "9d505a0d10ed3f3649e0fa53019f53cb",
".git/objects/60/cdd8ad61f752dcf5e51ff9cbd2643ccc4bd124": "ccee19cc02b9951d91724e13511cb929",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/882feda0751b9de1afa3cda20023054eee273c": "0ba220034766ef69aa567418584057d1",
".git/objects/6b/013021629b38178b2c466d5957d81e7580f394": "add09eca4323f91aeb77181417f793d8",
".git/objects/6b/78f622d72367a040d2833e5ef265b2bb5c9f27": "9649381036bd0e2498aac8d345e09860",
".git/objects/6d/0f7279d788979e1ecd5c80e90db14fc0a475c1": "0e3a3e15e10c63858b70a2f464dbc6de",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/19bcd8ba6524caa1cecd0d84b3e1ef37e7646d": "fbb69a494a040a198baea527e72a614c",
".git/objects/72/609279a0f0d1ac2b2e636ae742e7cb8297980a": "3a92644ed2a41eeb2ef4694d25ec9d28",
".git/objects/72/f21397dc7e0cf2802d982c62d25a7f3fc0ae0d": "27eb11e710604caa30494ec274570c5a",
".git/objects/74/b51b56008a024716682191b49a0c5fb5ff4a42": "bd72b78dc3bcf74933f036e8b9b48981",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/9857f121c1324b4f94fb0112e5b3ec54d9a444": "ef6749e75abb117149fd2a7d448c0a3f",
".git/objects/7c/ea8bb941a0bad1f3e1b4e32fdb6de3600f6fb4": "e52197f57315bfbe10f31ebc6573c9e2",
".git/objects/7c/fe189c249794e2fab1754a8f6d35fcd4d25b60": "c58ffd905cf303b185cb82ff6cc2072e",
".git/objects/7e/92ac784b51ea84d55b19758bc5ba449c5ee1cb": "87b09dad233291690bf4e27c6efa47f2",
".git/objects/82/ebebb48749dac9a955ad6832f883b458715932": "82674acdd8ed8f89a671fe83dbf9a49d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/ae38902294830d3e0436c4d3815acabc270dd9": "174a31fac7773ff97d0d31d394e7f0ab",
".git/objects/87/90e937e16cde88090e2fc80b5b83260f91eab7": "7c6988cd31529b7d2f77f4efd93c2942",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4388b2e60cc9e1368a7028487c67d8802ed0b6": "8cc083ec8770cd2e0e093342bcbb4540",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/e940a6eb6f898f66a2deab9b5619c6ea51fb23": "d52f138ec8fe6abf901ad6b3706bebfb",
".git/objects/91/151512d9f1bb995da6bbf055d6f4755952450e": "39b7a6fefba95989437a6c9faea4a375",
".git/objects/91/b9500cafca8c4b08b361278bd8449ad8f52942": "f2b4cadd459e89ef3f45a3d666d6f689",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/74278f976881ad8067a4baf544cb44d0bbc305": "662a3125538de8e987f9f457086ce454",
".git/objects/9b/9096c10795c608404f9b7e5b31b3d0fc887366": "cb7b0b4aa87f3343f084cc9f29d812e3",
".git/objects/a0/445a5f812042a0fda509ad6add25fac4d04256": "469cc0ef4f41e55c0b850f140e1a882d",
".git/objects/a1/0c21217df375b569a10e663e8588bbbdfeeefc": "70504cf487760cbcc46693576a35006f",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/f78e139f3cc02a4bbdaf0ed956bb7c2f93bcb2": "6eb63c495a35e56d95c2d9556b3ec87a",
".git/objects/a8/9ca5053c36ac65f438ac0e66e605dc944f4063": "ed657b6e804b28a6a5bf1a8f07050833",
".git/objects/a8/d87bde7bf0a50e97026cfc6deeb595389d0a8c": "15e09cfafd231c14329fa1a44a3e25d2",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/efe99b082193bd6ff9e744595f7faed02ea881": "1794d77a3ec11aa52233282e2d112241",
".git/objects/ae/a9a15e59bebdd247a2ba8c1d11241630d38e48": "8d77aa9d87c5b765ea6792f741b4003a",
".git/objects/af/d6aa6c3638b2b117b3111789122d9d392d4dc5": "3286ef0240aa2e807deeae4407a6542b",
".git/objects/b3/960bdf194473df21dd615da740b460bda40be5": "8653bf9e97baa3b3f0ec86c6d4dec689",
".git/objects/b6/c9c0ddb3d5ff01a48c0853c60be91cfacd543e": "b6e61f1658ef590a4dba00e2e44cb9e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/3f4533a0bc073878f4a1b4e4382fd58523028a": "09e2a8fe7979ee26aa4c32c92bc34073",
".git/objects/ba/077378fdb834a80295aeb9eb909cf81c40e219": "5ccbdc8df9778e74d277d937b24bb95a",
".git/objects/bb/de9f601f3768bc3274b6a8c169ccb109183939": "85f6d16740b0c84faaf6251f89cc30d4",
".git/objects/bc/b92079f5103fcd4751ab2211cc604ffe21fc9b": "30f8a9e65583be0fe40550648fc137b2",
".git/objects/be/909cd4d7123e20c18d0eaa17247ea952ffbee6": "c985161973996c9e9770d36c7bce6256",
".git/objects/c0/f8ad5a0251af3c7a3c254f6ab0a4ca8ef25850": "efeed286adf3ce40a04a7889f6b08cc9",
".git/objects/c7/3e13515d1319c13ac7795af82c814ba4f208f2": "3bc61c55d0f505640c9cd68b2ea6be11",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/ff225ecb9d65813be017a57421a611f5e53e44": "1fcab0ad8009bd3d6702bb5a97e43b15",
".git/objects/cd/d8f083c1f5928ff3361f8cda4d3fc9462cbe89": "ea1d8aac1a81eff7322902d52bee4aa4",
".git/objects/ce/08d852b40ee614612c2f6c2b0ef707797d0d53": "634e1464250e16cb803faab449cb2602",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/70e11beda27c94ad63fcee89c4b6c6e227980f": "630b0684960da3b4aea755331157c29d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8c2e973b782ba771854500f78507a38f1c0e49": "4c4c61193c4cdb95abddf958b0f1c46e",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/c37b87148bee461983056d5e81b61f6860b094": "cffe38d64ab55fae55b8818bffdf3897",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/281e4129197fffdf60151b00fe2581c1221c1d": "5f4d9efb959aeea475fa1e211b7862ea",
".git/objects/ee/e47bad08fe88c0061ae556aae4c009c95a9b00": "0317286484b97a12aaed579d2591f31a",
".git/objects/ef/1ac4b419fe1c0198f17607fe95157b91234176": "09a9af45f4286e53206730102618d12f",
".git/objects/f1/b9eae29f169c0e5ca975d5b28a854e2d862de2": "c55cebde31736b0980c6bb4f788b37e0",
".git/objects/f2/aaffbd59985c43d5707f223b2e5dce66dada41": "130a6891d4510abca1f1d2418346cad0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/59f0dc5dad95c7dd327619e723859692ab9cda": "409dad7b41cc17de04e9889806ad4b4b",
".git/objects/f4/d3e44196a46f3465095ff35ddaccb384902688": "e403954b374f7025e3bbc469c45910dc",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/ec4a7969a50b52e12e452ce8032cd3a126dc31": "94690cbe45f868efaa0d154d676acaac",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/d526cb8614044a9cfb0d15c88adfefccf4bd42": "8c57fe214b7772a7eac7894722a55d1e",
".git/objects/ff/05b33e39c53e65f97d0c92eebc6360288a97c3": "4ce61f03b7ac8b76e177b7acfb5e15dc",
".git/refs/heads/main": "f84e0850da2ea5a5a187de480f7b839e",
".git/refs/remotes/origin/main": "f84e0850da2ea5a5a187de480f7b839e",
"assets/AssetManifest.bin": "fc443922a44d8b252752820bf212668b",
"assets/AssetManifest.bin.json": "f07dd387ef6e39bfd81c3a65a7cf9e94",
"assets/assets/NotoSansJP.ttf": "f11bfc28629ade532e6e551e69d444f9",
"assets/assets/test_label.jpg": "0a8ebc4cd89454762b2bf3ed0f498ded",
"assets/FontManifest.json": "d01be8db7af3a4220cc42d7c61dbcc85",
"assets/fonts/MaterialIcons-Regular.otf": "4c9576aeb94a3dd4aaa090ebe6e86fec",
"assets/NOTICES": "7994996dfab463bc963b605d88903eda",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "52d7def20b80e8271bfa6812a8e034b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b871020f403e60f22063efbf560e362b",
"/": "b871020f403e60f22063efbf560e362b",
"main.dart.js": "2281d3d79f7d185e91c9c160fdd2ab63",
"manifest.json": "b33de9ee302404be8a894ac174bff893",
"passkeys_bundle.js": "b9f30ee935fbcf6f31d4678392478447",
"version.json": "88aabeb0bff36ff886d5d89cf91120d8"};
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
