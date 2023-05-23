import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private http: HttpClient, private themeservice: ThemeserviceService) { 
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.postReplyBoolean = false;
    this.logInStatus = false;
    this.replies = [];
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
    
  }
  logOut() {
    localStorage.removeItem('userName');
    console.log(localStorage.getItem('userName'));
    this.logInStatus = false;
  }
  verifyLoggedIn() {
    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  }
}
