import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../services/User.service';
import {
  TravelRequest,
  TravelRequestService,
  TravelRequestStatus,
} from '../../services/TravelRequest.service';
import { Expense, ExpenseStatus, TravelExpenseService } from '../../services/TravelExpense.service';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-expense-requests',
  imports: [NgClass, CurrencyPipe, NgFor],
  templateUrl: './travel-expense-requests.component.html',
  styleUrl: './travel-expense-requests.component.css',
})
export class TravelExpenseRequestsComponent {
  private router = inject(Router)
    private travelRequestService = inject(TravelRequestService);
    private userService = inject(UserService);
    currentUser = computed(() => this.userService.currentUser());
    myRequests = this.travelRequestService.availableAllRequests();  
  
    onRedirect(requestId: string) {
      this.router.navigate(['/travel-desk', 'expense', requestId]);
    }
}
