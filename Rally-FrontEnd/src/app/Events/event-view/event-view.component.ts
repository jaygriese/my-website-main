import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EventDTO } from '../models/DTO/EventDTO';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  isLoading: boolean = true;

  currentUser;
  logInStatus: Boolean;

  private eventsUrl: string;

  eventList: Event[] = [];
  filtered: Event[] = [];



  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) {
    this.logInStatus = false;
    this.eventsUrl = 'http://localhost:8080/events/events/'
    this.eventList;
    this.filtered;
   }

  ngOnInit(): void {
    // this.verifyLoggedIn();
   

    // filterByConnect() {
    //   this.filtered = this.eventList.filter((obj) => {
    //     return obj.eventCategory === 'connect';
    //   });
      

  this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
    console.log(response);
    this.eventList = response;
  })

  

}

// filterByConnect() {
// this.filtered = this.eventList.filter((obj) => {
//   return obj.eventCategory === 'connect';
// });

}
 

// }



  // }

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



  

