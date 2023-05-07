import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {
  // @HostListener('click', ['filterByConnect'])
  // onClick
  // filterByConnect() {
  //   this.filtered = this.eventList.filter((obj) => {
  //     return obj.eventCategory === 'connect';
  //   });
    
  //   }

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
    // return this.filteredEvents;
    console.log(this.filteredEvents)

 
  };
  

}

// onClick() {
//   this.router.navigate(["'http://localhost:4200/event/?id=' + event.id"]);
// }

// onClick() {
//   this.router.navigateByUrl("'/event/?id=' + event.id");
// }

// filterByConnect() {
// this.filtered = this.eventList.filter((obj) => {
//   return obj.eventCategory === 'connect';
// });

// }








// }
 

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



  

