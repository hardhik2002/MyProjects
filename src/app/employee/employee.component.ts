import { Component } from '@angular/core';
import { EmployeeSidebarComponent } from "./employee-sidebar/employee-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [EmployeeSidebarComponent, RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
