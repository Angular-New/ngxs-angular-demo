import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private readonly _userService = inject(UserService);
  private readonly _router: Router = inject(Router);

  user: any = {
    username: 'mor_2314',
    password: '83r5^_'
  };

  login() {
    console.log('User to be logged in: ', this.user);

    this._userService.login(this.user).subscribe(data => {
      localStorage.setItem('token', data.token);
      void this._router.navigate(['/products']);
    });
  }
}
