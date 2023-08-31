import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-searchbox',
  templateUrl: './event-searchbox.component.html',
  styleUrls: ['./event-searchbox.component.css']
})
export class EventSearchboxComponent implements OnInit {
  events$!: Observable<Event[]>;
  private searchTerms = new Subject<string>();
  constructor(private eventService: EventService) {}
  myControl = new FormControl('');
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  refresh() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  
  }
  ngOnInit(): void {
    this.events$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(500),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.eventService.searchEvent(term)),
    );
  }
}
