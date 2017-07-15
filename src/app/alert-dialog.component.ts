import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
@Component({
    selector: 'alert-dialog',
    template: `
        <div class="md" style="padding:15px;text-align:center;z-index:3000">
            <div>{{message}}</div>
            <div style="width:100%">
                <button style="margin-top:30px;width:100px" class="btn btn-warning" (click)="dialogRef.close()">OK</button>
            </div>
        </div>
    `,
})
export class AlertDialog {
    public message: String;
    constructor(public dialogRef: MdDialogRef<AlertDialog>) {}
}