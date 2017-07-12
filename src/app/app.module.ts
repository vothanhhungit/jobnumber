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

import {AuthGuard} from 'app/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';

import {FormsModule} from '@angular/forms';
import {AuthenticationService} from 'app/services/authentication.service';
import {GlobalApp} from 'app/global';

import {DialogService} from './services/dialog.service';
import {ConfirmDialog} from './confirm-dialog.component';
import {AlertDialog} from './alert-dialog.component';
import { MaterialModule, MdButtonModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APLService} from './services/APL.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserComponent,
    UserListComponent,
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ConfirmDialog,
    AlertDialog
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    MaterialModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoaderService,
    AuthGuard,
    AuthenticationService,
    GlobalApp,
    DialogService,
    APLService
    // UserService,
  ],
  entryComponents: [
        ConfirmDialog,
        AlertDialog
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
