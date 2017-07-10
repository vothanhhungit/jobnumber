import {Injectable} from '@angular/core';
import {LoaderService} from 'app/services/loader.service';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private _http: Http) {

    }
    GetList(apiUrl): Observable<any[]> {
        let _headers = new Headers();
        _headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token);
        return this._http.get('http://jobnumber.hungvt.com/users/get-list',
            {headers: _headers}).map((response: Response)=> response.json());

        // return this._http.get(apiUrl).map(
        //     (response: Response) => response.json()
        // )
        // ...using get request
        //return this._http.get('http://595e5ac6ffb74e0011021717.mockapi.io/api/v1/users')
        // ...and calling .json() on the response to return data
            //.map((res:Response) => res.json())
            //...errors if any
            //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    // GetList(): object {


    //     let users : object = 
    //         {Datas: [
    //             {
    //                 "id":1,
    //                 "name":"Master Administrator",
    //                 "email":"master_admin@bonseyjaden.com",
    //                 "avatar":null,
    //                 "deleted_at":0,
    //                 "created_at":"2017-06-15 09:01:53",
    //                 "updated_at":
    //                 "2017-06-15 09:01:53",
    //                 "role_user": {
    //                     "user_id":1,
    //                     "role_id":1
    //                 },
    //                 "role_display_name":"Master Administrator"
    //             },
    //             {
    //                 "id":2,
    //                 "name":"Administrator",
    //                 "email":"admin@bonseyjaden.com",
    //                 "avatar":null,"deleted_at":0,
    //                 "created_at":"2017-05-31 22:37:55",
    //                 "updated_at":"2017-05-31 22:37:55",
    //                 "role_user": {
    //                     "user_id":2,
    //                     "role_id":2
    //                 },
    //                 "role_display_name":"Administrator"
    //             },
    //             {
    //                 "id":3,
    //                 "name":"Staff",
    //                 "email":"staff@bonseyjaden.com",
    //                 "avatar":null,
    //                 "deleted_at":0,
    //                 "created_at":"2017-05-31 23:23:39",
    //                 "updated_at":"2017-05-31 23:23:39",
    //                 "role_user":{
    //                     "user_id":3,
    //                     "role_id":3
    //                 },
    //                 "role_display_name":"Staff"
    //             },
    //             {
    //                 "id":4,
    //                 "name":"test",
    //                 "email":"test@bonseyjaden.com",
    //                 "avatar":null,
    //                 "deleted_at":0,
    //                 "created_at":"2017-06-21 10:06:38",
    //                 "updated_at":"2017-06-21 10:06:38",
    //                 "role_user":{
    //                     "user_id":4,
    //                     "role_id":3
    //                 },
    //                 "role_display_name":"Staff"
    //             }
    //         ]}; 
    //     return users = {Datas: []};
    // }
}