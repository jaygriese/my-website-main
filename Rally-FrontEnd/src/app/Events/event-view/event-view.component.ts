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

  isValue: number = 0;

// filterButtons = [
//   {text: 'connect', isClicked: false},
//   {text: 'learn', isClicked: false},
//   {text: 'volunteer', isClicked: false},
//   {text: 'donate', isClicked: false},
//   {text: 'celebrate', isClicked: false},
// ]



  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventsUrl = 'http://localhost:8080/events/events/'
    this.eventList;
    this.filteredEvents;
    this.isValue;

   }

  ngOnInit(): void {
    // this.verifyLoggedIn();
   
   

    this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
      console.log(response);
      this.eventList = response;
    })

  
  }
  

  connect(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };


  learn(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };


  volunteer(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  donate(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  celebrate(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };


  viewAll(string: string) {
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  toggle1() {this.isValue = 1;}
  toggle2() {this.isValue = 2;}

  // setActive(button: any): void {
  //   for(let but of this.filterButtons) {
  //     but.isClicked = false;
  //   }
  //   button.isClicked = true;
  // }

  // btnFilter() {
  //   this.btnActive = true;
  // }
  

}

// onClick() {
//   this.router.navigate(["'http://localhost:4200/event/?id=' + event.id"]);
// }

// onClick() {
//   this.router.navigateByUrl("'/event/?id=' + event.id");
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



  

