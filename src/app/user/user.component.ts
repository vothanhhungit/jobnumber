import { Component, OnInit } from '@angular/core';
<<<<<<< .merge_file_a06716
=======
import {ActivatedRoute} from '@angular/router';
>>>>>>> .merge_file_a02124

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
<<<<<<< .merge_file_a06716

  constructor() { }

  ngOnInit() {
=======
  public userId: number;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.userId = +params['id'];
    })
    if (this.userId) {
      // edit user case
    } else {
      //create user case

    }
>>>>>>> .merge_file_a02124
  }

}
