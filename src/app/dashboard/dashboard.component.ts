import { Component } from '@angular/core';
import {EVENTS} from '../mock-events'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  events = EVENTS;
  sport_events = this.events.filter((el) => el.category == "Sport")
  music_event = this.events.filter((el) => el.category == "Music")
  show_event = this.events.filter((el) => el.category == "Show")
  other_event = this.events.filter((el) => el.category == "Other")

}
