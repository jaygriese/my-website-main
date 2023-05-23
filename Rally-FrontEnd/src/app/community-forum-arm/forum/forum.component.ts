import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeserviceService } from 'src/app/services/themeservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
currentUser: String;
logInStatus: Boolean;
darktheme: Boolean;
constructor(private http: HttpClient, private router: Router, private themeservice: ThemeserviceService) {
  this.logInStatus = false;
  this.darktheme = false;
 }

ngOnInit(): void {
  this.verifyLoggedIn();
  this.checkTheme();
}
checkTheme(){
    if (localStorage.getItem('theme') == 'dark'){
        this.Dark();
    }
}
verifyLoggedIn() {

  if (localStorage.getItem('userName') != null) {
    this.currentUser = localStorage.getItem('userName');
    this.logInStatus = true;
  }
}
Light(){
    this.themeservice.switchToLightTheme();
    this.darktheme = false;
}
Dark(){
  this.themeservice.switchToDarkTheme();
  this.darktheme = true;
}
logOut() {
  localStorage.removeItem('userName');
  console.log(localStorage.getItem('userName'))
  this.logInStatus = false;
}

}
