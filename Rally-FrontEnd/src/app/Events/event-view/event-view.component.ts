import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EventDTO } from '../models/DTO/EventDTO';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EventComponent } from '../event/event.component';
import { EventService } from '../services/event.service';
import { EventFilterService } from '../services/event-filter.service';

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

  public eventList: Event[] = [];
  public filtered: Event[] = [];



  constructor(private http: HttpClient, private router: Router, private eventService: EventService, private eventFilterService: EventFilterService) {
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

  // if (connect()) {

  }

  

  

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


// filterByConnect() {
//   return this.eventFilterService.getEventByConnect();
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



  

