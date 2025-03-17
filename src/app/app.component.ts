import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/User.service';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Client';
  private router = inject(Router);
  managerPage() {
    this.router.navigate(['/manager/tasks']);
  }

  adminPage() {
    this.router.navigate(['/admin/users']);
  }
}
