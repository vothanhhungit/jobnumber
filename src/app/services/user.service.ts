import { Injectable } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import {Router} from '@angular/router';
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

}