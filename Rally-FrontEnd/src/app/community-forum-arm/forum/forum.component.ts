import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeserviceService } from 'src/app/services/themeservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
currentUser: string;
logInStatus: boolean;
darktheme: boolean;

constructor(private http: HttpClient, private router: Router, private themeservice: ThemeserviceService) {
  this.logInStatus = false;
  this.darktheme = false;
 }

ngOnInit(): void {
  this.verifyLoggedIn();
  this.checkTheme();
  this.experimenting();
}
checkTheme(){
    if (localStorage.getItem('theme') == 'dark'){
        this.Dark();
    }
    else {
      this.Light();
    }
}
verifyLoggedIn() {

  if (localStorage.getItem('userName') != null) {
    this.currentUser = localStorage.getItem('userName');
    this.logInStatus = true;
  }
}
Light(){
    this.darktheme = false;
    localStorage.setItem('theme', 'light')
}
Dark(){
  this.darktheme = true;
  localStorage.setItem('theme', 'dark')
}
logOut() {
  localStorage.removeItem('userName');
  console.log(localStorage.getItem('userName'))
  this.logInStatus = false;
}
async Search(searchInformation: NgForm){
  localStorage.setItem('searchTerm', searchInformation.value.description)
  this.router.navigate(["/forum/search"]);
}
experimenting = async () => {
  const resp = await fetch('http://localhost:8080/Posts');
  const data = await resp.json();

  console.log(data)
}
}
