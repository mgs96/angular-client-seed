import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  output: any = {};

  ngOnInit() {
  }

  onSubmit() {
    this.output = {};
    this._tokenService.signInOAuth('google').subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }
}
