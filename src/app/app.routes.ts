import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { TravelRequestComponent } from './admin/travel-request/travel-request.component';
import { TravelDeskComponent } from './travel-desk/travel-desk.component';
import { TdHomeComponent } from './travel-desk/td-home/td-home.component';
import { HrComponent } from './hr/hr.component';
import { HrHomeComponent } from './hr/hr-home/hr-home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { EmpTravelReqComponent } from './employee/emp-travel-req/emp-travel-req.component';
import { EmpRequestsComponent } from './employee/emp-requests/emp-requests.component';
import { EmpTravelApprovalComponent } from './manager/emp-travel-approval/emp-travel-approval.component';
import { EmpApprovedTravelReqComponent } from './employee/emp-approved-travel-req/emp-approved-travel-req.component';
import { EmpTravelExpenseFormComponent } from './employee/emp-travel-expense-form/emp-travel-expense-form.component';
import { EmpTravelExpensesComponent } from './employee/emp-travel-expenses/emp-travel-expenses.component';
import { EmpExpenseApprovalComponent } from './manager/emp-expense-approval/emp-expense-approval.component';
import { TravelRequestsComponent } from './travel-desk/travel-requests/travel-requests.component';
import { TravelExpenseRequestsComponent } from './travel-desk/travel-expense-requests/travel-expense-requests.component';
import { TravelExpenseFormComponent } from './travel-desk/travel-expense-form/travel-expense-form.component';
import { TdTravelExpensesComponent } from './travel-desk/td-travel-expenses/td-travel-expenses.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'travel-desk',
    component: TravelDeskComponent,
    children: [
      {
        path: '',
        component: TdHomeComponent,
      },
    ],
  },
  {
    path: 'hr',
    component: HrComponent,
    children: [
      {
        path: '',
        component: HrHomeComponent,
      },
    ],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmpHomeComponent,
      },
      {
        path: 'travel-request',
        component: EmpTravelReqComponent,
      },
      {
        path: 'requests',
        component: EmpRequestsComponent,
      },
      {
        path: 'approved-requests',
        component: EmpApprovedTravelReqComponent,
      },
      {
        path: 'expense/:id',
        component: EmpTravelExpenseFormComponent,
      },
      {
        path: 'expenses',
        component: EmpTravelExpensesComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
    ],
  },
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      {
        path: '',
        component: ManagerHomeComponent,
      },
      {
        path: 'travel-requests',
        component: EmpTravelApprovalComponent,
      },
      {
        path: 'expense-requests',
        component: EmpExpenseApprovalComponent,
      },
    ],
  },
  {
    path: 'travel-desk',
    component: TravelDeskComponent,
    children: [
      {
        path: '',
        component: TdHomeComponent,
      },
      {
        path: 'travel-requests',
        component: TravelRequestsComponent,
      },
      {
        path: 'travel-expense-requests',
        component: TravelExpenseRequestsComponent,
      },
      {
        path: 'expense/:id',
        // component: EmpTravelExpenseFormComponent,
        component: TravelExpenseFormComponent,
      },
      {
        path: 'expenses',
        component: TdTravelExpensesComponent,
      },
    ],
  },
];
