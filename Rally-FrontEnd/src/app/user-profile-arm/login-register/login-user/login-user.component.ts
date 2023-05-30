import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserEntity } from '../../models/UserEntity';
import { StorageService } from 'src/app/security/security-service/storage-service.service';

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
  incorrectPassword: boolean;
  userEntity: UserEntity;
  accessExpired: boolean = false;

  constructor(private http: HttpClient,
              private router: Router,
              private storageService: StorageService) 
              { 
  }


  ngOnInit(): void {
    if (sessionStorage.getItem("auth-user") !== null) {
      this.router.navigate(["/myProfile"])
    }

    // if (sessionStorage.getItem("expired")) {
    //   this.accessExpired = true;
    // }
  }

  login(userInformation: NgForm ) {
      
    this.incorrectPassword = false;

    let userName = userInformation.value.userName;
    let password = userInformation.value.password;

    return this.http.post('http://localhost:8080/api/login', 
      {
        userName,
        password,
      },
      httpOptions
      ).subscribe((data: any) => {

        if (data.failed === "Username doesn't exist") {
          this.incorrectPassword = true;
          return;
        }
        
        /* use sessionStrorage over localStorage */
        localStorage.setItem('userName', data.userName)
        localStorage.setItem('id', data.id)

        /* maybe I can encode incoming data so I don't have to save it to session storage */
        this.storageService.saveUser(data);
        this.router.navigate(["/myProfile"]);
      });
    
  }
}
