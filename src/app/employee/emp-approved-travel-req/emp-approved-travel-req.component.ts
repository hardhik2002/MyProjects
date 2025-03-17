import { Component, computed, inject } from '@angular/core';
import { TravelExpenseService } from '../../services/TravelExpense.service';
import { TravelRequestService } from '../../services/TravelRequest.service';
import { UserService } from '../../services/User.service';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-approved-travel-req',
  imports: [NgFor, NgClass, CurrencyPipe],
  templateUrl: './emp-approved-travel-req.component.html',
  styleUrl: './emp-approved-travel-req.component.css'
})
export class EmpApprovedTravelReqComponent {
  private router = inject(Router)
  private travelRequestService = inject(TravelRequestService);
  private userService = inject(UserService);
  currentUser = computed(() => this.userService.currentUser());
  myRequests = this.travelRequestService.getEmployeeApprovedTravelRequests( this.currentUser()!);  

  onRedirect(requestId: string) {
    this.router.navigate(['/employee', 'expense', requestId]);
  }
}
