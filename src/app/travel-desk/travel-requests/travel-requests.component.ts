import { Component, computed, inject } from '@angular/core';
import {
  TravelRequest,
  TravelRequestService,
  TravelRequestStatus,
} from '../../services/TravelRequest.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-travel-requests',
  imports: [NgIf, NgClass, NgFor],
  templateUrl: './travel-requests.component.html',
  styleUrl: './travel-requests.component.css',
})
export class TravelRequestsComponent {
  private travelRequestService = inject(TravelRequestService);
  travelRequests = computed(() =>
    this.travelRequestService.availableAllRequests()
  );

  approveInitialRequest(request: TravelRequest): void {
    // if (request.status === TravelRequestStatus.PENDING) {
    // request.status = TravelRequestStatus.APPROVED;
    // request.approvedBy = this.loggedInUser;
    // request.approvalDate = new Date().toISOString().split('T')[0];
    // }
    this.travelRequestService.approveInitialTravelRequest(request.requestId);
  }
}
