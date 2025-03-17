import { NgFor, SlicePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SlicePipe, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  user = computed(() => this.userService.currentUser());

  onRedirectJobs() {
    if (this.user() === null) {
      this.router.navigate(['/login']);
    }
  }
}
