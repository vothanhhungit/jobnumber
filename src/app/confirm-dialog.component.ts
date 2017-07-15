import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'confirm-dialog',
    template:
        '<div class="md" style="padding:15px;text-align:center;z-index:3000">' +
            '<div>{{message}}</div>' +
            '<div style="width:100%">' +
                '<button style="margin-top:30px;margin-right:10px;width:100px" class="btn " (click)="dialogRef.close()">Cancel</button>' +
                '<button style="margin-top:30px;margin-left:10px;width:100px" class="btn btn-warning" (click)="dialogRef.close(true)">OK</button>' +
            '</div>' +
        '</div>'
})
export class ConfirmDialog {
    public message: String;
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }    

}