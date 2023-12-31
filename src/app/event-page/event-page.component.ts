import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';
import { AuthService } from '@auth0/auth0-angular';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event$ : Observable<Event>;
  selected;
  available_tickets : number

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    public auth: AuthService,
    private _snackBar: MatSnackBar 
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
  
  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event$ = this.eventService.getEvent(id)
    this.event$.subscribe(event => this.available_tickets = event.available_tickets)
    //console.log("number of tickets",this.available_tickets)
    this.getAvailableTickets(id)
  }
  getAvailableTickets(id : number) : void {
    this.eventService.getAvailableTickets(id).subscribe( available_tickets => this.available_tickets = available_tickets);

  }
  createTicket(n_tickets) : void {
    this.event$.subscribe( event => {
    if(this.available_tickets >= n_tickets){
      var email = document.getElementById("top-secret").textContent;
      // make post request
      this.eventService.createTicket(email, event.id, n_tickets)
        .subscribe((res) => console.log(res))

        this.openSnackBar('Enjoy the show!', 'Close', 'my-snackbar');

        this.available_tickets = this.available_tickets - n_tickets;
    } else  {
      this.openSnackBar('Not enough tickets!!', 'Close', 'my-snackbar');
    }
  })
  }

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 0,
      panelClass: [className]
    });
  }
}
