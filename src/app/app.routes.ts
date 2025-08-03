import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Regist } from './regist/regist';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './guards/auth.guards';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'regist', component: Regist},
    {path: 'dashboard', component: Dashboard, children: [
        {
            path: '',
            loadComponent: () => import('./dashboard/projects/projects').then((m => m.Projects) )
        },

        {
            path: 'acerca_de',
            loadComponent: () => import('./dashboard/acerca-de/acerca-de').then((m => m.AcercaDe) )
        },

        {
            path: 'edit_project/:id',
            loadComponent: () => import('./dashboard/edit-project/edit-project').then((m => m.EditProject) ),
            data: { 
                renderMode: 'manual',
                ssr: {
                    enabled: RenderMode.Server
                }
            }
        },

        {
            path: 'users',
            loadComponent: () => import('./dashboard/users/users').then((m => m.Users) )
        },

        {
            path: 'edit_users/:id',
            loadComponent: () => import('./dashboard/edit-user/edit-user').then((m => m.EditUser) ),
            data: { 
                renderMode: RenderMode.Client,
            },
        },

        {
            path: 'settings',
            loadComponent: () => import('./dashboard/settings/settings').then((m => m.Settings) )
        },

        {
            path: 'tasks/:id',
            loadComponent: () => import('./dashboard/tasks/tasks').then((m) => m.Tasks)
        },

        {
            path: 'edit_tasks/:id',
            loadComponent: () => import('./dashboard/edit-task/edit-task').then((m) => m.EditTask)
        },

        {
            path: 'user_projects',
            loadComponent: () => import('./dashboard/user-projects/user-projects').then((m) => m.UserProjects)
        }
    ]}
];
