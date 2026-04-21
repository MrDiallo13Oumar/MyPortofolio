
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';


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
    path: 'experience',
    component: AboutComponent,
  },
  
  {
    path: 'contact',
    component: HomeComponent,
  },
  {
    path: 'projets',
    component: ServicesComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },

];

