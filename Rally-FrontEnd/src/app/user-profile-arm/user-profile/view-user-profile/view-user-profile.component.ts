import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from '../../security/verify-logout.service';
import { ViewUserBundle } from '../../models/ViewUserBundle';
import { NgForm } from '@angular/forms';
import { DirectMessageDTO } from '../../models/dto/directMessageDTO';
import { DirectMessage } from '../../models/Directmessage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit, AfterViewChecked {

  /* Viewing Users information */
  logInStatus: Boolean = false;
  viewUserName: string;
  viewUserId: string;
  userEntityInformation: ViewUserBundle;
  /* Direct Message with active user */
  dmList: DirectMessage[];
  conversation: DirectMessage[];
  commentBox: any;
  /* User Profile Pic */
  dbImage: any;
  /* Post History */
  forumPost: any = [];
  
  /* HTML booleans */
  noError: boolean = true;
  showDmHistory = false;
  dmCharacters = true;
  userReal = true;

  @ViewChild('dmBottomOfScroll') private myScrollContainer: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, 
              private viewUser: ViewUserService,
              private verifyService: VerifyLogoutService,
              private http: HttpClient) {
   }

  ngOnInit() {
    this.logInStatus = this.verifyService.verifyLoggedIn();

    /* This method pulls the parameters of the activated route and converts them into a usable string */
    this.activatedRoute.paramMap.subscribe(params => {
    this.viewUserName = params.get('userName');
    this.viewUserId = params.get('id');
    });

    /* If you tried to view yourself, you will be redirected to the 'myProfile' route */
    this.viewUser.redirectWhenViewingSelf(this.viewUserName);

    /* This method gets a bundle of information I want to display on the view user page */
    this.viewUser.getViewUserBundleByUserName(this.viewUserName).subscribe((data: any) => {
      if (data.message) {
        this.userReal = false;
        this.router.navigate(['/user/404']);
        return;
      }
      this.userEntityInformation = data;
      this.forumPost = data.updatedPostHistoryViewUser;

      /* Something to address, send the conversation list already sorted from the back */
      this.dmList = data.viewUserDmHistory.directMessageList;
      this.displayConversation(this.userEntityInformation.viewUser);
      this.scrollToBottom;
    })

    /* Get view users profile picture */
    this.http.get('http://localhost:8080/user/userProfileImage/' + this.viewUserId).subscribe((response: any) => {
      if (response.message) {
        console.log(response.message);
        return;
      } else {
        this.dbImage = 'data:image/jpeg;base64,' + response.image;
      }
    })  
  }

  /* Lifecycle hook learnings, this scrolls the dm display to the bottom automatically */
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  /* Method to scroll dm display to the bottom automatically */
  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  viewingUserSendDM(dmMessageDetails: NgForm) {
    let sendDirectMessage: DirectMessageDTO = {
      receivedByUserId: this.userEntityInformation.viewUser.id,
      receivedByUserName: this.userEntityInformation.viewUser.userName,
      sentByUserId: localStorage.getItem('id'),
      sentByUserName: localStorage.getItem('userName'),
      messageContent: dmMessageDetails.value.messageContent
    }

    if (sendDirectMessage.messageContent === undefined || sendDirectMessage.messageContent.length < 3) {
      this.dmCharacters = false;
      return;
    } 

    this.viewUser.postDirectMessage(sendDirectMessage).subscribe((response: DirectMessage[]) => {
      this.dmList = response;
      this.commentBox = '';
      this.displayConversation(this.userEntityInformation.viewUser);
    });
  }

  displayConversation( userDms: UserEntity) {
    this.conversation = [];

    for (let user of this.dmList) {
      if (localStorage.getItem('userName') === user.sentByUserName && userDms.userName === user.receivedByUserName) {
        this.conversation.push(user);
      } else if (localStorage.getItem('userName') === user.receivedByUserName && userDms.userName === user.sentByUserName) {
        this.conversation.push(user);
      }
    }
  }


  logOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('id')
    this.logInStatus = false;
    this.router.navigate(["/login"])
    return;
  }

}
