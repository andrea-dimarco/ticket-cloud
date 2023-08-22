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
  sport_events : Event[] = [];
  music_events : Event[] = [];
  show_events : Event[] = [];
  other_events : Event[] = [];


  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.getEvents()
  }
  
  getEvents(): void {
    this.eventService.getEvents().subscribe(res => {
      this.events = res;
      this.sport_events = this.events.filter((el) => el.category == "Sport")
      this.music_events = this.events.filter((el) => el.category == "Music")
      this.show_events = this.events.filter((el) => el.category == "Show")
      this.other_events = this.events.filter((el) => el.category == "Other")  
      console.log(res)
      console.log(this.events)
    })
  }

}
