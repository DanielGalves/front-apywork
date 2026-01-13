import { Routes } from '@angular/router';
import { EventsList } from './pages/events-list/events-list';

export const EVENTS_ROUTES: Routes = [
  {
    path: '',
    component: EventsList
  }
];
