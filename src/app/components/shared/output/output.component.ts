import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { AuthResponse } from '../auth.model';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  output: AuthResponse;

  @Input()
  set data(res: Response) {
    this.output = <AuthResponse>{};

    if (res == null) {
      this.output.status = res.statusText + ' (' + res.status + ')';

      if (res.json().errors != null) {
        if (res.json().errors.full_message != null) {
          this.output.errors = res.json().errors.full_message;
        } else {
          this.output.errors = res.json().errors;
        }
      } else {
        this.output.data = res.json().data;
      }
    }
  }
}
