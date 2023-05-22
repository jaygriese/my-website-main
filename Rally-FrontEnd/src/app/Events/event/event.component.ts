import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { EventViewComponent } from '../event-view/event-view.component';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { Component, Input} from '@angular/core'

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
  // mapUrl: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private eventService: EventService) {
    // this.logInStatus = false;
    // this.eventUrl = 'http://localhost:8080/events/event/{id}/'
    this.eventDetails;
    this.id = this.route.snapshot.params['id'];
    // this.mapUrl = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyAh6PKyQT9CBCOKjubHp1_0DCk58freoL0&q=st_louis_mo' 

    
   }

  ngOnInit(): void {
    // this.verifyLoggedIn();

    // this.eventDetails = new Event();

    // this.id = this.route.snapshot.params['id'];

    console.log(this.id);

    this.eventService.getEvent(this.id).subscribe((response: Event) => {
      this.eventDetails = response;
      console.log(response);
    
    })



  }

//   openDelete() {
//     const modelDiv = document.getElementById('deleteModal');
//     if(modelDiv!=null) {
//       modelDiv.style.display = 'block';
//     }

//   }

//   closeDelete() {
//     const modelDiv = document.getElementById('deleteModal');
//     if(modelDiv!=null) {
//       modelDiv.style.display = 'none';
//     }

//   }

// noDelete() {
//   const deleteDiv = document.getElementById('noDelete');
//   if(deleteDiv!=null) {
//     deleteDiv.style.display = 'none';
//   }
// }

// yesDelete() {
//   const yesDeleteDiv = document.getElementById('yesDelete');
//   if(yesDeleteDiv!=null) {
//     this.deleteEvent();
//   }
// }


// deleteEvent() {
//   this.eventService.deleteEvent(this.id).subscribe(data => {
//     console.log(data);
//   })
//   this.router.navigate(["/events"]);
// }

deleteEvent() {
  if(confirm("Are you sure you want to delete this event?")) {
    this.eventService.deleteEvent(this.id).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(["/events"])
  .then(() => {
    window.location.reload();
  });
  }
 
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
