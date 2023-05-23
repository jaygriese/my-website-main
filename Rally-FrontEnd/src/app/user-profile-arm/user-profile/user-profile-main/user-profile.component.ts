import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser = localStorage.getItem('userName');
  userEntity: UserEntity;
  respondToDm: UserEntity;
  userInformation: UserInformation;
  mainUserBundle: MainUserBundle;
  userEntityDmList: UserEntity[];
  allDmHistory: DirectMessage[];
  conversation: DirectMessage[] = [];

  noError: boolean = true;
  logInStatus = false;
  changeInfo = true;
  userDms = true;

  private userUrl: string = 'http://localhost:8080/user/update-user-information';

  

  constructor(private http: HttpClient, 
              private router: Router, 
              private viewUser: ViewUserService,
              private verifyService: VerifyLogoutService, 
              private activeUserService: ViewUserService) {
   }

  ngOnInit(): void {
    this.logInStatus = this.verifyService.verifyLoggedIn();
    
    if (localStorage.getItem('id') !== null) {

      /* Get user information and user entity data */
      this.activeUserService.getMainUserBundleByUserName(localStorage.getItem('userName')).subscribe((data: MainUserBundle) => {
        this.mainUserBundle = data;
        this.userInformation = this.mainUserBundle.viewUserInformation;
      })

      /* Get user entities that have dm history with active user */
      this.activeUserService.getDmHistoryUsers(localStorage.getItem('id')).subscribe((response: UserEntity[]) => {
        this.userEntityDmList = response;
        let remove: UserEntity;

        for (let i = 0; i < this.userEntityDmList.length; i++) {
          if (localStorage.getItem('userName') === this.userEntityDmList[i].userName) {
            remove = this.userEntityDmList[i];
          }
        }
        this.userEntityDmList = this.userEntityDmList.filter((user: UserEntity) => user !== remove);
      })

      /* Get all user message dm history */
      this.activeUserService.getDmHistoryDirectMessages(localStorage.getItem('id')).subscribe((response: DirectMessage[]) => {
        this.allDmHistory = response;
      })
    }
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
    this.viewUser.postDirectMessage(sendDirectMessage).subscribe();

    /* Temp solution, need to figure out how to refresh just this part of the page while staying in user conversation. */
    location.reload();
    
  } 




  updateUserInfo( userDetails: NgForm ) {

    let userInfo: UserInfoDTO = {
      userId: Number(this.mainUserBundle.mainUser.id),
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neigborhood: userDetails.value.neigborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }

    this.http.post(this.userUrl, userInfo).subscribe((response: UserInformation) => {
        this.userInformation = response
        this.changeInfo=true;
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
