import { Component, OnInit } from '@angular/core';
<<<<<<< .merge_file_a05156
import {LoaderService} from 'app/services/loader.service';
=======
import { LoaderService } from 'app/services/loader.service';

import { HeaderComponent } from 'app/header/header.component';
import { SideBarComponent } from 'app/side-bar/side-bar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { AuthenticationService } from 'app/services/authentication.service';
import {GlobalApp} from 'app/global';

import {Router} from '@angular/router';
>>>>>>> .merge_file_a10596

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< .merge_file_a05156
  public isLoading : Boolean;
  constructor(private loaderService: LoaderService) {
=======
  public isLoading: Boolean;
  constructor(private loaderService: LoaderService,
    private authenticationService: AuthenticationService,
    private app: GlobalApp,
    private router: Router
  ) {
>>>>>>> .merge_file_a10596

  }

  ngOnInit() {
<<<<<<< .merge_file_a05156
    this.loaderService.status.subscribe((val: Boolean) => {
      this.isLoading = val;
    })
    
=======
    // this.authenticationService.get_csrf_token().subscribe(
    //   data => {
    //     console.log('abc', localStorage.getItem('csrf_token'));
    //   },
    //   error => {
    //    alert('error');
    //   }
    // );
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['/login']);
    }
    this.loaderService.status.subscribe((val: Boolean) => {
      this.isLoading = val;
    })

>>>>>>> .merge_file_a10596
  }

  title = 'app';
}
