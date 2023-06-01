import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDTO } from '../models/DTO/EventDTO';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  currentUser: String;
  logInStatus: Boolean;
  private eventUrl: string;



  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.eventUrl = 'http://localhost:8080/events/create'

   }

  ngOnInit(): void {
    this.verifyLoggedIn();
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

  getIdNum(str: string) {
    let num: number = parseInt(str);
    return num;
}


  registerNewEvent(eventInformation: NgForm) {
    let createNewEvent: EventDTO = {
      id: 0,
      userName: localStorage.getItem("userName"),
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

    // eventInformation.reset();

    this.router.navigate(['/events'])
  .then(() => {
    window.location.reload();
  });
   

  }

 





}
