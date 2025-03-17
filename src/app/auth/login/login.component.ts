import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/User.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  onLogin(form: NgForm) {
    const isValidated = this.userService.login(
      form.value.email,
      form.value.password
    );
    if (isValidated) {
      this.router.navigate(['/']);
    }
  }
}
