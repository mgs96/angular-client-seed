import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { HomeComponent } from './components/home/home.component';
import { RestrictedComponent } from './components/restricted/restricted.component';
import { LogInComponent } from './components/log-in/log-in.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'restricted', component: RestrictedComponent, canActivate: [Angular2TokenService] }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true});
