
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const sitesRouting: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  
  {
    path: 'home',
    component: HomeComponent,
  },
  
  {
    path: 'about',
    component: HomeComponent,
  },
  
  {
    path: 'contact',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },

];

