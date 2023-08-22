import { Component, OnInit } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class AuthButtonComponent implements OnInit {
  ngOnInit(): void { }
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}
}


/*

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from 'src/app/models/users';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  title = "AngularHttpRequest"
  allUsers: User[]  = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  verifyLogin(login: {uEmail: string, uPassword: string}) {
    console.log(login);
    this.http.get<{[key: string]: User}>('https://ticketcloud-58d42-default-rtdb.europe-west1.firebasedatabase.app/users.json')
    .pipe(map( (response) => {
      const users = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          users.push({...response[key], id: key})
        }
      }
      return users;
  }))
    .subscribe((users) => {
        console.log(users);
        this.allUsers = users;
    });
  }
}
*/
