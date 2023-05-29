import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventComponent } from '../event/event.component';
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

  // private getEventUrl: string;
  private updateJoinUrl: string;
  private deleteJoinUrl: string;

  id: string;
  join: JoinEvent;
  event: Event;
  // eventId: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private eventService: EventService) { 

    this.logInStatus = false;

    // this.getEventUrl = 'http://localhost:8080/events/event'
    this.updateJoinUrl = 'http://localhost:8080/join/edit/event'
    this.deleteJoinUrl = 'http://localhost:8080/join/edit/delete'

    this.join;
    this.event;
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {


    this.verifyLoggedIn();
    //to authenticate user b4 making event

    console.log(this.id);

    // this.eventService.getEvent(this.id).subscribe((response: Event) => {
    //   this.event = response;
    //   console.log(response);
    // this.eventId = +this.event.id;
    // })

    this.eventService.getJoin(this.id).subscribe((response: JoinEvent) => {
      this.join = response;
      console.log(response);
    })


  }



  updateJoin(joinEventInformation: NgForm) {


    let updateJoin: JoinEventDTO = {
    id: this.join.id,

  
     
    event: this.event,
    // userName: localStorage.getItem("userName"),
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
    if(confirm("Are you sure you want to delete this sign-up?")) {
      this.eventService.deleteJoin(this.id).subscribe(data => {
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
