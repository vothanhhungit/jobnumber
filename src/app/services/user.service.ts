import { Injectable } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';
import { Observable } from 'rxjs/Observable';
<<<<<<< .merge_file_a07800
import { Http, Response, Headers, RequestOptions } from '@angular/http';
=======
import { Http, Response, Headers } from '@angular/http';
import {Router} from '@angular/router';
>>>>>>> .merge_file_a08740
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {MsgConfig} from 'app/config/msg.config';
import {ConstantConfig} from 'app/config/constant.config';


@Injectable()
export class UserService {
    constructor(private _http: Http,
        private router: Router,
    ) {

    }
<<<<<<< .merge_file_a07800
    GetList(apiUrl) { this._http
  .get('http://595e5ac6ffb74e0011021717.mockapi.io/api/v1/users')
  .map(res => res.json());
    }
//   .subscribe(
//     (data) => this.data = data,
//     (err) => this.error = err);
        // return this._http.get('http://595e5ac6ffb74e0011021717.mockapi.io/api/v1/users', options).map(res => res.json()).subscribe(
        //     (data) => this.data = data,
        //     (err) => this.error = err
        // );
    //}
    // GetList(): object {

=======
    GetList(apiUrl) {
        let _headers = new Headers();
        _headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token);
        return this._http.get('http://jobnumber.hungvt.com/users/get-list',
            { headers: _headers }).map(
                (response: Response) => response.json()
        ).catch(
            (error:Response | any) => {
                if (error.status === 401) {
                    localStorage.removeItem('currentUser');
                    this.router.navigate(['/login']);
                }
                return '';
            }
        );;
    }
>>>>>>> .merge_file_a08740

}