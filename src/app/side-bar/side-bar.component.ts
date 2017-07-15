import { Component, OnInit } from '@angular/core';
import {GlobalApp} from 'app/global';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private app: GlobalApp) { }

  ngOnInit() {
  }

}
