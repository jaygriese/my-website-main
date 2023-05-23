import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources-home',
  templateUrl: './resources-home.component.html',
  styleUrls: ['./resources-home.component.css']
})
export class ResourcesHomeComponent implements OnInit {
currentUser;
logInStatus: Boolean;

constructor(private http: HttpClient, private router: Router) {
  this.logInStatus = false;
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
  localStorage.clear();
  console.log(localStorage.getItem('userName'))
  this.logInStatus = false;
}
}
