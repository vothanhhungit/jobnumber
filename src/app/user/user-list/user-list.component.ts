import { Component, OnInit } from '@angular/core';
import {LoaderService} from 'app/services/loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public isLoading:  true;
  constructor(private loaderService: LoaderService) { 
   
  }

  ngOnInit() {
    //this.loaderService.display(true);
  }

}
