import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from 'src/app/user-profile-arm/security/verify-logout.service';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from 'src/app/security/security-service/authorize.service';
import { StorageService } from 'src/app/security/security-service/storage-service.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  /* Search User Variables */
  userList: UserEntity[]; 
  logInStatus: Boolean;

  constructor(private userService: ViewUserService,
              private authorize: AuthorizeService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    /* Makes sure user is logged in before */
    if (this.authorize.isloggedIn() !== true) {
      this.authorize.logOut();
    }
    
    this.userService.getUserList().subscribe((data: UserEntity[]) => {
      this.userList = data;
      /* Remove active user from list */
      this.userList = this.userList.filter((user: UserEntity) => user.userName !== this.storageService.getUserName());
    })
  }

  /* Search for specific user by name or by character */
  /* This method needs to be refactored to be handled by backend */
  searchForUser(searchUser: NgForm) {
    let filterUser: any[] = [];
    let search = searchUser.value.search.toLowerCase().split('');

    for (let i =0; i < this.userList.length; i++) {
      if (this.userList[i].userName.toLowerCase() === searchUser.value.search.toLowerCase()) {
        filterUser.push(this.userList[i])
        return this.userList = filterUser;
      }
    }
    
    for (let char of search) {
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].userName.toLowerCase().split('').includes(char)) {
          if (!filterUser.includes(this.userList[i])) {
          filterUser.push(this.userList[i]);
        } else {
          console.log("skip")
        }
        }
      }
    }
    return this.userList = filterUser;
  }

  /* Reset results */
  resetResults() {
    this.userService.getUserList().subscribe((data: UserEntity[]) => {
      this.userList = data;
      let remove: UserEntity;
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName === localStorage.getItem("userName")) {
          remove = this.userList[i];
        }
      }
      return this.userList = this.userList.filter((user: UserEntity) => user !== remove);
    })
  }
}