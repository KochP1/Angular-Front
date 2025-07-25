
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
      "chunk-CF3CEHNY.js",
      "chunk-CS4BVECT.js"
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
      "chunk-XE73T2Z5.js",
      "chunk-CS4BVECT.js"
    ],
    "route": "/dashboard/edit_project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7QD3MPTP.js"
    ],
    "route": "/dashboard/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-K7QROO4P.js"
    ],
    "route": "/dashboard/edit_users/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FP33XMHG.js"
    ],
    "route": "/dashboard/settings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: '85c1044cc4bb91c2b918cd4f9ae1dbfc71771e7e627b5ddbfbac8695953bc3d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '346e848c55ffeb75944e46b0638e4fe54e8eb0f0d8d8d7fabef8df360e671f31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 10498, hash: '68b6f57188a3a6cec925298d04efdfaea5ebdb5bbf4f0594f59295322558dc4b', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: '8c2c55807261e3d6ae5795ce7af9fffff878001180f553329ab66c69816dfecc', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 12213, hash: '59df417406b032b83d75967113812e0ad2f7d174fcaaad64dfdd38df0ffcfcc4', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: '04ae14fda130ee5f5d06bf1253b04e2cf6da8f2999e427e872d6a39a17bd5cb0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 9698, hash: '610428b61903647a10a3b6796f365724ff8f753a269243ae86781af67ef5bebf', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8595, hash: '7267e3de01bf6f13e3bbcc46b7589eb0279217c606a58bef32d1c7f9ae6a1145', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
