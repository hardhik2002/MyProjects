import { Component } from '@angular/core';
import { TdSidebarComponent } from "./td-sidebar/td-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-travel-desk',
  imports: [TdSidebarComponent, RouterOutlet],
  templateUrl: './travel-desk.component.html',
  styleUrl: './travel-desk.component.css'
})
export class TravelDeskComponent {

}
