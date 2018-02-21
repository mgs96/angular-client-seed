// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { APP_ROUTES } from './app.routes';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RestrictedComponent } from './components/restricted/restricted.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestrictedComponent,
    LogInComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    APP_ROUTES
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
