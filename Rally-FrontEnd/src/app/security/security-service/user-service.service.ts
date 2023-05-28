import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const VERIFY_URL = 'http://localhost:8080/verify/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(VERIFY_URL + "all", { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(VERIFY_URL + "user", { responseType: 'text' });
  }

}
