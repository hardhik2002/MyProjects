import { inject, Injectable, signal } from '@angular/core';
import { User, UserService, uuidv4 } from './User.service';

export enum TravelRequestStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface TravelRequest {
  requestId: string;
  user: User;
  tripPurpose: string;
  destination: string;
  startDate: string;
  endDate: string;
  estimatedBudget: number;
  status: TravelRequestStatus;
  approvedBy: User | null;
  approvalDate: string;
  initiated: boolean;
}

@Injectable({ providedIn: 'root' })
export class TravelRequestService {
  private userService = inject(UserService);
  private travelRequests = signal<TravelRequest[]>([
    {
      requestId: uuidv4(),
      user: this.userService.currentUsers()[3],
      tripPurpose: 'lol',
      destination: 'Pal',
      startDate: '2025-19-03',
      endDate: '2026-19-03',
      estimatedBudget: 25000,
      status: TravelRequestStatus.APPROVED,
      approvedBy: this.userService.currentUsers()[1],
      approvalDate: '2025-03-16',
      initiated: true,
    },
  ]);
  availableAllRequests = this.travelRequests.asReadonly();

  addTravelRequest(travelRequest: TravelRequest) {
    this.travelRequests.set([...this.travelRequests(), travelRequest]);
  }

  getEmployeeTravelRequests(employee: User) {
    return this.travelRequests().filter((req) => req.user.id === employee.id);
  }

  getEmployeeApprovedTravelRequests(emp: User) {
    return this.travelRequests().filter(
      (req) =>
        req.user.id === emp.id &&
        req.status === TravelRequestStatus.APPROVED &&
        req.initiated === true
    );
  }

  getTravelRequestById(id: string) {
    return (
      this.travelRequests().find(
        (req) => req.requestId === id && req.initiated === true
      ) ?? null
    );
  }

  getPendingInitiatedRequests() {
    return this.travelRequests().filter((req) => req.initiated === false);
  }

  approveInitialTravelRequest(requestId: string) {
    this.travelRequests.update((existingReq) =>
      existingReq.map((req) =>
        req.requestId === requestId ? { ...req, initiated: true } : req
      )
    );
  }
}
