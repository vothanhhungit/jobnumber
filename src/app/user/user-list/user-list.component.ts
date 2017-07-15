import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {LoaderService} from 'app/services/loader.service';
import {UserService} from 'app/services/user.service';
import {MsgConfig} from 'app/config/msg.config';
import {ConstantConfig} from 'app/config/constant.config';
<<<<<<< .merge_file_a11380
@Injectable()
=======
import {DialogService} from 'app/services/dialog.service';
import {APLService} from 'app/services/APL.service';

>>>>>>> .merge_file_a06240
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // template: '{{token}}',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  //public users: object;
  public isLoading : Boolean;
  public msg : object;
  public constants: object;
<<<<<<< .merge_file_a11380
  public users: any[];
  
=======
  public token: string;
  public result: any;
>>>>>>> .merge_file_a06240
  constructor(
    private loaderService: LoaderService,
    private userService: UserService,
    private dialogService: DialogService,
    private aplService: APLService
    // private msgConfig: MsgConfig,
    // private constantConfig: ConstantConfig
  ) {
    this.loaderService.show(true);
    this.msg = MsgConfig;
    // this.constants = ConstantConfig;
  }

  ngOnInit() {
<<<<<<< .merge_file_a11380
    setTimeout(()=>{
      // this.loaderService.show(false);
    },3000);
    let apiUrl = ConstantConfig.APL_URL.USERS;
    this.userService.GetList(apiUrl).subscribe((response: any) => {
      this.users = response;
      this.loaderService.show(false);
=======
    let apiUrl = ConstantConfig.APL_URL.USERS;
    this.aplService._getList(apiUrl).subscribe((response:any) => {
      this.loaderService.show(false);
      this.users = response;
>>>>>>> .merge_file_a06240
    });
    
    this.loaderService.status.subscribe((val:Boolean) => {
      this.isLoading = val;
    });
    
  }

  deleteRow(_id: Number) {
    this.dialogService.confirm(MsgConfig.DEL_CONFIRM)
    .subscribe(res => {
      if (res) {
        this.loaderService.show(true);
        this.aplService._delete(ConstantConfig.APL_URL.USER_DELETE, {id: _id}).subscribe(
          data => {
            this.loaderService.show(false);
            if (data.Datas.error) {
              this.dialogService.alert(data.Datas.error);
            }
          },
          error => {
            this.loaderService.show(false);
            this.dialogService.alert(error.error);
          }
        )
      }
    });
  }

}
