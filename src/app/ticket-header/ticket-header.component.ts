import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-ticket-header',
  templateUrl: './ticket-header.component.html',
  styleUrls: ['./ticket-header.component.css']
})
export class TicketHeaderComponent {
  notAuthenticated = true;

  navigate(){
    this.router.navigate(["/dashboard"]);
  }
  constructor(private router: Router, public auth: AuthService){}
}
