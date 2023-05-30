import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/verify/'

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private router: Router) { }

  isloggedIn(): any {
    if (sessionStorage.getItem('auth-user') === null) {
      return false;
    }
    let userInfo: any = sessionStorage.getItem('auth-user')
    const payload = atob(userInfo.split(".")[1])
    const parsedPayload = JSON.parse(payload)
    return parsedPayload.exp > Date.now() / 1000;
  }

  clean(): void {
    sessionStorage.clear();
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    // sessionStorage.setItem('expired', "Access Token Expired")
    this.router.navigate(["/login"])
  }

  logOut() {
    sessionStorage.clear();
    localStorage.removeItem('userName');
    localStorage.removeItem('id')
    this.router.navigate(["/login"])
    return false;
  }

}
