import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTS } from './mock-events';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class EventService {

  //private eventsUrl = 'https://azuwliobz7.execute-api.us-east-1.amazonaws.com/prod'; // URL to web api
  private eventsUrl = "https://5ces89rrk3.execute-api.us-east-1.amazonaws.com/prod";
  constructor(
    private http: HttpClient) { }

    // GET Events
    getEvents() : Observable<Event[]> {
      //console.log("Returning events")
      /** 
      return this.http.get<Event[]>(this.eventsUrl).pipe(map( (res) => {
        var events: Event[] = res
        //console.log(events)
        return events;
      }))*/
      return this.http.get<Event[]>(this.eventsUrl)
    }

    // Get Event by ID
    getEvent(id: number): Observable<Event> {
      console.log("fetching event with id", id)
      const url = `${this.eventsUrl}/events?id=${id}`;
      return this.http.get<Event>(url).pipe(map(
        res => {
          var result : Event  = res['Item'];
          // deserialize object 
          result['capacity']= result['capacity']['N']
          result['id']= result['id']['N']
          result['category']= result['category']['S']
          result['url']= result['url']['S']
          result['name']= result['name']['S']
          result['date']= result['date']['S']
          result['description']= result['description']['S']
          return result
        }
      ))

    }

    // Get Events by search term
    searchEvent(term: string): Observable<Event[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Event[]>(`${this.eventsUrl}/?name=${term}`);
    }

    // Creates tickets in the Tickets DB
    createTicket(user_email : string, id_event : number, n_tickets : number) {
      const url = `https://88xzhyosug.execute-api.us-east-1.amazonaws.com/prod`; // API
      const body = {
          "user_email": user_email,
          "n_tickets": n_tickets,
          "id_event": id_event
      }
      return this.http.post(url, body);
    }

  }
