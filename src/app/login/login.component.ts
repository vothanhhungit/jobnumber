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

  }

  // call to authentication to handle login
  login() {
    //alert(this.model.email);
    this.authenticationService.login(this.model.email, this.model.password)
    .subscribe(
      data => {
          console.log(data);
      }
    )
  }
}
