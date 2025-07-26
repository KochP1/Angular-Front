
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
      "chunk-76SN66OU.js",
      "chunk-NDEUW4G7.js"
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
      "chunk-W777K6VS.js",
      "chunk-NDEUW4G7.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T2VXEF24.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FL3IKE33.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FQTXOQ7S.js"
    ],
    "route": "/dashboard/settings"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HHGWIX77.js",
      "chunk-NDEUW4G7.js"
    ],
    "route": "/dashboard/tasks/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OH57ZC4H.js",
      "chunk-NDEUW4G7.js"
    ],
    "route": "/dashboard/edit_tasks/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: '0c61db6572a210d703d7a30555cf58fff9092dc42b1f8089699febd984459a94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'a86475513b11a7efd06a8b8d4bba13b3a2e3db33831c55ce227ef7f534664f49', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5846, hash: '3e296af2505fd6f6dc81ac6df5161d2b9c2e905f36e046400e7cf24476431b9c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 5794, hash: '4b2d8586d9649241edca986a2dfe435bca63f66449f909c3c1c0333e261045eb', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 5794, hash: '250db7ad48da64ff91109cb2f93a71bcfe8c388a0828c90b6d87732217da62a1', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 5794, hash: '01545e9f6fccce7074582bda5b348251b72c83a36b54e729c3cc370ea4846bf7', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: '5baa4484b0841b7b84c5a157fddc01e42d09127b197a5bf53a9715f24af1f614', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: '7b87bfc081a1daaf1ca71284e5242224441e4651099024ab8f3392dd0a3893cf', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
