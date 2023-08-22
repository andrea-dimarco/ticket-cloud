import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-header',
  templateUrl: './ticket-header.component.html',
  styleUrls: ['./ticket-header.component.css']
})
export class TicketHeaderComponent {
  notAuthenticated = false;

  navigate(){
    this.router.navigate(["/dashboard"]);
  }
  constructor(private router: Router){
  }
}
