import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from 'src/app/user-profile-arm/security/verify-logout.service';
import { Router } from '@angular/router';

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
    })
  }
}
