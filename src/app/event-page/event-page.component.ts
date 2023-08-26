import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';
import { AuthService } from '@auth0/auth0-angular';

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
    public auth: AuthService
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
    console.log("AAAAAAAAAAAA");
    // make post request
                                // user_email, id_event,      n_tickets
    this.eventService.createTicket("pd", this.event.id, n_tickets)
      .subscribe((res) => console.log(res))
  }
}
