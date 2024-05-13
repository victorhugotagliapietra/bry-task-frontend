import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  user: User = new User();
  isNewUser = true;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.isNewUser) {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
