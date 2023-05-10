import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from 'src/app/user-profile-arm/security/verify-logout.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  userList: UserEntity[]; 
  logInStatus: Boolean;

  constructor(private userService: ViewUserService, 
              private verifyService: VerifyLogoutService) { }

  ngOnInit(): void {
    this.logInStatus = this.verifyService.verifyLoggedIn();
    this.userService.getUserList().subscribe((data: UserEntity[]) => {
      this.userList = data;
      let remove: UserEntity;
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName === localStorage.getItem("userName")) {
          remove = this.userList[i];
        }
      }
      this.userList = this.userList.filter((user: UserEntity) => user !== remove);
    })
  }
}
