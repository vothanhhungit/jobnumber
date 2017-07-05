import { Component, OnInit } from '@angular/core';
import {LoaderService} from 'app/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private showLoader : Boolean;
  constructor(private LoaderService : LoaderService) {

  }

ngOnInit() {
  this.LoaderService.status.subscribe((val : Boolean) => {
    this.showLoader = val;
  })  
}

  title = 'app';
}
