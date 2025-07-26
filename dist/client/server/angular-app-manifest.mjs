
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
      "chunk-QWPSMID5.js",
      "chunk-XVVF6W2W.js"
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
      "chunk-J6CK7WTZ.js",
      "chunk-XVVF6W2W.js"
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
      "chunk-V3FDC37I.js",
      "chunk-XVVF6W2W.js"
    ],
    "route": "/dashboard/tasks/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-U2J4PLDE.js",
      "chunk-XVVF6W2W.js"
    ],
    "route": "/dashboard/edit_tasks/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1271, hash: 'e3cba03fdc9aaeaa7df0fea2aad63e51c80baf8bec58bf1f25e9488b0cf1ada8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'c544bfee17395ce67f41a9e56fdf9b84c79470681e0ef57cec83173cba046355', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'regist/index.html': {size: 4776, hash: '155db1f97178b10066b2074713d0476c4af9406605114af6022e1a02a1f8e013', text: () => import('./assets-chunks/regist_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8645, hash: '805df232758a7cc5c1d75373f6ff8e08eaee295a45daabf9a195d4417f03edff', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/acerca_de/index.html': {size: 9698, hash: '8e6f99c3010dc7f8b09b6b8b5a0c9bb8dfdc5ed661d067cfaa9ab4f62dfeb174', text: () => import('./assets-chunks/dashboard_acerca_de_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 12213, hash: 'cdc91a178c6e121054cae539da7e1f66233b5c3f74c313e1dce8e9367eebc90c', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4341, hash: '5367d79c9bff8f512cfd7860e1de7e787095fdfabc2af95db22a1b26d5743140', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 10498, hash: '901774d0134745b7a99064d696bb1bfa4ab0066eb5ff7a31a615aa5d5064025d', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'styles-R2M3VEQT.css': {size: 501, hash: 'Il1XFdoJTtA', text: () => import('./assets-chunks/styles-R2M3VEQT_css.mjs').then(m => m.default)}
  },
};
