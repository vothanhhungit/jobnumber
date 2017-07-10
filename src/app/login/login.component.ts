import { Component, Injectable, OnInit } from '@angular/core';
import {MsgConfig} from 'app/config/msg.config';
import {AuthenticationService} from 'app/services/authentication.service';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public msg: object;
  constructor(private authenticationService: AuthenticationService) {
    this.msg = MsgConfig;
  }

  ngOnInit() {
    console.log( localStorage.getItem('currentUser'));

  }

  // call to authentication to handle login
  login() {
    //alert(this.model.email);
    this.authenticationService.login(this.model.email, this.model.password)
    .subscribe(
      data => {
        if (data && data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data));
        }
      }
    )
  }
}
