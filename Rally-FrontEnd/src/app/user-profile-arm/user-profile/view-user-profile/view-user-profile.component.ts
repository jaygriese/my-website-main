import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from '../../security/verify-logout.service';
import { ViewUserBundle } from '../../models/ViewUserBundle';
import { NgForm } from '@angular/forms';
import { DirectMessageDTO } from '../../models/dto/directMessageDTO';
import { DirectMessage } from '../../models/Directmessage';
import { HttpClient } from '@angular/common/http';
import { ProfilePicture } from '../../models/ProfilePicture';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  dmList: DirectMessage[];
  conversation: DirectMessage[];
  logInStatus: Boolean;
  viewUserEntity: UserEntity;
  viewUserName: string;
  viewUserId: string;
  userEntityInformation: ViewUserBundle;
  dbImage: any;
  /* Post History */
  forumPost: any = [];
  hiddenPost: any =[];

  noError: boolean = true;
  showDmHistory = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, 
              private viewUser: ViewUserService,
              private verifyService: VerifyLogoutService,
              private http: HttpClient) {
      this.logInStatus = false;
   }

  ngOnInit() {
    this.logInStatus = this.verifyService.verifyLoggedIn();
    /* This method pulls the parameters of the activated route and converts them into a usable object */
    this.activatedRoute.paramMap.subscribe(params => {
    this.viewUserName = params.get('userName');
    this.viewUserId = params.get('id');
    });

    this.viewUser.redirectWhenViewingSelf(this.viewUserName);

    /* This method gets a bundle of information I want to display on the view user page */
    this.viewUser.getViewUserBundleByUserName(this.viewUserName).subscribe((data: ViewUserBundle) => {
      this.userEntityInformation = data;
      this.viewUserEntity = this.userEntityInformation.viewUser;
    })
    /* Get Direct Message history with active user */
    this.viewUser.getDmHistoryDirectMessages(this.viewUserId).subscribe((response: DirectMessage[]) => {
        this.dmList =response
    })
    /* Get other users profile picture */
    this.http.get('http://localhost:8080/user/userProfileImage/' + this.viewUserId).subscribe((response: ProfilePicture) => {
      this.dbImage = 'data:image/jpeg;base64,' + response.image;
    })

    this.http.get('http://localhost:8080/user/getUpdatedPostHistoryViewUser/' + this.viewUserId).subscribe((response) => {
      this.forumPost = response;
    })
    
    // let hiddenGetPost: any = this.http.get('http://localhost:8080/user/getHiddenPostList/' + this.viewUserId);
    // let forumPostAll: any = this.http.get('http://localhost:8080/Posts');

    // forkJoin([hiddenGetPost, forumPostAll]).subscribe( result => {
    //   this.hiddenPost = result[0];
    //   this.forumPost = result[1];
    // });
  }

  viewingUserSendDM(dmMessageDetails: NgForm) {
    let sendDirectMessage: DirectMessageDTO = {
      receivedByUserId: this.userEntityInformation.viewUser.id,
      receivedByUserName: this.userEntityInformation.viewUser.userName,
      sentByUserId: localStorage.getItem('id'),
      sentByUserName: localStorage.getItem('userName'),
      messageContent: dmMessageDetails.value.messageContent
    }

    if (sendDirectMessage.messageContent.length < 3) {
      this.noError = false;
      return;
    } 

    this.viewUser.postDirectMessage(sendDirectMessage).subscribe();
    location.reload();
  }

  displayConversation( userDms: UserEntity) {
    this.conversation = [];
    console.log(`${localStorage.getItem('userName')} is viewing and messaging ${userDms.userName}`)
    
    for (let i = 0; i < this.dmList.length; i++) {
      if (localStorage.getItem('userName') === this.dmList[i].sentByUserName && userDms.userName === this.dmList[i].receivedByUserName) {
        this.conversation.push(this.dmList[i]);
      } else if (localStorage.getItem('userName') === this.dmList[i].receivedByUserName && userDms.userName === this.dmList[i].sentByUserName) {
        this.conversation.push(this.dmList[i]);
      }
    }
    this.conversation.reverse();
    this.showDmHistory = false;
  }


  logOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('id')
    this.logInStatus = false;
    this.router.navigate(["/login"])
    return;
  }

}
