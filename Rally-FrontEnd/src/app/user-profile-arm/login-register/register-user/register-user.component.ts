import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from '../../models/dto/RegisterDTO';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoDTO } from '../../models/dto/UserInfoDTO';
import { ViewUserService } from '../../user-profile/services/view-user.service';
import { UserBundleDTO } from '../../models/dto/UserBundleDTO';
import { UserEntity } from '../../models/UserEntity';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  nextUserId: number;
  passwordsMatch: boolean;
  incorrectPassword: boolean;
  registerUser: RegisterDTO;
  private userUrl: string;

  constructor(private http: HttpClient, private router: Router, private getUserId: ViewUserService) {
    this.userUrl = 'http://localhost:8080/api/register'
    this.passwordsMatch = true;
   }

  ngOnInit(): void {
    this.getUserId.getCurrentUserIdCount().subscribe((data: number) => {
      this.nextUserId = data;
      console.log(data)
    })
  } 

  registerNewUser(userInformation: NgForm) {
    this.incorrectPassword = false;
    let submitNewUser: RegisterDTO = {
      userName: userInformation.value.userName,
      password: userInformation.value.password,
      verifyPassword: userInformation.value.verify
    }

    if (submitNewUser.password !== submitNewUser.verifyPassword) {
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
      userId: this.nextUserId + 1,
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neigborhood: userDetails.value.neigborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }

    let userBundle: UserBundleDTO = {
      registerDTO: this.registerUser,
      userInfoDTO: userInfo
    }

    this.http.post(this.userUrl, userBundle).subscribe((response: UserEntity) => {
      localStorage.setItem('userName', this.registerUser.userName)
      localStorage.setItem('id', response.id)
      this.router.navigate(["/myProfile"])
    });

  }

}
