import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../models/UserEntity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewUserService {

  private getUserListUrl = 'http://localhost:8080/user/search';
  private searchUserByIdUrl = 'http://localhost:8080/user/searchid/';
  private searchUserByUserNameUrl = 'http://localhost:8080/user/searchUserName/';
  private searchUserInformationByIdUrl = 'http://localhost:8080/user/userinfo/';
  private searchUserInformationByUserIdUrl = 'http://localhost:8080/user/getUserInformationByUserId/';
  private getUserBundleByUserName = 'http://localhost:8080/user/getViewUserBundleInformation/';
  private getUserIdCountRegister = 'http://localhost:8080/api/userIdCount';
  private getDirectMessagesWithUserId = 'http://localhost:8080/user/getActiveUserDirectMessageHistory/';
  private getDirectMessageHistory = 'http://localhost:8080/user/getActiveUserDmList/';
  private getMainUserBundle = 'http://localhost:8080/user/getMainUserBundleInformation/';

  private postDirectMessageToViewedUser = 'http://localhost:8080/user/sendDirectMessage';

  constructor(private http: HttpClient, private router: Router) { }

  getDmHistoryDirectMessages(mainUserid: string) {
    return this.http.get(`${this.getDirectMessageHistory}` + mainUserid)
  }

  getDmHistoryUsers(id: string) {
    return this.http.get(`${this.getDirectMessagesWithUserId}` + id);
  }

  getUserList(): Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>(`${this.getUserListUrl}`);
  }

  getUserById(id: string) {
    return this.http.get(`${this.searchUserByIdUrl}` + id);
  }

  getUserByUserName(userName: string) {
    return this.http.get(`${this.searchUserByUserNameUrl}` + userName);
  }

  getClassUserInformation(id: string) {
    return this.http.get(`${this.searchUserInformationByIdUrl}` + id);
  }

  getUserInformationByUserId(id: string) {
    return this.http.get(`${this.searchUserInformationByUserIdUrl}` + id);
  }

  getViewUserBundleByUserName(username: string) {
    return this.http.get(`${this.getUserBundleByUserName}` + username);
  }

  getCurrentUserIdCount() {
    return this.http.get(`${this.getUserIdCountRegister}`);
  }

  getDirectMessagesFromUserId(id: string) {
    return this.http.get(`${this.getDirectMessagesWithUserId}` + id);
  }

  getMainUserBundleByUserName(userName: string) {
    return this.http.get(`${this.getMainUserBundle}` + userName);
  }

  /* Service methods */
  /* Service methods */
  /* Service methods */

  redirectWhenViewingSelf(userName) {
    if (localStorage.getItem('userName') === userName) {
      this.router.navigate(["/myProfile"])
      return;
    }
  }

  /* Post Methods */
  /* Post Methods */
  /* Post Methods */

  postDirectMessage(directMessage) {
    return this.http.post(`${this.postDirectMessageToViewedUser}`, directMessage);
  }

}
