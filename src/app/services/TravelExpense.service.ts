import { Injectable, signal } from "@angular/core";
import { TravelRequest } from "./TravelRequest.service";
import { User } from "./User.service";

export enum ExpenseType {
    FLIGHT = 'Flight',
    HOTEL = 'Hotel',
    MEALS = 'Meals',
    TRANSPORT = 'Transport',
    MISCELLANEOUS = 'Miscellaneous'
}

export enum ExpenseStatus {
    SUBMITTED = 'Submitted',
    APPROVED = 'Approved',
    REJECTED = 'Rejected'
}

export interface Expense{
    expenseId: string;
    request: TravelRequest,
    user: User,
    expenseType: ExpenseType,
    amount: number;
    currency: string;
    receiptUrl: string;
    status: ExpenseStatus
}

@Injectable({providedIn: 'root'})
export class TravelExpenseService {
    private travelExpenses = signal<Expense[]>([]);
    allTravelExpenses = this.travelExpenses.asReadonly();

    createTravelExpense(expense: Expense) {
        this.travelExpenses.set([...this.travelExpenses(), expense]);
    }

    getTravelExpensesByUser(user: User) {
        return this.travelExpenses().filter(te => te.user.id === user.id);
    }
}