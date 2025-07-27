
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
    'index.csr.html': {size: 1309, hash: 'adb4cbcb84a6f32ad6124750744b0c50714b45ac1f40bc4b8acfc372c2a348df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1481, hash: 'a709957fae5a65cf999f79097531fd420cccfe686c900e7aee4d816f79f21012', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4814, hash: '21d32fcf9dc784bc6659efb6ee13cc59d0702b6061794f7df0a82da595fbc1d0', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 7079, hash: '51d6179c009cf6d98534404ff178a212c62f436760c42d5d6666e60602890428', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 7131, hash: 'c44c9c13372a8c8f73ef5998c135da28017601657cf8d0bf91e5c2b520dcc682', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/user_projects/index.html': {size: 7131, hash: 'de435d2db383fac7120a020dd9cc4fbfb4ab3b5cd8267c76d9e98441dbd9a947', text: () => import('./assets-chunks/dashboard_user_projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4379, hash: '2fb22ea1fc174cd1cf5cfbfdf4a2cc59cb11453a24901569070ff5b1f35180eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 7079, hash: '0a9e274894ef13db3894b6fc087428812085db6bd92ce911966c63fee2792804', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'styles-5WMDGSMG.css': {size: 488, hash: 'clKbq0q57BI', text: () => import('./assets-chunks/styles-5WMDGSMG_css.mjs').then(m => m.default)}
  },
};
