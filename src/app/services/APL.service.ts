import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';
import {Router} from  '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class APLService {
    constructor(private _http: Http,
        private route: Router
    ) {

    }

    _getList(apiUrl: string) : Observable<any[]> {
        let _headers = new Headers();
        _headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token);
        return this._http.get(apiUrl, {headers: _headers})
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    _getDetail(apiUrl: String) : Observable<any[]> {

        return ;
    }

    _create(apiUrl: string, _data: Object): Observable<any[]> {

        return;
    }

    _update(apiUrl: String, _data: Object): Observable<any[]> {

        return;
    }

    private extractData(res: Response) {
	    let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
        return Observable.throw(error.json());
    }
    
}