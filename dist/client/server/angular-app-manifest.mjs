
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
      "chunk-ZRINRS62.js",
      "chunk-OTEVOAWU.js"
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
      "chunk-O3NYLGAZ.js",
      "chunk-OTEVOAWU.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PAO3JNXU.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MBNMSCUW.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2355JVGP.js"
    ],
    "route": "/dashboard/settings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: 'bfd1b30ed8bbc8724edf910c685ff124d7425f5c4f0217e07e4b275321b1a2e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '0f4e1ca4b179427b612a6e21dd5f991a73bb32feeb611832b23a510ea7d45575', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8595, hash: 'abc3db67bb384b7c36d371695df6216520a78355ed7dff1029328e2a81953283', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 10498, hash: '9f496e6a16e0ef45406094dcf2b7b0d4baa231e802bb605568552e0ad0bf5244', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 9698, hash: 'bd081bf3205183609927116ec7c8d0355dfbd474a17df40f353d77c570d3d396', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 12213, hash: '0093d7fc048eeed35bf38337459136c7be7e4c97612bb605ed9d09bf41d6ca0c', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: '4ea22568ffe93493d00af8e479a37843328f1d892ed92b034efcf74297d8689b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: '9a541e3aed5afc3b5d392afce63719edce8913dbbcbd2b024d0eaf2cef2d1307', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
