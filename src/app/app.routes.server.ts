import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

  {
    path: 'dashboard',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'dashboard/edit_project/:id',
    renderMode: RenderMode.Client,
  },

  {
    path: 'dashboard/edit_users/:id',
    renderMode: RenderMode.Client,
  },

  {
    path: 'dashboard/tasks/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'dashboard/edit_tasks/:id',
    renderMode: RenderMode.Client,
  }
];
