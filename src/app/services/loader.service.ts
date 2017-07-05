import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
    display(value : Boolean) {
        this.status.next(value);
    }
}