import { Component, computed, inject } from '@angular/core';
import { UserService } from '../services/User.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  user = computed(() => this.userService.currentUser());

  onLogout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
