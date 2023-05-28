import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/verify/'

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }

  getToken() {
    const userInfo: any = sessionStorage.getItem("auth-user")
    if (!userInfo) {
      return null;
    } else {
    return userInfo.accessToken;
    }
  }
}
