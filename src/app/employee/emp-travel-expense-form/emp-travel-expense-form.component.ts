import { Component, computed, inject, input, signal } from '@angular/core';
import { TravelRequest, TravelRequestService } from '../../services/TravelRequest.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Expense, ExpenseStatus, TravelExpenseService } from '../../services/TravelExpense.service';
import { UserService, uuidv4 } from '../../services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-travel-expense-form',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './emp-travel-expense-form.component.html',
  styleUrl: './emp-travel-expense-form.component.css'
})
export class EmpTravelExpenseFormComponent {
  travelRequestId = input.required<string>();
  private travelRequestService = inject(TravelRequestService);
  private travelExpenseService = inject(TravelExpenseService);
  private userService = inject(UserService);
  private router = inject(Router);
  travelRequest = signal<TravelRequest | null>(null);
  user = computed(() => this.userService.currentUser());

  ngOnInit() {
    this.travelRequest.set(this.travelRequestService.getTravelRequestById(this.travelRequestId()));
  }

  expense = {
    expenseType: '',
    amount: null,
    currency: '',
    receiptUrl: '',
  };

  expenseTypes = ['Flight', 'Hotel', 'Meals', 'Transport', 'Miscellaneous'];

  onSubmit(form: NgForm) {
    console.log('Expense Submitted:', this.expense);
    const newExpense: Expense = {
      expenseId: uuidv4(),
      ...form.value,
      status: ExpenseStatus.SUBMITTED,
      request: this.travelRequest()!,
      user: this.user()!
    }
    this.travelExpenseService.createTravelExpense(newExpense);
    alert('Expense Submitted Successfully!');
    this.router.navigate(['/employee', 'expenses']);
  }
}
