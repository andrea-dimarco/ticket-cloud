import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';
import { AuthService } from '@auth0/auth0-angular';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event : Event;
  selected;

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
    this.eventService.getEvent(id)
      .subscribe( (event) => this.event = event);
  }

  createTicket(n_tickets) : void {
    if(this.event.capacity >= n_tickets){
      var email = document.getElementById("top-secret").textContent;
      // make post request
      this.eventService.createTicket(email, this.event.id, n_tickets)
        .subscribe((res) => console.log(res))

        this.openSnackBar('Enjoy the show!', 'Close', 'my-snackbar');

        this.event.capacity = this.event.capacity - n_tickets;
    } else  {
      this.openSnackBar('Not enough tickets!!', 'Close', 'my-snackbar');
    }
  }

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 0,
      panelClass: [className]
    });
  }
}
