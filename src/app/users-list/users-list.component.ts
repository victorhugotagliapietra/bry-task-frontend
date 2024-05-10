import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  editUser(id: number) {
    this.router.navigate(['/users', id, 'edit']);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser() {
    this.router.navigate(['/users/create']);
  }
}
