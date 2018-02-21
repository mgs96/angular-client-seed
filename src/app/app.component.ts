import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000/',
      oAuthBase: 'http://localhost:3000/',
      oAuthPaths: {
        google: 'auth/google_oauth2'
      },
    });
  }
}
