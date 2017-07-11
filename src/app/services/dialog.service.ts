import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {ConfirmDialog} from 'app/confirm-dialog.component';
import {AlertDialog} from 'app/alert-dialog.component';

import {MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class DialogService {
    // declare to calling the dialog (open/close)
    constructor(public dialog: MdDialog) {}

    confirm(message: String): Observable<Boolean> {
        // create an Instants of MdDiaLogRef with customer component (ConfirmDialog componett)
        let dialogRef: MdDialogRef<ConfirmDialog>;
        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }

    alert(message: String): Observable<Boolean> {
        let dialogRef: MdDialogRef<AlertDialog>;
        dialogRef = this.dialog.open(AlertDialog);
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }

}