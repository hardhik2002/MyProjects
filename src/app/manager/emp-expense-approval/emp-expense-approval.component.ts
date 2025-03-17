import { Component, computed, inject } from '@angular/core';
import { Expense, ExpenseStatus, TravelExpenseService } from '../../services/TravelExpense.service';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-emp-expense-approval',
  imports: [NgIf, NgFor, NgClass, CurrencyPipe],
  templateUrl: './emp-expense-approval.component.html',
  styleUrl: './emp-expense-approval.component.css'
})
export class EmpExpenseApprovalComponent {
  private travelExpensesService = inject(TravelExpenseService);
  allExpenses = computed(() => this.travelExpensesService.allTravelExpenses());
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
