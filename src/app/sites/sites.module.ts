import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { sitesRouting } from './sites-routing';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoMaterialModule } from '../demo-material-module';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
  
    
  ],
  imports: [
    CommonModule,
    FormsModule,
     DemoMaterialModule,
    RouterModule.forChild(sitesRouting),
    // SharedModule
  ],
 
})
export class SitesModule { }  