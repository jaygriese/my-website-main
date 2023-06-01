import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from '../../models/dto/RegisterDTO';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoDTO } from '../../models/dto/UserInfoDTO';
import { UserBundleDTO } from '../../models/dto/UserBundleDTO';
import { ViewUserService } from '../../user-profile/services/view-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  /* Temp container for register forms */
  registerUser: RegisterDTO;

  /* Error Messages */
  
  newUserEntityCheck: any[] = [];
  userInformationCheck: any[] = [];

  /* Booleans for HTML form change and Error display */
  nextFormInfo: boolean = true;
  noErrorInFormSubmit: boolean;

  /* Form Error handling */
  noUserNameError: boolean;
  errorUserName: string;
  noUserEmailError: boolean;
  errorUserEmail: string;
  passwordForm: boolean;
  errorPassword: string;
  passwordMatchIssue: boolean;
  passWordsDontMatch: string;
  noFirstNameError: boolean;
  firstNameMessage: string;
  noLastNameError: boolean;
  lastNameMessage: string;
  createNewUser: boolean;
  postResponseMessage: string;

  constructor(private http: HttpClient, 
              private router: Router, 
              private registerService: ViewUserService) {
   }

  ngOnInit(): void {
    if (localStorage.getItem("userName") !== null) {
      this.router.navigate(["/myProfile"])
    }
  } 

  clearForms() {
    this.userInformationCheck = [];
    this.newUserEntityCheck = [];
    this.errorUserName = "";
    this.errorPassword = "";
    this.passWordsDontMatch = "";
    this.firstNameMessage = "";
    this.lastNameMessage = "";
    this.postResponseMessage = "";
    this.registerUser = null;
    this.nextFormInfo = true;
  }

  registerNewUser(userInformation: NgForm) {
    this.errorUserName = "";
    this.errorPassword = "";
    this.passWordsDontMatch = "";

    let submitNewUser: RegisterDTO = {
      userName: userInformation.value.userName,
      userEmail: userInformation.value.userEmail,
      password: userInformation.value.password,
      verifyPassword: userInformation.value.verify
    }

    let response: any[] = this.registerService.checkUserInformation(submitNewUser);
    if (response.length === 0) {
      this.registerUser = submitNewUser;
      this.nextFormInfo = false;
      return;
    } else {
      for (let i = 0; i < response.length; i++) {
        this.newUserEntityCheck.push(response[i].contents)
        if (response[i].message === 1) {
          this.errorUserName = response[i].contents;
        }
        if (response[i].message === 2) {
          this.errorPassword = response[i].contents;
        }
        if (response[i].message === 3) {
          this.passWordsDontMatch = response[i].contents;
        }
      }
      return;
    }

  }

  completeRegisteration(userDetails: NgForm) {
    this.userInformationCheck = [];

    let userInfo: UserInfoDTO = {
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neighborhood: userDetails.value.neighborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }

    let response: any[] = this.registerService.userInformationCheck(userInfo);
    if (response.length === 0) {
      
      let userBundle: UserBundleDTO = {
        registerDTO: this.registerUser,
        userInfoDTO: userInfo
      }
  
      this.http.post('http://localhost:8080/api/register', userBundle).subscribe((response: any) => {
        if (response.message) {
            this.postResponseMessage = response.message;
            return;
          }  else {

            localStorage.setItem('userName', this.registerUser.userName)
            localStorage.setItem('id', response.id)
            this.router.navigate(["/myProfile"])
            }
        });

    } else {
    for (let i = 0; i < response.length; i++) {
      if (response[i].message === 1) {
        this.firstNameMessage = response[i].contents;
      }
      if (response[i].message === 2) {
        this.lastNameMessage = response[i].contents;
      }
     }
     this.noErrorInFormSubmit = false;
     return;
    }
  }

}
