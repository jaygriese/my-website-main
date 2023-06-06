import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const AUTH_API = 'http://localhost:8080/verify/'

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private router: Router,
              private cookieService: CookieService) { }

  /* Need to figure out how to get the interceptor to see this. */
  isloggedIn(): any {
    if (!this.cookieService.check('token')) {
      return false;
    } else {
      
    let tokenInfo: any = this.cookieService.get('token')
    const payload = atob(tokenInfo.split(".")[1])

    /* If JWT throws any error due to tampering, log out user */
    try {
      JSON.parse(payload)
    } catch(e) {
      this.clean();
      return;
    }

    const parsedPayload = JSON.parse(payload)
    return parsedPayload.exp > Date.now() / 1000;

    }
  }

  clean(): void {
    sessionStorage.clear();
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    this.cookieService.delete('token');
    // sessionStorage.setItem('expired', "Access Token Expired")
    this.router.navigate(["/login"])
  }

  logOut() {
    sessionStorage.clear();
    localStorage.removeItem('userName');
    localStorage.removeItem('id');
    this.cookieService.delete('token');
    this.router.navigate(["/login"])
    return false;
  }

}
