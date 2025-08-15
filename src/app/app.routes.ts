import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/under-construction/under-construction.component').then(m => m.UnderConstructionComponent)
  },
  {
    path: 'term-and-condition',
    loadComponent: () => import('./views/term-and-condition/term-and-condition.component').then(m => m.TermAndConditionComponent)
  }
];
