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

  // currentUser;
  // logInStatus: Boolean;


  private createEventUrl: string;
  private getEventUrl: string;
  id: string;
  event: Event;



  constructor(private http: HttpClient, private route: ActivatedRoute, private eventService: EventService) {
 // this.logInStatus = false;
    this.getEventUrl = 'http://localhost:8080/events/event/{id}/'
    this.createEventUrl = 'http://localhost:8080/events/create'
    this.event;
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    console.log(this.id);

    this.eventService.getEvent(this.id).subscribe((response: Event) => {
      this.event = response;
      console.log(response);
    
    })


  }

updateEvent() {
  this.eventService.updateEvent(this.id, this.event).subscribe((response: Event) => {
    this.event = response;
  })
}  

onSubmit() {
  this.updateEvent();
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
