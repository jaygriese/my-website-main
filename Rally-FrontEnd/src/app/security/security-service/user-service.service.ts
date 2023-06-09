import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const VERIFY_URL = 'http://localhost:8080/verify/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  /* Experiment class, not used atm */
  /* Experiment class, not used atm */
  /* Experiment class, not used atm */
  /* This looks at your role and grants you access based on them */

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(VERIFY_URL + "all", { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(VERIFY_URL + "user", { responseType: 'text' });
  }

}
