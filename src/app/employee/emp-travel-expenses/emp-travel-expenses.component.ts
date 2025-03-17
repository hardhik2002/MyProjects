import { Component, computed, inject } from '@angular/core';
import { Expense, ExpenseStatus, TravelExpenseService } from '../../services/TravelExpense.service';
import { UserService } from '../../services/User.service';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-emp-travel-expenses',
  imports: [NgClass, CurrencyPipe, NgFor, NgIf],
  templateUrl: './emp-travel-expenses.component.html',
  styleUrl: './emp-travel-expenses.component.css'
})
export class EmpTravelExpensesComponent {
  private userService = inject(UserService);
  currentUser = computed(() => this.userService.currentUser());
  private travelExpensesService = inject(TravelExpenseService);;
  travelExpenses = this.travelExpensesService.getTravelExpensesByUser(this.currentUser()!);

  getStatusClass(status: ExpenseStatus) {
    switch (status) {
      case ExpenseStatus.SUBMITTED:
        return 'bg-warning text-dark';
      case ExpenseStatus.APPROVED:
        return 'bg-success';
      case ExpenseStatus.REJECTED:
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  updateExpenseStatus(expense: Expense, newStatus: string) {
    expense.status = newStatus as ExpenseStatus;
  }
}
