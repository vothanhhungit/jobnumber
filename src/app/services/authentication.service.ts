import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
    constructor (private _http : Http) {

    }

    login(email: string, password: string) {
       return this._http.post('http://jobnumber.hungvt.com/api/v1/login', JSON.stringify({email: email, password: password}))
       .map((response: Response)=> {
           response.json();
            console.log('res', response);
       })

    }
    get_csrf_token() {
        return this._http.get('http://jobnumber.hungvt.com/api/v1/csrf-token').map((response: Response)=> response.json());
    }
}