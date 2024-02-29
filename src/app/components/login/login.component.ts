import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  user: any = {
    username: 'mor_2314',
    password: '83r5^_',
  };

  login(): void {
    inject(UserService)
      .login(this.user)
      .subscribe((data) => {
        localStorage.setItem('token', data.token);
        void inject(Router).navigate(['/products']);
      });
  }
}
