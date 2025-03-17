import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-home',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  travelForm: FormGroup;
  expensesForm: FormGroup;
  travelRequests: any[] = [];
  expenses: any[] = [];

  statuses = ['Pending', 'Approved', 'Rejected'];
  expenseTypes = ['Flight', 'Hotel', 'Meals', 'Transport', 'Miscellaneous'];

  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
      fullName: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      tripPurpose: ['', Validators.required],
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      estimatedBudget: ['', [Validators.required, Validators.min(1)]],
      status: ['Pending'],
    });

    this.expensesForm = this.fb.group({
      expenseType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      currency: ['', Validators.required],
      receipt: [null, Validators.required],
      status: ['Submitted'],
    });
  }

  submitTravelRequest() {
    if (this.travelForm.valid) {
      this.travelRequests.push(this.travelForm.value);
      this.travelForm.reset();
    }
  }

  submitExpense() {
    if (this.expensesForm.valid) {
      this.expenses.push(this.expensesForm.value);
      this.expensesForm.reset();
    }
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    this.expensesForm.patchValue({ receipt: file.name });
  }
}
