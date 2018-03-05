import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user;
  private api1 = 'http://192.168.0.11:3000/mobile/google_auth';

  constructor(private googleAuth: GoogleAuthService, private http: HttpClient) { }

  public getToken(): string {
    let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth()
        .subscribe((auth) => {
            auth.signIn().then(res => this.signInSuccessHandler(res));
        });
  }

  private signInSuccessHandler(res) {
    this.user = res;
    console.log(res.Zi);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
      params: {
        'id_token': res.Zi.id_token,
        'redirect_uri': ''
      }
    };
    this.http.post(this.api1, {} , httpOptions)
      .subscribe(ok => console.log(ok), err => console.log(err)); 
  }

}
