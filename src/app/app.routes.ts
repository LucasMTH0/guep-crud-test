import { Routes } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'enterprise',
    children: [
      {
        path: 'create',
        loadComponent: () => import('./screens/enterprise/create-enterprise/create-enterprise.component').then((c) => c.CreateEnterpriseComponent)
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./screens/enterprise/edit-enterprise/edit-enterprise.component').then((c) => c.EditEnterpriseComponent)
      }
    ]
  }
];
