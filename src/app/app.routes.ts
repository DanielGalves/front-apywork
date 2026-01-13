import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/events.routes')
        .then(m => m.EVENTS_ROUTES)
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./features/agenda/agenda.routes')
        .then(m => m.AGENDA_ROUTES)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.routes')
        .then(m => m.USERS_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
