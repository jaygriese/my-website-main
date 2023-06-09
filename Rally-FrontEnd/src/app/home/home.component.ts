import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;

  //login 
  currentUser;
  logInStatus: Boolean;

  constructor() {

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
