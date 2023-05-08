import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeserviceService } from 'src/app/services/themeservice.service';
import { ForumPost } from '../../models/ForumPost';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-forum-topic2',
  templateUrl: './forum-topic2.component.html',
  styleUrls: ['./forum-topic2.component.css']
})
export class ForumTopic2Component implements OnInit {
  forumTopic: string;
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
    this.forumTopic = "topic2";
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
  createPostButton(){
      this.createPostBoolean = true;
  }
  verifyLoggedIn() {
  
    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  
  }
  createPost(postInformation: NgForm){
      this.createPostBoolean = false;
      this.themeservice.createAPost(postInformation, this.forumTopic);
  }

  getPosts(){
    this.themeservice.getForumTopicPosts(this.forumTopic).subscribe((posts) =>{
      this.newArray = this.themeservice.sortPosts(posts)})
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
  Search(searchInformation: NgForm){
    localStorage.setItem('searchTerm', searchInformation.value.description)
    this.router.navigate(["/forum/search"]);
  }
}
