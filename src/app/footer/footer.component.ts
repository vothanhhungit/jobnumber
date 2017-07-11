import { Component, OnInit } from '@angular/core';
import {GlobalApp}  from 'app/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private app: GlobalApp) { }

  ngOnInit() {
  }

}
