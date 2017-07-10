import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';

import { HeaderComponent } from 'app/header/header.component';
import { SideBarComponent } from 'app/side-bar/side-bar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoading: Boolean;
  constructor(private loaderService: LoaderService,
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit() {
    // this.authenticationService.get_csrf_token().subscribe(
    //   data => {
    //     console.log('abc', localStorage.getItem('csrf_token'));
    //   },
    //   error => {
    //    alert('error');
    //   }
    // );
    this.loaderService.status.subscribe((val: Boolean) => {
      this.isLoading = val;
    })

  }

  title = 'app';
}
