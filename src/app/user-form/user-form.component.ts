import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUser(id).subscribe(user => this.user = user);
    }
  }

  onSubmit() {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => this.gotoUserList());
    } else {
      this.userService.createUser(this.user).subscribe(() => this.gotoUserList());
    }
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
