import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event : Event = {
    id: 0,
    name: "missing",
    description: "missing",
    category: "missing",
    url: "missing",
    date: "missing",
    capacity: 0
  };
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
  
  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(id)
      .subscribe( (event) => this.event = event);
  }
}
