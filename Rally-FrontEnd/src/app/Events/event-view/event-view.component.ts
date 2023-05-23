import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';
// import { MatCalendar } from '@angular/material/datepicker';


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
  filteredEvents: Event[] = [];

  // DateSelected: any;

  selected: Date | null;
  

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventsUrl = 'http://localhost:8080/events/events/'
    this.eventList;
    this.filteredEvents;
    // this.DateSelected;
    this.selected;
  

  

   }

  ngOnInit(): void {
    // this.verifyLoggedIn();
   
   
    this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
      console.log(response);
      this.eventList = response;
      this.allEvents();
    })

  
  }




  byDate() {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if(this.eventList[i].datetime.includes(this.selected.toISOString().slice(0,10))) {
        this.filteredEvents.push(this.eventList[i])
      } 
    }
    return this.filteredEvents;
  }


// byDate() {
//   this.filteredEvents.splice(0);
//   for(let i = 0; i < this.eventList.length; i++) {
//     if(this.eventList[i].datetime.includes(this.DateSelected)) {
//       this.filteredEvents.push(this.eventList[i])
//     } 
//   }
//   return this.filteredEvents;
// }


filter(string: string) {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };


  viewAll() {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      this.filteredEvents.push(this.eventList[i]);
    }
    return this.filteredEvents;
  }

  allEvents() {
    return this.viewAll();
  }

  // reset() {
  //   window.location.reload();
  // }


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



  

