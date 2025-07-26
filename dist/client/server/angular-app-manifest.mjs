
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/regist"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JTDBXB23.js",
      "chunk-FUGWQEWC.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDARGXQP.js"
    ],
    "route": "/dashboard/acerca_de"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VYZ3CTDW.js",
      "chunk-FUGWQEWC.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5552BZAV.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-STZP7HHB.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-INITBZIE.js"
    ],
    "route": "/dashboard/settings"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7UHHMFG3.js",
      "chunk-FUGWQEWC.js"
    ],
    "route": "/dashboard/tasks/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MOKXPO3O.js",
      "chunk-FUGWQEWC.js"
    ],
    "route": "/dashboard/edit_tasks/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: 'f4e5b28f58cdc65b6c859972435aa4db0420d81f3188e4784735ec2ea8e971f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '9389ba9ddc7be002ceb9dba4388b6b8a9cf4096f79d69b56be193caa607159ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 5794, hash: 'ad9dc04064ed10e0df4cabef40bb6a1c7226084b37756d9b03e7d6285248d143', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 5794, hash: '19fbbefee569cc3e5242eac6caddc6eeb9ddeaf0c81bd92bf4ef69aec6164fd5', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: 'cd384cb6b220def11727cd226f30fad0a3e4d245c2af56db266cc88962e6e4c8', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 5794, hash: '10b96df2c3fd6823fc71cddb5a2c23b84498e7ef668445ff3856a141c30376fe', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5846, hash: 'dffbad7783de333d248b349b8beb9d879f69bcffd27464d1b587ff0accd29213', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: '0f2ccb17026c457c747eb694af373da037f5cdb8d8d3dbf3491a7bb99b5afd58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
