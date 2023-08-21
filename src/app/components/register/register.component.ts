import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  onRegistrationSubmitted(registration: {uEmail: string, uPassword: string}) {
    console.log(registration);
    this.http.post('https://ticketcloud-58d42-default-rtdb.europe-west1.firebasedatabase.app/users.json', registration)
    .subscribe((response) => {
        console.log(response);
    });
  }
}