import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  // currentUser;
  // logInStatus: Boolean;


  private eventUrl: string;
  eventDetails: Event;

  constructor(private http: HttpClient, private router: Router) {
    // this.logInStatus = false;
    this.eventUrl = 'http://localhost:8080/events/event/{id}/'
    this.eventDetails;

    
   }

  ngOnInit(): void {
    // this.verifyLoggedIn();


    this.http.get(this.eventUrl).subscribe((response: Event) => {
     
      this.eventDetails = response;
      console.log(response);
    })



  }

  // verifyLoggedIn() {

  //   if (localStorage.getItem('userName') != null) {
  //     this.currentUser = localStorage.getItem('userName');
  //     this.logInStatus = true;
  //   }

  
  // }

  // logOut() {
  //   localStorage.clear();
  //   console.log(localStorage.getItem('userName'))
  //   this.logInStatus = false;
  // }

}
