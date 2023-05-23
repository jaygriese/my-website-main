import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../../models/dto/LoginDTO';
import { NgForm } from '@angular/forms';
import { ViewUserService } from '../../user-profile/services/view-user.service';
import { UserEntity } from '../../models/UserEntity';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogginIn: UserEntity;
  private userUrl: string;
  incorrectPassword: boolean;
  userEntity: UserEntity;

  constructor(private http: HttpClient,
              private router: Router) 
              { 
    this.userUrl = 'http://localhost:8080/api/login';
  }


  ngOnInit(): void {}

  login(userInformation: NgForm ) {
      
    this.incorrectPassword = false;

    let loginInfo: LoginDTO = {
      userName: userInformation.value.userName,
      password: userInformation.value.password
    }
    this.http.post(this.userUrl, loginInfo).subscribe((response: UserEntity) => {    
      this.userLogginIn = response;
      for (const k in response){
        if (k === "failed"){
          this.incorrectPassword = true;
          return;
        } else {            
          localStorage.setItem('userName', this.userLogginIn.userName)
          localStorage.setItem('id', this.userLogginIn.id)
          this.router.navigate(["/myProfile"]);
        }
      } 
    });
    
  
  }
}
