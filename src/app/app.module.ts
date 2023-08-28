import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom components
import { TicketHeaderComponent } from './ticket-header/ticket-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { LogInComponent } from './components/log-in/log-in.component';
import { AuthButtonComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component'
import { EventPageComponent } from './event-page/event-page.component';
import { EventSearchboxComponent } from './components/event-searchbox/event-searchbox.component';
import { FooterComponent } from './components/footer/footer.component';


// login
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

//Communication
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { PurchaseTicketComponent } from './purchase-ticket/purchase-ticket.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketHeaderComponent,
    DashboardComponent,
    //LogInComponent,
    AuthButtonComponent,
    RegisterComponent,
    EventPageComponent,
    EventSearchboxComponent,
    PurchaseTicketComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),
    
    // Authentication Module
    AuthModule.forRoot({
      domain: 'dev-8vt3dv36pv7fuamn.us.auth0.com',
      clientId: '7ZfKSIKVGOnlBjle30dW5Zi5MEh9pHx7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
