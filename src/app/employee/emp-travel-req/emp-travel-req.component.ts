import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  TravelRequest,
  TravelRequestService,
  TravelRequestStatus,
} from '../../services/TravelRequest.service';
import { UserService, uuidv4 } from '../../services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-travel-req',
  imports: [NgIf, FormsModule],
  templateUrl: './emp-travel-req.component.html',
  styleUrl: './emp-travel-req.component.css',
})
export class EmpTravelReqComponent {
  private travelReqService = inject(TravelRequestService);
  private userServicee = inject(UserService);
  private router = inject(Router);

  currentUser = computed(() => this.userServicee.currentUser());
  formData = {
    tripPurpose: '',
    destination: '',
    startDate: '',
    endDate: '',
    estimatedBudget: null,
    approvalDate: '',
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      const newTravelRequest: TravelRequest = {
        requestId: uuidv4(),
        ...form.value,
        user: this.currentUser()!,
        status: TravelRequestStatus.PENDING,
        approvedBy: null,
        initiated: false,
      };
      this.travelReqService.addTravelRequest(newTravelRequest);
      this.router.navigate(['/employee', 'requests']);
    }
  }
}
