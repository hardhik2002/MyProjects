import { Component, computed, inject } from '@angular/core';
import { TravelRequestService } from '../../services/TravelRequest.service';
import { UserService } from '../../services/User.service';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-emp-requests',
  imports: [CurrencyPipe, NgClass, NgFor],
  templateUrl: './emp-requests.component.html',
  styleUrl: './emp-requests.component.css'
})
export class EmpRequestsComponent {
  private travelRequestsService = inject(TravelRequestService);
  private userService = inject(UserService);
  currentUser = computed(() => this.userService.currentUser());
  travelRequests = this.travelRequestsService.getEmployeeTravelRequests(this.currentUser()!);
}
