import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from 'app/home.component';
import {UserComponent} from 'app/user/user.component';
import {UserListComponent} from 'app/user/user-list/user-list.component';
import {AuthGuard} from 'app/guards/auth.guard';
import {LoginComponent} from 'app/login/login.component';

const appRoutes : Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'user-list', component: UserListComponent},
    {path: 'users/:id/edit', component: UserComponent},
    {path: 'users/create', component: UserComponent}
]

export const routing = RouterModule.forRoot(appRoutes);
