import { Component } from '@angular/core';
import { HrSidebarComponent } from "./hr-sidebar/hr-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hr',
  imports: [HrSidebarComponent, RouterOutlet],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.css'
})
export class HrComponent {

}
