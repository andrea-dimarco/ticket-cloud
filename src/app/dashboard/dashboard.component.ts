import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  events: Event[] = [];
  categories = ["Music", "Sport", "Show", "Other"]

  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.getEvents()
  }
  
  getEvents(): void {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
      //console.log(res)
      //console.log(this.events)
    })
  }

  filterEvents(category) {
    return this.events.filter(event => event.category == category)
  }

}
