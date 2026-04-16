import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sites/home',
    pathMatch: 'full',
  },
  {
    path: 'sites',
    loadChildren: () =>
      import('./sites/sites.module').then((m) => m.SitesModule),
  },
  {
    path: '**',
    redirectTo: 'sites/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
