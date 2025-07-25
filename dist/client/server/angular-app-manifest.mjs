
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
      "chunk-XMDVIW5T.js",
      "chunk-OIYQPOTC.js"
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
      "chunk-QEOABSF4.js",
      "chunk-OIYQPOTC.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A7IHIFEB.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ONCKYS5A.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-53WPB2MJ.js"
    ],
    "route": "/dashboard/settings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: '582593e40009567989fe61fdf8d944724e4dce17956c999b56444e5d27d7bbb5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'a63041ecb0eb87fddba68e66199ac91ad295d483f20140c0536e2e80c7a89a95', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: 'd684ef9a2ea9fb7faa692e920f32f929634c83fc54681bb7676a0a703a9baafe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8595, hash: '8ce38f5762a25a1eadb8083c1b7f63db65c08fb8d578f2842e6dfedfc33e50c1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 9698, hash: '3ff77f69918062ccadcf753df7498c7d679095cd795bebb8c92fe4dc93c3de28', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: 'ae1e76e3987f62349cbe59a6670437c891b32d0611329fc2e3c1c919722d563e', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 12213, hash: 'f7fe9f290775f0ac5c10090cbf0c5417ea38a16da13e799c35beb1656b13b52d', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 10498, hash: '6cab4f3031d6cb7fc3891505b0d9f7efa5560e9ce0b96db8c9bef8b930d0f111', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
