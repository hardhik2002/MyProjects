import { Component, computed, inject } from '@angular/core';
import { UserService, uuidv4 } from '../../services/User.service';
import {
  TravelRequest,
  TravelRequestService,
  TravelRequestStatus,
} from '../../services/TravelRequest.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ExpenseStatus,
  ExpenseType,
  TravelExpenseService,
} from '../../services/TravelExpense.service';

@Component({
  selector: 'app-emp-travel-approval',
  imports: [NgClass, NgFor],
  templateUrl: './emp-travel-approval.component.html',
  styleUrl: './emp-travel-approval.component.css',
})
export class EmpTravelApprovalComponent {
  private userService = inject(UserService);
  user = computed(() => this.userService.currentUser());
  private travelRequestService = inject(TravelRequestService);
  private travelExpenseService = inject(TravelExpenseService);

  getRequests = computed(() =>
    this.travelRequestService
      .availableAllRequests()
      .filter((req) => req.initiated === true)
  );

  updateStatus(request: TravelRequest, newStatus: string) {
    request.status = newStatus as TravelRequestStatus;
    request.approvalDate =
      newStatus === TravelRequestStatus.APPROVED
        ? new Date().toISOString().split('T')[0]
        : '';
    request.approvedBy =
      newStatus === TravelRequestStatus.APPROVED ? this.user() : null;
  }
}
