import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplyDTO } from '../../models/ReplyDTO';
import { ThemeserviceService } from 'src/app/services/themeservice.service';
import { map } from 'rxjs/operators';
import { ForumPost } from '../../models/ForumPost';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postId: number;
  postObject: ForumPost;
  currentUser: string;
  postReplyBoolean: boolean;
  logInStatus: Boolean;
  replies;
  updateDescription: boolean;
  editReplyDescription1;
  editAndDeleteButtons: boolean;
  postEditAndDeleteButtons: boolean;
  updatePostDescription: boolean;
  darktheme: boolean;
  isLoading: boolean;
  replyTooLong: boolean;
  constructor(private route: ActivatedRoute, private http: HttpClient, private themeservice: ThemeserviceService, private router: Router) { 
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.postReplyBoolean = false;
    this.logInStatus = false;
    this.replies = [];
    this.postObject;
    this.updateDescription = false;
    this.editAndDeleteButtons = true;
    this.postEditAndDeleteButtons = true;
    this.updatePostDescription = false;
    this.darktheme = false;
    this.isLoading = true;
    this.replyTooLong = false;
  }
  ngOnInit() {
    this.getPost();
    this.verifyLoggedIn();
    this.checkTheme();
  }
  checkTheme(){
    if (localStorage.getItem('theme') == 'dark'){
        this.Dark();
    }
    else{
      this.Light();
    }
  }
  getPost(){    
    this.http.get('http://localhost:8080/viewPost/' + this.postId).subscribe((post: ForumPost)=> {
        if(post != null){
          this.postObject = post;
          this.isLoading = false;
          this.postEditAndDeleteButtons = true;
          this.updatePostDescription = false;
        }
      })
      this.getReplies();
  }
  getReplies(){
    this.replies = [];
    this.http.get('http://localhost:8080/Replies').subscribe((res)=> {
        for(const k in res){
          if(res[k].forumPosts.id == this.postId){
            this.replies.push(res[k])
        }
      }
    })
  }
  deleteReply(idString){
    let parent = document.getElementById("parent" + idString);
    let child = document.getElementById(idString);
    parent.removeChild(child);
    this.http.post('http://localhost:8080/DeleteReply', +idString).subscribe((res) => {
      console.log(res);
    })
  }
  createReply(replyInformation: NgForm){
      this.replyTooLong = false;
      if (replyInformation.value.description.length > 245){
          this.replyTooLong = true;
      }
      else {
      this.postReplyBoolean = false;
      let replyDetails: ReplyDTO ={
        description: replyInformation.value.description,
        username: this.currentUser,
        id: this.postId
      }
      this.http.post(`http://localhost:8080/Replies`, replyDetails).subscribe((res) => {
    this.getPost();
    });
  }
  }
  populateForm(){
    this.postReplyBoolean = true;
  }
  cancelCreateReply(){
    this.postReplyBoolean = false;
  }
  editDescription(idString){
    this.editAndDeleteButtons = false;
    this.updateDescription = true;
    this.editReplyDescription1 = idString;
  }
  logOut() {
    localStorage.removeItem('userName');
    this.currentUser = null;
    console.log(localStorage.getItem('userName'));
    this.logInStatus = false;
  }
  verifyLoggedIn() {
    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  }
  updateDescription1(updateInformation: NgForm){
    this.replyTooLong = false;
    if (updateInformation.value.newDescription.length > 245){
        this.replyTooLong = true;
    }
    else {
    let newReplyDescription: ReplyDTO = {
        description: updateInformation.value.newDescription,
        username: updateInformation.value.username,
        id: this.editReplyDescription1
    }
    console.log(newReplyDescription.description)
    this.http.post(`http://localhost:8080/UpdateReply`, newReplyDescription).subscribe((res) => {
    console.log(res)
    this.editAndDeleteButtons = true;
    this.updateDescription = false;
    });
  }
  }
  editPost(){
    this.postEditAndDeleteButtons = false;
    this.updatePostDescription = true;
  }
  cancelPostDescription(){
    this.getPost();
  }
  cancelReplyDescription(){
    this.editAndDeleteButtons = true;
    this.updateDescription = false;
  }
  editPostWithNewDescription(updateDescription: NgForm){
    this.replyTooLong = false;
    if (updateDescription.value.newDescription.length > 245){
        this.replyTooLong = true;
    }
    else {
      let newPostDescription: ReplyDTO = {
        description: updateDescription.value.newDescription,
        username: this.postObject.userEntity.userName,
        id: this.postObject.id
      }
      console.log(newPostDescription)
      this.http.post(`http://localhost:8080/UpdatePost`, newPostDescription).subscribe((res) => {
        console.log(res)
        this.postEditAndDeleteButtons = true;
        this.updatePostDescription = false;
      })
    }
  }
  deletePost(idString){
    this.http.post('http://localhost:8080/DeletePost', +idString).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/forum/" + this.postObject.category.toLowerCase()]);
    })
  }
  Light(){
    this.darktheme = false;
    localStorage.setItem('theme', 'light')
}
Dark(){
  this.darktheme = true;
  localStorage.setItem('theme', 'dark')
}
}
