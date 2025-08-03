
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
    "renderMode": 1,
    "preload": [
      "chunk-3HYW6UVT.js",
      "chunk-N2JNDUIK.js"
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
      "chunk-YNYTGIRT.js",
      "chunk-N2JNDUIK.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V66QYAKE.js",
      "chunk-N2JNDUIK.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FQQHDISA.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TV36JMCW.js"
    ],
    "route": "/dashboard/settings"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DUT2EA6K.js",
      "chunk-N2JNDUIK.js"
    ],
    "route": "/dashboard/tasks/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-52XX7R23.js",
      "chunk-N2JNDUIK.js"
    ],
    "route": "/dashboard/edit_tasks/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B46I5J5G.js",
      "chunk-N2JNDUIK.js"
    ],
    "route": "/dashboard/user_projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1309, hash: '3d7863f11dbf5894de02125257574f9579b1be40c2197d76ab624fb6f82676dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1481, hash: '52fe00a272fb775572a79f639e45be7bc1f4ce5b8d983104108a0897dd0a9110', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4379, hash: '652dbcf3ac2cf47f640a9716fd6e98d8dff8dd59e3fd3e6c53f989d61452ddd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 7118, hash: '911a95901e2d63817ce94276dd43fd060f02d5e45f041f6d857a9d511ea39c03', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4814, hash: '055bf3a63a3a7381b33ff8989c0acd18536d487816befbae0e07e20c231e5a2c', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 7170, hash: 'e2fa88ef75f674cec707a7eca5d2fb49f9435b80964d9feb8c7f634fbfc7101f', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 7118, hash: '12d414155b693d4380aac7dc04012cd3cb4def6c22e14051ee79674120513472', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'dashboard/user_projects/index.html': {size: 7170, hash: '5a75a7897eb1d84c55b4e0e0b0d90f0092280c4560b946f3033ad9f04533e6df', text: () => import('./assets-chunks/dashboard_user_projects_index_html.mjs').then(m => m.default)},
    'styles-5WMDGSMG.css': {size: 488, hash: 'clKbq0q57BI', text: () => import('./assets-chunks/styles-5WMDGSMG_css.mjs').then(m => m.default)}
  },
};
