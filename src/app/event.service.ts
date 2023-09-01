import { Injectable } from '@angular/core';
import { Event } from './event';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class EventService {
  private events$: Observable<Event[]>;

  private eventsUrl = "https://zora0vpn60.execute-api.us-east-1.amazonaws.com/Prod/";
  constructor(
    private http: HttpClient) { 
      this.events$ = this.http.get<Event[]>(this.eventsUrl)
    }

    // GET Events
    getEvents() : Observable<Event[]> {
      return this.events$;
    }

    // Get Event by ID
    getEvent(id: number): Observable<Event> {
      if (this.events$) {
        //console.log(this.events)
        console.log("fetching from cache event with id", id)
        return this.events$.pipe(map(events => 
          events.find(event => event.id == id)))  
      }
      else {
        console.log("fetching from db event with id", id)
        const url = `${this.eventsUrl}/events?id=${id}`;
        return this.http.get<Event>(url).pipe(map(
          res => {
            var result : Event  = res['Item'];
            // deserialize object 
            result['available_tickets']= result['available_tickets']['N']
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

    }
    getAvailableTickets(id : number) : Observable<any> {
      const url = `${this.eventsUrl}/events/available-tickets?id=${id}`;
      return this.http.get<Event>(url)
    }
    // Get Events by search term
    searchEvent(term: string): Observable<Event[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.events$.pipe(
        map ((res : Event[]) => {
          return res.filter((event : Event) => 
            event.hasOwnProperty('name') && 
            event['name'].toString().toLowerCase().includes(term.toLowerCase())
            )
          })
        )
    }

    // Creates tickets in the Tickets DB
    createTicket(user_email : string, id_event : number, n_tickets : number) {
      const url = `https://e83nelpm1j.execute-api.us-east-1.amazonaws.com/Prod`; // API
      const body = {
          "user_email": user_email,
          "n_tickets": n_tickets,
          "id_event": id_event
      }
      return this.http.post(url, body);
    }

  }
