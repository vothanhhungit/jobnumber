import { Component, OnInit } from '@angular/core';
import {LoaderService} from 'app/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoading : Boolean;
  constructor(private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: Boolean) => {
      this.isLoading = val;
    })
    
  }

  title = 'app';
}
