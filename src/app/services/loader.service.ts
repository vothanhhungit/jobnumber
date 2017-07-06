import {Injectable} from  '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class LoaderService {
    public status = new BehaviorSubject<Boolean>(false);

    show(val : Boolean) {
        this.status.next(val);
    }
}