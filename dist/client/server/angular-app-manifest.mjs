
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
      "chunk-MU7PG4CT.js",
      "chunk-7ZZ5QNJ3.js"
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
      "chunk-ITSPZYFK.js",
      "chunk-7ZZ5QNJ3.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNGPU6RV.js",
      "chunk-7ZZ5QNJ3.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7UI4J4MP.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5VTGHJ.js"
    ],
    "route": "/dashboard/settings"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5B3JQLVB.js",
      "chunk-7ZZ5QNJ3.js"
    ],
    "route": "/dashboard/tasks/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GTHG4U5Q.js",
      "chunk-7ZZ5QNJ3.js"
    ],
    "route": "/dashboard/edit_tasks/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2GRMABPY.js",
      "chunk-7ZZ5QNJ3.js"
    ],
    "route": "/dashboard/user_projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1309, hash: 'a5e2592c1692e0a5f8d30caf283ae953684e3e95578f37b6d362c0647e2e6e6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1481, hash: '645aa87571bc6eaa668992dcaa93dfb1de3391c54098b2e9c93366eebbb6bc66', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/user_projects/index.html': {size: 7131, hash: '432f8c0ac36dd99c35b901a1b1847c280f616b6ad8a40f8c0c34bc94cf06b97c', text: () => import('./assets-chunks/dashboard_user_projects_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4814, hash: 'cb1b82b68e60f64c9ad85d4a3e9a78ead17caea0869b937a02249d40c51d7e57', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 7079, hash: '948a30116e2d9bbafe97fa461853fdca24113c58558fbfc0a0f2ecf43ceb1135', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 7131, hash: '5a32f4aa4ec2c9863f8b44bd6b26e6f61550f55a03f7d791ec6a71bf1ac428a9', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 7079, hash: 'b0f089ba1e97c3d66919974e636dd67122207c8dc97773d2ca9f1b6c13682a4c', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4379, hash: '058b452dd1b4b65975bf9d594e55f9ba6627f69e00ffc44a9ef3993c0df6459a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5WMDGSMG.css': {size: 488, hash: 'clKbq0q57BI', text: () => import('./assets-chunks/styles-5WMDGSMG_css.mjs').then(m => m.default)}
  },
};
