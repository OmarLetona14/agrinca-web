import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutusComponent} from '../app/components/aboutus/aboutus.component';
import {HomePageComponent} from '../app/components/home-page/home-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'home',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
