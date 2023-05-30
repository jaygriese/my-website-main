import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { EventComponent } from '../event/event.component';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { JoinEvent } from '../models/JoinEvent';
import { JoinEventDTO } from '../models/DTO/JoinEventDTO';

@Component({
  selector: 'app-join-edit',
  templateUrl: './join-edit.component.html',
  styleUrls: ['./join-edit.component.css']
})

export class JoinEditComponent implements OnInit {

  currentUser: String;
  //currentUser is String if logged in???
  logInStatus: Boolean;

  private getJoinUrl: string;
  private updateJoinUrl: string;
  private deleteJoinUrl: string;

  id: string;
  event: Event;
  eventId: number;
 
  joinedEvents: JoinEvent [] = [];
  join: JoinEvent;
  
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private eventService: EventService) { 

    this.logInStatus = false;

   
    this.getJoinUrl = 'http://localhost:8080/join/join/'
    this.updateJoinUrl = 'http://localhost:8080/join/edit/join';
    this.deleteJoinUrl = 'http://localhost:8080/join/edit/delete';
 
    this.id = this.route.snapshot.params['id'];
    this.event;
    this.eventId;
    
    this.joinedEvents;
    this.join;

  }

  ngOnInit(): void {


    this.verifyLoggedIn();
    //to authenticate user b4 making event


    console.log(this.id);

    this.eventService.getEvent(this.id).subscribe((response: Event) => {
      this.event = response;
      console.log(response);
    this.eventId = +this.event.id;
    console.log(typeof(this.eventId));
    })



    this.http.get(this.getJoinUrl).subscribe((response: JoinEvent[]) => {
      console.log(response);
      this.joinedEvents = response;

      this.getJoin();
  
     
    })


  }

  getJoin() {
    for(let i = 0; i < this.joinedEvents.length; i++) { 
      if(this.joinedEvents[i].userName === localStorage.getItem('userName') && this.joinedEvents[i].event.id === this.event.id) {
        this.join = this.joinedEvents[i];
        console.log(this.join);
      }
    }
    return this.join;
  }



  updateJoin(joinEventInformation: NgForm) {


    let updateJoin: JoinEventDTO = {
    id: this.join.id,
    userName: localStorage.getItem("userName"),
    event: this.event,
    attending: joinEventInformation.value.attending,
    contactEmail: joinEventInformation.value.contactEmail,
    numAttending: joinEventInformation.value.numAttending, 
    comment: joinEventInformation.value.comment
    }
  
    console.log(updateJoin);
    this.http.post(this.updateJoinUrl, updateJoin).subscribe((res) => {
      console.log(res)
    });
  
    joinEventInformation.reset();
   
  
  }

 
  
  deleteJoin() {
    if(confirm("Are you sure you don't want to attend this event?")) {
      this.http.post(this.deleteJoinUrl, this.join.id).subscribe(data => {
      // this.eventService.deleteJoin(this.join.id).subscribe(data => {
        console.log(data);
      })
      this.router.navigate(["/events"])
    .then(() => {
      window.location.reload();
    });
    }
   
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



}
