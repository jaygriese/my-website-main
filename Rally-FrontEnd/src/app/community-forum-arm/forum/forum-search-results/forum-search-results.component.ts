import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeserviceService } from 'src/app/services/themeservice.service';

@Component({
  selector: 'app-forum-search-results',
  templateUrl: './forum-search-results.component.html',
  styleUrls: ['./forum-search-results.component.css']
})
export class ForumSearchResultsComponent implements OnInit {

  currentUser: String;
  logInStatus: Boolean;
  darktheme: Boolean;
  testArray;
  newArray;
  createPostBoolean: boolean;
  constructor(private http: HttpClient, private router: Router, private themeservice: ThemeserviceService) {
    this.logInStatus = false;
    this.createPostBoolean = false;
    this.darktheme = false;
    this.testArray;
    this.newArray = [];
   }
  
  ngOnInit(): void {
    this.verifyLoggedIn();
    this.checkTheme();
    this.getPosts();
  }
  checkTheme(){
      if (localStorage.getItem('theme') == 'dark'){
          this.Dark();
      }
  }
  getPosts(){
    if (localStorage.getItem('searchTerm') != null){
    this.themeservice.getAllForumPosts().subscribe((posts) =>{
      this.newArray = this.themeservice.searchPosts(posts)
      if(this.newArray.length == 0){
        document.getElementById("title").innerHTML = "No Results"
      }}) 
    }
    else {
      document.getElementById("title").innerHTML = "No Results"
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
    console.log(localStorage.getItem('userName'));
    this.logInStatus = false;
  }
}
