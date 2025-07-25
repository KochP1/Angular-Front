
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
      "chunk-6BMW3BH4.js",
      "chunk-AE3YUCJC.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SIQG73CI.js"
    ],
    "route": "/dashboard/acerca_de"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-T2Y7ADUV.js",
      "chunk-AE3YUCJC.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3S6GR3XZ.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-24YYMLYM.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5OY3YRY.js"
    ],
    "route": "/dashboard/settings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: '34e0d8cae23beac626e122287a915cafacfc53edfd277795679810764f7818ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '3041c699ae60dbe74aa5190d3170d0f748b646c9e03eec349c9f6d4f01e27b43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: '0d699c802ce66cadc58107b84132918b496bbf71ec3a29a3a5dae7d42fcc119d', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 12213, hash: '39cc7bb1a5353a6811e621fad8629fbf612039c655dd96d7fbb71970439e130e', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8595, hash: 'bb24c4606359b55b0d7aab1e3e7c33d041ea8e9bdb229a0ad13368370a8d0be3', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 9698, hash: '16d21901a842a8156b382a53878767a981071583d1164c4cd28ea13c7e025483', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: 'f4c350a934a9f198747d79fc7d72cb54668f1a116af79dda473965aa5693f2d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 10498, hash: '6c1e8bfc525bf92b7d54bd6a5944ff44bd0ca8be9f5016b44d5629a4841ecb65', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
