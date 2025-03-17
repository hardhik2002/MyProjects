import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../services/User.service';
import {
  Expense,
  ExpenseStatus,
  TravelExpenseService,
} from '../../services/TravelExpense.service';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-td-travel-expenses',
  imports: [NgFor, CurrencyPipe, NgClass],
  templateUrl: './td-travel-expenses.component.html',
  styleUrl: './td-travel-expenses.component.css',
})
export class TdTravelExpensesComponent {
  private userService = inject(UserService);
  currentUser = computed(() => this.userService.currentUser());
  private travelExpensesService = inject(TravelExpenseService);
  travelExpenses = computed(() =>
    this.travelExpensesService.allTravelExpenses()
  );

  ngOnInit() {
    console.log(this.travelExpenses());
  }

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
