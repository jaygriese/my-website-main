import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Events/models/event';
import { EventDTO } from '../models/DTO/EventDTO';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  currentUser: String;
  //currentUser is String if logged in???
  logInStatus: Boolean;
  private eventUrl: string;



  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventUrl = 'http://localhost:8080/events/create'
   }

  ngOnInit(): void {
    this.verifyLoggedIn();
    //to authenticate user b4 making event
  }

  verifyLoggedIn() {

    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }

  
  }

  logOut() {
    // localStorage.clear();
    localStorage.removeItem('userName');
    console.log(localStorage.getItem('userName'))
    this.logInStatus = false;
  }



  registerNewEvent(eventInformation: NgForm) {
    let createNewEvent: EventDTO = {
      eventHost: eventInformation.value.eventHost,
      contactEmail: eventInformation.value.contactEmail,
      eventTitle: eventInformation.value.eventTitle, 
      datetime: eventInformation.value.datetime,
      eventAddress: eventInformation.value.eventAddress,
      eventCategory: eventInformation.value.eventCategory,
      description: eventInformation.value.description,
      imageId: eventInformation.value.imageId
    }

    console.log(createNewEvent);
    this.http.post(this.eventUrl, createNewEvent).subscribe((res) => {
      console.log(res)
    });

    eventInformation.reset();
   

  }

  // list() {
  //   this.router.navigate(['events']);
  // }





}
