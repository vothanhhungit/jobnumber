import { Component, OnInit } from '@angular/core';
import {LoaderService} from 'app/services/loader.service';
import {UserService} from 'app/services/user.service';
import {MsgConfig} from 'app/config/msg.config';
import {ConstantConfig} from 'app/config/constant.config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  public users: object;
  public isLoading : Boolean;
  public msg : object;
  public constants: object;
  
  constructor(
    private loaderService: LoaderService,
    private userService: UserService,
    // private msgConfig: MsgConfig,
    // private constantConfig: ConstantConfig
  ) {
    this.loaderService.show(true);
    this.msg = MsgConfig;
    // this.constants = ConstantConfig;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.loaderService.show(false);
    },3000);
    let apiUrl = ConstantConfig.APL_URL.USERS;
    this.userService.GetList(apiUrl).subscribe((response: any) => {
      console.log('log', response);
      this.users = response;
    });
    
    this.loaderService.status.subscribe((val : Boolean) => {
      this.isLoading = val;
    });
  }

}
