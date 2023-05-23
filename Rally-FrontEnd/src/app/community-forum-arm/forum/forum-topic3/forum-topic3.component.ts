import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeserviceService } from '../../../services/themeservice.service';
import { NgForm } from '@angular/forms';
import { ForumPostDTO } from '../../models/ForumPostDTO';
import { UserEntity } from 'src/app/user-profile-arm/models/UserEntity';

@Component({
  selector: 'app-forum-topic3',
  templateUrl: './forum-topic3.component.html',
  styleUrls: ['./forum-topic3.component.css']
})
export class ForumTopic3Component implements OnInit {
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
    this.newArray = [];
    this.forumTopic = "ForumTopic3"
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
    this.newArray = this.themeservice.getForumTopicPosts(this.forumTopic);
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
