import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthenticationService {
    constructor (private _http : Http) {

    }

    login(email: string, password: string) : Observable<any>{
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        return this._http.post('http://jobnumber.hungvt.com/api/v1/login',
            JSON.stringify({email: email, password: password}),
            {headers: _headers}
        ).map(this.extractData)
        .catch(this.handleErrorObservable);
}
    private extractData(res: Response) {
	    let body = res.json();
        return body[0] || {};
    }
    private handleErrorObservable (error: Response | any) {
        return Observable.throw(error.json());
    }
    get_csrf_token() {
        return this._http.get('http://jobnumber.hungvt.com/api/v1/csrf-token').map((response: Response)=> response.json());
    }
}