import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForumPostDTO } from '../community-forum-arm/models/ForumPostDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {
  constructor(private http: HttpClient) { 
  }

switchToLightTheme(){
    let background = document.getElementById('theme');
    let sections = document.querySelectorAll("body");
    sections.forEach((section) => {section.setAttribute('class', 'white-theme')});
    background.setAttribute('class', 'white');
    localStorage.setItem('theme', 'light');
}
switchToDarkTheme(){
  let background = document.getElementById('theme');
  let sections = document.querySelectorAll("body");
  sections.forEach((section) => {section.setAttribute('class', 'black-background')});
  background.setAttribute('class', 'black');
  localStorage.setItem('theme', 'dark');
}
createAPost(postInfo: NgForm, forumTopic: string){
  let postDetails: ForumPostDTO = {
    title: postInfo.value.title,
    description: postInfo.value.description,
    username: localStorage.getItem('userName'),
    category: forumTopic
  }
  this.http.post(`http://localhost:8080/Posts`, postDetails).subscribe((res) => {
    console.log(res)
});
window.location.reload();
}
getForumTopicPosts(forumTopic: string){
  let testArray1 = [];
  let newArray = [];
  this.http.get(`http://localhost:8080/Posts`).subscribe((res)=>{
    for(const k in res){
        if(res[k].title != null){
          testArray1.push(res[k])
        }
    }
    for(let i = 0; i < testArray1.length; i++){
      if (testArray1[i].category == forumTopic){
        newArray.push(testArray1[i]);
      }
    }
  });
  return newArray;
}
}
