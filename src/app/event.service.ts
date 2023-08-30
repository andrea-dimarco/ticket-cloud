import { Injectable } from '@angular/core';
import { Event } from './event';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class EventService {
  private events: Observable<Event[]>;
  private search_result : Event[] | undefined;
  //private eventsUrl = 'https://azuwliobz7.execute-api.us-east-1.amazonaws.com/prod'; // URL to web api
  private eventsUrl = "https://5ces89rrk3.execute-api.us-east-1.amazonaws.com/prod";
  constructor(
    private http: HttpClient) { }

    // GET Events
    getEvents() : Observable<Event[]> {
      this.events = this.http.get<Event[]>(this.eventsUrl)
      return this.events;
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
      this.events.pipe(
        map ((res : Event[]) => {
          return res.filter((event : Event) => 
            event.hasOwnProperty('name') && 
            event['name'].toString().toLowerCase().includes(term.toLowerCase())
            )
          })
        ).subscribe(result => {this.search_result = result})
      console.log("search term is ", term) 
      console.log( "result is ", this.search_result)
      var result = this.search_result
      this.search_result = undefined
      return of(result)
      //this.http.get<Event[]>(`${this.eventsUrl}/?name=${term}`);
      
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
