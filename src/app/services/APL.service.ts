import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APLService {
    constructor() {

    }

    _getList(apiUrl: string) : Observable<any[]> {

        return;
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

    _
    
}