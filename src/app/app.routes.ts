import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/create', component: UserFormComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users/:id/edit', component: UserFormComponent }
];
