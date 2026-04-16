import { Routes } from '@angular/router';


export const AppRouting: Routes = [
  {
    path: '',
    // redirectTo: '/sites/home',
    // pathMatch: 'full'   
  children:
 [ 

  {
    path: 'sites',
    loadChildren: () => import('./sites/sites.module').then((m) => m.SitesModule),
  },
  
  ]
}
];
