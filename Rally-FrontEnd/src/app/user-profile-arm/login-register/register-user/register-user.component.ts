import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from '../../models/dto/RegisterDTO';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoDTO } from '../../models/dto/UserInfoDTO';
import { UserBundleDTO } from '../../models/dto/UserBundleDTO';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  passwordsMatch: boolean = true;
  incorrectPassword: boolean;
  registerUser: RegisterDTO;
  message: string;

  constructor(private http: HttpClient, 
              private router: Router) {
   }

  ngOnInit(): void {
  } 

  registerNewUser(userInformation: NgForm) {
    this.incorrectPassword = false;
    let submitNewUser: RegisterDTO = {
      userName: userInformation.value.userName,
      password: userInformation.value.password,
      verifyPassword: userInformation.value.verify
    }

    if ( submitNewUser.password.length < 3 || submitNewUser.verifyPassword.length < 3) {
      this.message = "Password needs to be longer than 3 characters"
      this.incorrectPassword = true;
      return;
    } else if (submitNewUser.userName.length < 3) {
      this.message = "userName needs to be longer than 3 characters";
      this.incorrectPassword = true;
      return;
    } else if (submitNewUser.password !== submitNewUser.verifyPassword) {
      this.message = "Passwords need to match"
      this.incorrectPassword = true;
      return;
    } else {
      this.registerUser = submitNewUser;
      this.passwordsMatch = false;
      return;
    }

  }

  completeRegisteration(userDetails: NgForm) {
    let userInfo: UserInfoDTO = {
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neighborhood: userDetails.value.neighborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }

    let userBundle: UserBundleDTO = {
      registerDTO: this.registerUser,
      userInfoDTO: userInfo
    }

    this.http.post('http://localhost:8080/api/register', userBundle).subscribe((response: any) => {
        if (response.failed) {
          this.message = response.failed
          this.incorrectPassword = true;
          return;
        }  else {
          localStorage.setItem('userName', this.registerUser.userName)
          localStorage.setItem('id', response.id)
          this.router.navigate(["/myProfile"])
          }
      });

  }

}
