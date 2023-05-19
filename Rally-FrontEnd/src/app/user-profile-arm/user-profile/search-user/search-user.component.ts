import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/UserEntity';
import { ViewUserService } from '../services/view-user.service';
import { VerifyLogoutService } from 'src/app/user-profile-arm/security/verify-logout.service';
import { NgForm } from '@angular/forms';

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