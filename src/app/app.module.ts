import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {routing} from './app.route';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';

import {LoaderService} from './services/loader.service';
//import {UserService} from './services/user.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    LoaderService,
    // UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
