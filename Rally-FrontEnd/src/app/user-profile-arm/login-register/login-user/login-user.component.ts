import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../../models/dto/LoginDTO';
import { NgForm } from '@angular/forms';
import { UserEntity } from '../../models/UserEntity';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogginIn: UserEntity;
  incorrectPassword: boolean;
  userEntity: UserEntity;

  constructor(private http: HttpClient,
              private router: Router) 
              { 
  }


  ngOnInit(): void {}

  login(userInformation: NgForm ) {
      
    this.incorrectPassword = false;

    let loginInfo: LoginDTO = {
      userName: userInformation.value.userName,
      password: userInformation.value.password
    }
    this.http.post('http://localhost:8080/api/login', loginInfo).subscribe((response: UserEntity) => {    
      for (const k in response){
        if (k === "failed"){
          this.incorrectPassword = true;
          return;
        } else {            
          this.userLogginIn = response;
          localStorage.setItem('userName', this.userLogginIn.userName)
          localStorage.setItem('id', this.userLogginIn.id)
          this.router.navigate(["/myProfile"]);
        }
      }
       
    });
    
  
  }
}
