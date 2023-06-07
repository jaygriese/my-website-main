import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const AUTH_API = 'http://localhost:8080/verify/'

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private router: Router,
              private cookieService: CookieService,
              private http: HttpClient) { }

  
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
      this.logOut();
      return;
    }

    const parsedPayload = JSON.parse(payload)
    return parsedPayload.exp > Date.now() / 1000;

    }
  }

  logOut() {
    this.http.get('http://localhost:8080/api/logout').subscribe((data: any) =>{
      console.log(data);
    })
    localStorage.removeItem('userName');
    localStorage.removeItem('id');
    this.cookieService.delete('token');
    this.router.navigate(["/login"])

    return false;
  }

}
