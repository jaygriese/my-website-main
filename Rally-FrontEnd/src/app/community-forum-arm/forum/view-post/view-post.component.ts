import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplyDTO } from '../../models/ReplyDTO';
import { ThemeserviceService } from 'src/app/services/themeservice.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postId: number;
  postObject;
  currentUser: string;
  postReplyBoolean: boolean;
  logInStatus: Boolean;
  replies;
  updateDescription: boolean;
  editReplyDescription1;
  editAndDeleteButtons: boolean;
  postEditAndDeleteButtons: boolean;
  updatePostDescription: boolean;
  constructor(private route: ActivatedRoute, private http: HttpClient, private themeservice: ThemeserviceService, private router: Router) { 
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.postReplyBoolean = false;
    this.logInStatus = false;
    this.replies = [];
    this.updateDescription = false;
    this.editAndDeleteButtons = true;
    this.postEditAndDeleteButtons = true;
    this.updatePostDescription = false;
  }
  
  ngOnInit(): void {
    this.getPost();
    this.verifyLoggedIn();
    this.getReplies();
  }
  
  getPost(){    
      this.http.post('http://localhost:8080/viewPost', this.postId).subscribe((res)=> {
        this.postObject = res;
      })
  }
  getReplies(){
      this.http.get('http://localhost:8080/Replies').subscribe((res)=> {
        console.log(res)
        for(const k in res){
          if(res[k].forumPosts.id == this.postId){
              this.replies.push(res[k])
          }
        }
      })

    console.log(this.replies)
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
      this.postReplyBoolean = false;
      let replyDetails: ReplyDTO ={
        description: replyInformation.value.description,
        username: this.currentUser,
        id: this.postId
      }
      this.http.post(`http://localhost:8080/Replies`, replyDetails).subscribe((res) => {
    console.log(res)
});
    window.location.reload();
  }
  populateForm(){
    this.postReplyBoolean = true;
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
  editPost(){
    this.postEditAndDeleteButtons = false;
    this.updatePostDescription = true;
  }
  editPostWithNewDescription(updateDescription: NgForm){
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
  deletePost(idString){
    this.http.post('http://localhost:8080/DeletePost', +idString).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/forum/" + this.postObject.category.toLowerCase()]);
    })
  }
}
