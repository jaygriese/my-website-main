import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VerifyLogoutService } from 'src/app/user-profile-arm/security/verify-logout.service';
import { UserInfoDTO } from '../../models/dto/UserInfoDTO';
import { NgForm } from '@angular/forms';
import { UserInformation } from '../../models/UserInformation';
import { ViewUserService } from '../services/view-user.service';
import { UserEntity } from '../../models/UserEntity';
import { MainUserBundle } from '../../models/MainUserBundle';
import { DirectMessage } from '../../models/Directmessage';
import { DirectMessageDTO } from '../../models/dto/directMessageDTO';
import { NgUserInformation } from '../../models/ng-model/UserInformation';
import { HiddenPost } from '../../models/HiddenPost';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  /* logged in user information */
  currentUser = localStorage.getItem('userName');
  logInStatus: boolean = false;
  userEntity: UserEntity;
  userInformation: UserInformation;
  model: NgUserInformation;
  
  /* Direct Message variables */
  respondToDm: UserEntity;
  userEntityDmList: UserEntity[];
  allDmHistory: DirectMessage[];
  conversation: DirectMessage[] = [];
  commentBox: any;

  /* Post History */
  allPost: any[] = [];
  hiddenPost: HiddenPost[];
  forumPost: any[];
  forumReplies: any[];
  eventPost: any[];
  
  /* HTML booleans */
  noError: boolean = true;
  changeInfo: boolean = true;
  userDms: boolean = true;
  changeProfilePic: boolean = true;
  uploadErrorMsg: any[];

  /* HTML variables */
  @ViewChild('dmBottomOfScroll') private scrollMe: ElementRef;

  /* Image uploading */
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  image: any;

  constructor(private http: HttpClient, 
              private router: Router, 
              private viewUser: ViewUserService,
              private verifyService: VerifyLogoutService, 
              private activeUserService: ViewUserService, 
              private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    /* Make sure the user is logged in */
    this.logInStatus = this.verifyService.verifyLoggedIn();
    
    /* If user is logged in */
    if (localStorage.getItem('id') !== null) {
      /* Get user information and user entity data */
      this.activeUserService.getMainUserBundleByUserName(localStorage.getItem('userName')).subscribe((data: MainUserBundle) => {
        this.userEntity = data.viewUser;
        this.userInformation = data.viewUserInformation;
        this.allDmHistory = data.viewMainUserDmHistory.directMessageList;
        this.userEntityDmList = data.viewMainUserDmHistory.userEntities;
        this.hiddenPost = data.viewUserPostHistory.viewUserHiddenPost;
        this.forumPost = data.viewUserPostHistory.viewUserForumPost;
        this.forumReplies = data.viewUserPostHistory.viewUserForumReplies;
        this.eventPost = data.viewUserPostHistory.viewUserEventPost;
        this.model = new NgUserInformation(this.userInformation.firstName,
                                           this.userInformation.lastName,
                                           this.userInformation.neighborhood,
                                           this.userInformation.city,
                                           this.userInformation.state);
        /* Remove active user from dm list */
        let remove: UserEntity;
        for (let i = 0; i < this.userEntityDmList.length; i++) {
          if (localStorage.getItem('userName') === this.userEntityDmList[i].userName) {
            remove = this.userEntityDmList[i];
          }
        }
        this.userEntityDmList = this.userEntityDmList.filter((user: UserEntity) => user !== remove);

        this.oneBigList(this.forumPost, this.forumReplies, this.eventPost);
        // console.log(this.allPost)
      })

      /* Get user Profile pic */
      this.http.get('http://localhost:8080/user/userProfileImage/' + localStorage.getItem('id')).subscribe((response: any) => {
        if (response.message) {
          console.log(response.message);
          return;
        } else {
          this.postResponse = response;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      })
    }
  }
  
  /* Learning about LifeCycle Hooks in Angular / prevents error in the console when viewing 
    direct messages while using the [scrollTop]="scrollMe.scrollHeight" */
  /* Might be causing memory leak, further investigation required */
  ngAfterContentChecked() {
    this.scrollMe = this.scrollMe;
    this.cdref.detectChanges();
  }

  /* Hide requested post from profile */
  hidePost(postId: string) {
    this.http.post('http://localhost:8080/user/hidePostList', postId).subscribe((response) => {
      console.log(response);
    })
  }

  /* Remove post from hidden post / Make post public */
  unhidePost(postId: string) {
    this.http.post('http://localhost:8080/user/unhidePost', postId).subscribe((response) => {
      console.log(response);
    })
  }

  oneBigList(forumPost, forumReplies, events) {  // , resources, restaurantReview, services
    let bigJoin: any[] = [];
    for (let post of forumPost) {
      bigJoin.push(post);
    }
    for (let reply of forumReplies) {
      bigJoin.push(reply);
    }
    for (let event of events) {
      bigJoin.push(event);
    }
    this.allPost = bigJoin.sort();
  }


  /* Select file to be uploaded */
  public onImageUpload(event) {
    if (event.target.files[0].size > 1024000) {   
      this.uploadErrorMsg = ["File is too large, please select a smaller image", true];
      this.uploadedImage = null;
      console.log(this.uploadedImage)
      return;
    } else {
      this.uploadedImage = event.target.files[0];
    }
  }

  /* Upload the image to the database */
  imageUploadAction() {
    if (this.uploadedImage === null) {
      console.log("Nope");
      return;
    }

    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.userEntity.id);

    this.http.post('http://localhost:8080/user/upload/image', imageFormData, {observe: 'response'}).subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        this.postResponse = response;
      } else { 
        console.log(response)
        return;
      }
      location.reload();
    })
  }  

  /* Display conversation with user selected */
  displayConversation( userDms: UserEntity) {
    this.respondToDm = null;

    for (let i = 0; i < this.userEntityDmList.length; i++) {
        if (this.respondToDm === null && userDms.userName == this.userEntityDmList[i].userName) {
        this.respondToDm = this.userEntityDmList[i];
      }
    }
    
    for (let i = 0; i < this.allDmHistory.length; i++) {
      if (localStorage.getItem('userName') === this.allDmHistory[i].sentByUserName && this.respondToDm.userName === this.allDmHistory[i].receivedByUserName) {
        this.conversation.push(this.allDmHistory[i]);
      } else if (localStorage.getItem('userName') === this.allDmHistory[i].receivedByUserName && this.respondToDm.userName === this.allDmHistory[i].sentByUserName) {
        this.conversation.push(this.allDmHistory[i]);
      }
    }
    // console.log(`${localStorage.getItem('userName')} is viewing and messaging ${this.respondToDm.userName}`)
    this.userDms = false;

  }

  /* After sending a message to a user, this refreshes the chat history */
  refreshConversation( chatWithUser: string) {
    for (let i = 0; i < this.allDmHistory.length; i++) {
      if (localStorage.getItem('userName') === this.allDmHistory[i].sentByUserName && chatWithUser === this.allDmHistory[i].receivedByUserName) {
        this.conversation.push(this.allDmHistory[i]);
      } else if (localStorage.getItem('userName') === this.allDmHistory[i].receivedByUserName && chatWithUser === this.allDmHistory[i].sentByUserName) {
        this.conversation.push(this.allDmHistory[i]);
      }
    }
  }

  /* Sends respone to the database */
  respondToUserDm( userResponse: NgForm ) {
    let sendDirectMessage: DirectMessageDTO = {
      receivedByUserId: this.respondToDm.id,
      receivedByUserName: this.respondToDm.userName,
      sentByUserId: localStorage.getItem('id'),
      sentByUserName: localStorage.getItem('userName'),
      messageContent: userResponse.value.messageContent
    }

    if (sendDirectMessage.messageContent === undefined || sendDirectMessage.messageContent.length < 3) {
      this.noError = false;
      return
    }
    this.viewUser.postDirectMessage(sendDirectMessage).subscribe((response: DirectMessage[]) => {
      this.allDmHistory = response;
      this.commentBox = '';
      this.refreshConversation(this.respondToDm.userName)
    });   
  } 

  /* Updates the users information */
  updateUserInfo( userDetails: NgForm ) {
    let userInfo: UserInfoDTO = {
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neighborhood: userDetails.value.neighborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }
    console.log(userInfo)
    this.http.post('http://localhost:8080/user/update-user-information', userInfo).subscribe((response: UserInformation) => {
        this.userInformation = response
        this.changeInfo=true;
        return;
    });
  }

  editProfileDetails() {
    this.changeInfo=false;
  }

  logOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('id')
    this.logInStatus = false;
    this.router.navigate(["/login"])
    return;
  }
}
