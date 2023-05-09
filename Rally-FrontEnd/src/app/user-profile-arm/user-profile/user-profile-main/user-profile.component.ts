import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
import { ProfilePicture } from '../../models/ProfilePicture';

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

  /* Post History */
  forumPost: any = [];
  hiddenPost: any;
  
  /* HTML booleans */
  noError: boolean = true;
  changeInfo: boolean = true;
  userDms: boolean = true;
  changeProfilePic: boolean = true;
  uploadErrorMsg: any[];

  /* Image uploading */
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;

  constructor(private http: HttpClient, 
              private router: Router, 
              private viewUser: ViewUserService,
              private verifyService: VerifyLogoutService, 
              private activeUserService: ViewUserService) {
  }

  ngOnInit(): void {
    /* Make sure the user is logged in */
    this.logInStatus = this.verifyService.verifyLoggedIn();
    /* If they are logged in */
    if (localStorage.getItem('id') !== null) {
      /* Get user information and user entity data */
      this.activeUserService.getMainUserBundleByUserName(localStorage.getItem('userName')).subscribe((data: MainUserBundle) => {
        this.userEntity = data.mainUser;
        this.userInformation = data.viewUserInformation;
        this.model = new NgUserInformation(this.userInformation.firstName,
                                           this.userInformation.lastName,
                                           this.userInformation.neighborhood,
                                           this.userInformation.city,
                                           this.userInformation.state);
      })
      /* Get user entities that have dm history with active user */
      this.activeUserService.getDmHistoryUsers(localStorage.getItem('id')).subscribe((response: UserEntity[]) => {
        this.userEntityDmList = response;
        /* Remove logged in user from list */
        let remove: UserEntity;
        for (let i = 0; i < this.userEntityDmList.length; i++) {
          if (localStorage.getItem('userName') === this.userEntityDmList[i].userName) {
            remove = this.userEntityDmList[i];
          }
        }
        this.userEntityDmList = this.userEntityDmList.filter((user: UserEntity) => user !== remove);
      })
      /* Get all user dm history */
      this.activeUserService.getDmHistoryDirectMessages(localStorage.getItem('id')).subscribe((response: DirectMessage[]) => {
        this.allDmHistory = response;
      })
      /* Get user Profile Picture */
      this.http.get('http://localhost:8080/user/userProfileImage/' + localStorage.getItem('id')).subscribe((response: ProfilePicture) => {
        this.postResponse = response;
        this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
      })
      /* Get user Forum Post history */
      this.http.get('http://localhost:8080/Posts').subscribe((response) => {
        let filterPost: any = response;
        for (let i = 0; i < filterPost.length; i++) {
          if(filterPost[i].userEntity.id === Number(localStorage.getItem('id'))) {
            this.forumPost.push(filterPost[i]);
          }
        }
      })
      /* Get hidden post list */
      this.http.get('http://localhost:8080/user/getHiddenPostList/' + localStorage.getItem('id')).subscribe((response) => {
        this.hiddenPost = response;
        console.log(this.hiddenPost)
      })
    }
  }

  /* Hide requested post from profile */
  hidePost(postId: string) {
    this.http.post('http://localhost:8080/user/hidePostList', postId).subscribe((response) => {
      console.log(response);
    })
  }

  unhidePost(postId: string) {
    this.http.post('http://localhost:8080/user/unhidePost', postId).subscribe((response) => {
      console.log(response);
    })
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

    this.http.post('http://localhost:8080/user/upload/image', imageFormData, {observe: 'response'}).subscribe((response) => {
      console.log(response);
      if (response.status === 200) {
        this.postResponse = response;
        console.log(this.postResponse)
      } else { 
        this.successResponse = 'Image not uploaded due to an error!';
      }
      location.reload();
    })
  }  

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
    this.conversation.reverse();
    // console.log(`${localStorage.getItem('userName')} is viewing and messaging ${this.respondToDm.userName}`)
    this.userDms = false;

  }

  reload() {
    location.reload();
  }

  respondToUserDm( userResponse: NgForm ) {
    let sendDirectMessage: DirectMessageDTO = {
      receivedByUserId: this.respondToDm.id,
      receivedByUserName: this.respondToDm.userName,
      sentByUserId: localStorage.getItem('id'),
      sentByUserName: localStorage.getItem('userName'),
      messageContent: userResponse.value.messageContent
    }

    if (sendDirectMessage.messageContent.length < 3) {
      this.noError = false;
      return
    }
    this.viewUser.postDirectMessage(sendDirectMessage).subscribe(
      // push new post into the DM list maybe?
    );

    /* Temp solution, need to figure out how to refresh just this part of the page while staying in user conversation. */
    location.reload();
    
  } 

  updateUserInfo( userDetails: NgForm ) {
    let userInfo: UserInfoDTO = {
      userId: Number(this.userEntity.id),
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
