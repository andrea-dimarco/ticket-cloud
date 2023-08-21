import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTS } from './mock-events';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class EventService {

  getEvents() : Observable<Event[]> {
    const events = of(EVENTS);
    return events
  }
  getEvent(id: number) : Observable<Event> {
    const event = EVENTS.find(e => e.id === id)!;
    return of(event)
  }
  constructor() { }
}
