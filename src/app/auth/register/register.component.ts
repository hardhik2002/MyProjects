import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/User.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  onSubmitForm(form: NgForm) {
    const { email, password, username } = form.value;
    const isRegistered = this.userService.register(username, email, password);
    if (isRegistered) {
      this.toastr.success('Registration Successfully Completed!');
      this.router.navigate(['/']);
    }
  }
}
