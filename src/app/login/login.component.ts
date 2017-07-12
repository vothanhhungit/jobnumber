import { Component, Injectable, OnInit } from '@angular/core';
import {MsgConfig} from 'app/config/msg.config';
import {ConstantConfig} from 'app/config/constant.config';
import {AuthenticationService} from 'app/services/authentication.service';
import {Router} from '@angular/router';
import {LoaderService} from 'app/services/loader.service';
import {DialogService} from 'app/services/dialog.service';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public msg: object;
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private loaderService: LoaderService,
    private dialogService: DialogService
  ) {
    this.msg = MsgConfig;
  }

  ngOnInit() {

  }

  // call to authentication to handle login
  login() {
    this.loaderService.show(true);
    this.authenticationService.login(ConstantConfig.APL_URL.LOGIN, this.model.email, this.model.password)
    .subscribe(
      data => {
        if (data && data.token) {
            this.loaderService.show(false);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate(['/']);
        }
      },
      error => {
        this.loaderService.show(false);
        this.dialogService.alert(error.error).subscribe();
      }
    )
  }
}
