import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinDTO } from '../models/DTO/JoinDTO';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
  styleUrls: ['./event-join.component.css']
})
export class EventJoinComponent implements OnInit {

  currentUser: String;
  //currentUser is String if logged in???
  logInStatus: Boolean;
  private joinUrl: string;

  constructor(private http: HttpClient, private router: Router) { 

    this.logInStatus = false;
    this.joinUrl = 'http://localhost:8080/events/join'

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

  getIdNum(str: string) {
    let num: number = parseInt(str);
    return num;
}


joinEvent(eventJoinInformation: NgForm) {
  let joinEvent: JoinDTO = {
    id: 0,
   
    event: eventJoinInformation.value.event,
    name: eventJoinInformation.value.name,
    contactEmail: eventJoinInformation.value.contactEmail,
    numAttending: eventJoinInformation.value.numAttending, 
    comment: eventJoinInformation.value.comment
  }

  console.log(joinEvent);
  this.http.post(this.joinUrl, joinEvent).subscribe((res) => {
    console.log(res)
  });


  this.router.navigate(['/join'])
.then(() => {
  window.location.reload();
});

}

}
