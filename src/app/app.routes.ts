import { Routes } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {CreateEnterpriseComponent} from './screens/enterprise/create-enterprise/create-enterprise.component';

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
        component: CreateEnterpriseComponent
      }
    ]
  }
];
