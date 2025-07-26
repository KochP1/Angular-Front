
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
    'index.csr.html': {size: 1322, hash: 'ea2470c80f065b36ca281ec29ac25850445f1ec6e0367066899cd46c7f27422b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1481, hash: '079d75d1d55b73574fb2cddee90c822c01377ef5ef6091144fdf5a92a19f5548', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/user_projects/index.html': {size: 5920, hash: 'eb592f5c1fa9fb072fa398c02c6255ce8d0b7b4750e53fb4220a45a80f150a01', text: () => import('./assets-chunks/dashboard_user_projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4392, hash: '29918184d11595207cfaad23c95df90ff986b406d339e9d7b69e303c3d8d6741', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 5868, hash: 'c94b1d985ea0bbf67a9292d75332e4c895387de1ff408a61ac3cc8ad3e2cb168', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 5920, hash: 'b59024a1065e15e6eb385e1b1c51d9c375dc9d266426d91d71c2524671f0be36', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 5868, hash: '5840f58a8707d6560bb2609dbab377c897eb8517730b17d8570e490c69861ea9', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4827, hash: '42cad7ce80c21c4bb692240672975179876754c31327bd8089322176934ea484', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
