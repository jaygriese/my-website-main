import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserEntity } from '../../models/UserEntity';
import { StorageService } from 'src/app/security/security-service/storage-service.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginDTO } from '../../models/dto/LoginDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogginIn: UserEntity;
  errorMessage: boolean;
  loginResponseMessage: string;
  userEntity: UserEntity;
  accessExpired: boolean = false;

  constructor(private http: HttpClient,
              private router: Router,
              private storageService: StorageService,
              private cookieService: CookieService) 
              { 
  }


  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(["/myProfile"])
    }

    // if (sessionStorage.getItem("expired")) {
    //   this.accessExpired = true;
    // }
  }

  login(userInformation: NgForm ) {
      
    this.errorMessage = false;

    let userInfo: LoginDTO = {
      userName: userInformation.value.userName,
      password: userInformation.value.password
    }

    let userName = userInformation.value.userName;
    let password = userInformation.value.password;

    return this.http.post('http://localhost:8080/api/login', //userInfo).subscribe((data: any) => {
      {
        userName,
        password,
      },
      httpOptions
      ).subscribe((data: any) => {
        if (data.failed) {
          this.errorMessage = true;
          this.loginResponseMessage = data.failed;
          return;
        }
        /* local and sesion storage being phased out */
        localStorage.setItem('userName', data.userName)
        localStorage.setItem('id', data.id)
        // this.storageService.saveUser(data);

        /* make get request based on cookie data */
        this.cookieService.set("token", data.accessToken);
        this.router.navigate(["/myProfile"]);
      });
    
  }
}
