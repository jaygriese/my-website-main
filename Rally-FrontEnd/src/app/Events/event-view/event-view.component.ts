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


  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventsUrl = 'http://localhost:8080/events/events/'
    this.eventList;
    this.filteredEvents;

   }

  ngOnInit(): void {
    // this.verifyLoggedIn();
   
   

    // this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
    //   console.log(response);
    //   this.eventList = response;
    // })

    this.http.get(this.eventsUrl).subscribe((response: Event[]) => {
      console.log(response);
      this.eventList = response;
      // this.filteredEvents = this.eventList;
    })

    // this.filteredEvents = this.eventList;


  
  }
  


  // connect(string: string) {
  //   for(let i = 0; i < this.eventList.length; i++) {
  //     if ( this.eventList[i].eventCategory === string) {
  //       this.filteredEvents.push(this.eventList[i])
  //     }
  //   }

  //   // this.eventList = this.filteredEvents;
  //   console.log(this.filteredEvents)
  //   return this.filteredEvents;
 
  // };


  // connect(string: string) {
  //   // this.filteredEvents.splice(0);
  //   for(let i = 0; i < this.eventList.length; i++) {
  //     if ( this.eventList[i].eventCategory === string) {
  //       this.filteredEvents.push(this.eventList[i])
  //     }
  //   }

  //   // this.eventList = this.filteredEvents;
  //   console.log(this.filteredEvents)
  //   return this.filteredEvents;
 
  // };

  connect(string: string) {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    // this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  // connect() {
  //   return this.filteredEvents.filter((event) => {
  //     return event.eventCategory === 'connect';
  //   });
  //  }



  learn(string: string) {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    // this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };


  volunteer(string: string) {
    // this.filteredEvents = this.eventList;
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    // this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  donate(string: string) {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    // this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  celebrate(string: string) {
    this.filteredEvents.splice(0);
    for(let i = 0; i < this.eventList.length; i++) {
      if ( this.eventList[i].eventCategory === string) {
        this.filteredEvents.push(this.eventList[i])
      }
    }

    // this.eventList = this.filteredEvents;
    console.log(this.filteredEvents)
    return this.filteredEvents;
 
  };

  viewAll() {
    // this.filteredEvents.splice(0);
    return this.filteredEvents = this.eventList;
  }

  // reset() {
  //   window.location.reload();
  // }


  // viewAll(string: string) {
  //   for(let i = 0; i < this.eventList.length; i++) {
  //     if ( this.eventList[i].eventCategory === string) {
  //       this.filteredEvents.push(this.eventList[i])
  //     }
  //   }

  //   this.eventList = this.filteredEvents;
  //   console.log(this.filteredEvents)
  //   return this.filteredEvents;
 
  // };


  

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



  

