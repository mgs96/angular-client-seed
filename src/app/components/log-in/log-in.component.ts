import { Component, OnInit } from '@angular/core';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private gapiService: GoogleApiService, private _userService: UserService) { }

  output: any = {};

  ngOnInit() {
  }

  onSubmit() {
    this.gapiService.onLoad().subscribe(() => {
      this._userService.signIn();
    })
  }
}
