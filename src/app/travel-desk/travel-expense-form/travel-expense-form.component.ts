import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  TravelRequest,
  TravelRequestService,
} from '../../services/TravelRequest.service';
import {
  Expense,
  ExpenseStatus,
  TravelExpenseService,
} from '../../services/TravelExpense.service';
import { UserService, uuidv4 } from '../../services/User.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-travel-expense-form',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './travel-expense-form.component.html',
  styleUrl: './travel-expense-form.component.css',
})
export class TravelExpenseFormComponent {
  id = input.required<string>();
  private travelRequestService = inject(TravelRequestService);
  private travelExpenseService = inject(TravelExpenseService);
  private userService = inject(UserService);
  private router = inject(Router);
  travelRequest = signal<TravelRequest | null>(null);
  user = computed(() => this.userService.currentUser());

  ngOnInit() {
    console.log(this.travelRequestService.getTravelRequestById(this.id()));
    this.travelRequest.set(
      this.travelRequestService.getTravelRequestById(this.id())
    );
  }

  expense = {
    expenseType: '',
    amount: null,
    currency: '',
    receiptUrl: '',
  };

  expenseTypes = ['Flight', 'Hotel', 'Meals', 'Transport', 'Miscellaneous'];

  onSubmit(form: NgForm) {
    console.log(this.travelRequest());
    console.log('Expense Submitted:', this.expense);
    const newExpense: Expense = {
      expenseId: uuidv4(),
      ...form.value,
      status: ExpenseStatus.SUBMITTED,
      request: this.travelRequest()!,
      user: this.travelRequest()?.user,
    };
    this.travelExpenseService.createTravelExpense(newExpense);
    alert('Expense Submitted Successfully!');
    this.router.navigate(['/travel-desk', 'expenses']);
  }
}
