import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { EventComponent } from '../event/event.component';
import { EventService } from '../services/event.service';
import { EventDTO } from '../models/DTO/EventDTO';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  currentUser;
  logInStatus: Boolean;


  private updateEventUrl: string;
  private getEventUrl: string;
  id: string;
  event: Event;
  // buttonType: string;



  constructor(private http: HttpClient, private route: ActivatedRoute, private eventService: EventService) {
 this.logInStatus = false;
    this.getEventUrl = 'http://localhost:8080/events/event/{id}/'
    this.updateEventUrl = 'http://localhost:8080/events/edit/event/{id}'
    this.event;
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.verifyLoggedIn();

    console.log(this.id);

    this.eventService.getEvent(this.id).subscribe((response: Event) => {
      this.event = response;
      console.log(response);
    
    })


  }

// updateEvent() {
//   this.eventService.updateEvent(this.id, this.event).subscribe((response: Event) => {
//     this.event = response;
//   })
// }  

// onSubmit() {
//   this.updateEvent;
// }

// deleteEvent() {
//   // this.event.eventTitle = "delete";

// }

// onSubmit(buttonType: string): void {
//   if(buttonType==="update") {
//     this.updateEvent();
//   } else if(buttonType==="delete") {
//     this.deleteEvent();
//   }
// }



// getIdNum(str: string) {
//   let num: number = parseInt(str);
//   console.log(typeof num);
//   return num;
// }


updateEvent(eventInformation: NgForm) {
  let updateEvent: EventDTO = {

    // id: this.getIdNum(localStorage.getItem('id')),
    eventHost: eventInformation.value.eventHost,
    contactEmail: eventInformation.value.contactEmail,
    eventTitle: eventInformation.value.eventTitle, 
    datetime: eventInformation.value.datetime,
    eventAddress: eventInformation.value.eventAddress,
    eventCategory: eventInformation.value.eventCategory,
    description: eventInformation.value.description,
    imageId: eventInformation.value.imageId
  }

  console.log(updateEvent);
  this.http.post(this.updateEventUrl, updateEvent).subscribe((res) => {
    console.log(res)
  });

  eventInformation.reset();
 

}


    verifyLoggedIn() {

    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }

  
  }

  logOut() {
    // localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus = false;
  }

}
