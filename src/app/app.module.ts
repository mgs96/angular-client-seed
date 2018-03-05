// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routes
import { APP_ROUTES } from './app.routes';

// serices
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RestrictedComponent } from './components/restricted/restricted.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "330236784490-oe7knrlk32mkpdha2oim5dk8asdqoler.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/auth/plus.login"]
};

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
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot(),
    APP_ROUTES,
    FormsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
