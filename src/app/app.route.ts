import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from 'app/home.component';
import {UserComponent} from 'app/user/user.component';
import {UserListComponent} from 'app/user/user-list/user-list.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'user-list', component: UserListComponent},
    // {path: 'user', component: UserComponent}
]

export const routing = RouterModule.forRoot(appRoutes);
