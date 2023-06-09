import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserEntity } from '../../models/UserEntity';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  /* Host Url */
  private hostUrl = 'http://localhost:8080';

  userLogginIn: UserEntity;
  errorMessage: boolean;
  loginResponseMessage: string;
  userEntity: UserEntity;
  accessExpired: boolean = false;

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService) 
              { 
  }


  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(["/home"])
    }

    // if (sessionStorage.getItem("expired")) {
    //   this.accessExpired = true;
    // }
  }

  login(userInformation: NgForm ) {
      
    this.errorMessage = false;

    let userName = userInformation.value.userName;
    let password = userInformation.value.password;

    return this.http.post( this.hostUrl + '/api/login',
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
        /* local storage being phased out */
        localStorage.setItem('userName', data.userName)
        localStorage.setItem('id', data.id)

        /* make get request based on cookie data */
        this.cookieService.set("token", data.accessToken);
        this.router.navigate(["/myProfile"]);
      });
    
  }
}
