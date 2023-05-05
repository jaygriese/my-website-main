import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { EventViewComponent } from '../event-view/event-view.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  // currentUser;
  // logInStatus: Boolean;


  // private eventUrl: string;
  id: string;
  eventDetails: Event;

  constructor(private http: HttpClient, private route: ActivatedRoute, private eventService: EventService) {
    // this.logInStatus = false;
    // this.eventUrl = 'http://localhost:8080/events/event/{id}/'
    this.eventDetails;
    this.id;

    
   }

  ngOnInit(): void {
    // this.verifyLoggedIn();

    // this.eventDetails = new Event();

    this.id = this.route.snapshot.params['id'];

    this.eventService.getEvent(this.id).subscribe((response: Event) => {
      this.eventDetails = response;
      console.log(response);
    })


    // this.http.get(this.eventUrl).subscribe((response: Event) => {
     
    //   this.eventDetails = response;
    //   console.log(response);
    // })



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
