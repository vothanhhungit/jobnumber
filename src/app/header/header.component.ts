import { Component, OnInit } from '@angular/core';
import {GlobalApp} from 'app/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public app: GlobalApp) { }

  ngOnInit() {
  }

}
