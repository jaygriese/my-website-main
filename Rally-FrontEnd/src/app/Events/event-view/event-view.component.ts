import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';


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

  formattedDate: any;

  

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventsUrl = 'http://localhost:8080/events/events/'
    this.eventList;
    this.filteredEvents;
    // this.DateSelected;
    this.selected;
    this.formattedDate;
    // this.formattedDate = this.selected().toString();
    // this.formattedDate = new Date().toISOString;

    
  

   }

  ngOnInit(): void {
    // this.verifyLoggedIn();
   
   
    this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
      console.log(response);
      this.eventList = response;
      this.allEvents();
    })

    // this.selected = new Date();
    // this.formattedDate = this.selected.toISOString();
    // console.log("the date object after converting to string using the toString() method: " + this.formattedDate)
    // console.log(typeof(this.formattedDate));


  
  }



  byDate() {
    this.selected = new Date();
    this.formattedDate = this.selected.toISOString();
    console.log("the date object after converting to string using the toString() method: " + this.formattedDate)
    console.log(typeof(this.formattedDate));
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if(this.eventList[i].datetime.includes(this.formattedDate)) {
        this.filteredEvents.push(this.eventList[i])
      } 
    }
    console.log(this.formattedDate);
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



  

