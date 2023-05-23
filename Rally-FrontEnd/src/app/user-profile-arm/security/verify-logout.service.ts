import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyLogoutService {

  constructor(private router: Router, private http: HttpClient) {
   }

  verifyLoggedIn() {

    let currentUser;

    if (localStorage.getItem('userName') === null) {
      this.router.navigate(["/login"])
      return false;
    }

    currentUser = localStorage.getItem('userName');
    return true;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"])
    return false;
  }

}
