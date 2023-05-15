import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../models/UserEntity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewUserService {

  private masterUrl = 'http://localhost:8080/user';
  private getUserListUrl = this.masterUrl + '/search';
  private getUserBundleByUserName = 'http://localhost:8080/user/getViewUserBundleInformation/';
  private getMainUserBundle = 'http://localhost:8080/user/getMainUserBundleInformation/';

  private postDirectMessageToViewedUser = 'http://localhost:8080/user/sendDirectMessage';

  constructor(private http: HttpClient, private router: Router) { }

  /* Get Request */
  /* Get Request */
  /* Get Request */
  
  getUserList(): Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>(`${this.getUserListUrl}`);
  }

  getViewUserBundleByUserName(username: string) {
    return this.http.get(`${this.getUserBundleByUserName}` + username);
  }

  getMainUserBundleByUserName(userName: string) {
    return this.http.get(`${this.getMainUserBundle}` + userName);
  }

  /* Post Methods */
  /* Post Methods */
  /* Post Methods */

  postDirectMessage(directMessage) {
    return this.http.post(`${this.postDirectMessageToViewedUser}`, directMessage);
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

  userInformationCheck(userDTO) {
    let message1: object;
    let message2: object;
    let message3: object;
    let message4: object;
    let message5: object;
    let response: any[] = [];

    if (userDTO.firstName === "" || userDTO.firstName.length < 3 || userDTO.firstName.length > 20) {
      message1 = {
        message: 1,
        contents: "First Name must be between 3-20 characters"
      };
      response.push(message1);
    }
    if (userDTO.lastName === "" || userDTO.lastName.length < 3 || userDTO.lastName.length > 20) {
      message2 = {
        message: 2,
        contents: "Last Name must be between 3-20 characters"
      };
      response.push(message2);
    }
    if (userDTO.neighborhood === "" || userDTO.neighborhood.length < 3 || userDTO.neighborhood.length > 20) {
      message3 = {
        message: 3,
        contents: "Neighborhood must be between 3-20 characters (Drop Down Menu Pending...)"
      };
      response.push(message3);
    }
    if (userDTO.city === "" || userDTO.city.length < 3 || userDTO.city.length > 20) {
      message4 = {
        message: 4,
        contents: "City must be between 3-20 characters (Drop Down Menu Pending...)"
      };
      response.push(message4);
    }
    if (userDTO.state === "" || userDTO.state.length < 2 || userDTO.state.length > 20) {
      message5 = {
        message: 5,
        contents: "State must be between 2-20 characters (Drop Down Menu Pending...)"
      };
      response.push(message5);
    }
    return response;
  }

  checkUserInformation(userDTO) {
    let response: object[] = [];
    let message1: object;
    let message2: object;
    let message3: object;
    
    if (userDTO.userName === "" || userDTO.userName.length < 3 || userDTO.userName.length > 20) {
      message1 = {
        message: 1,
        contents: "User Name must be between 3-20 characters"
      };
      response.push(message1)
    }
    if ( userDTO.password === "" || userDTO.password.length < 3 || userDTO.password.length > 15) {
      message2 = {
        message: 2,
        contents: "Password must be between 3-20 characters"
      };
      response.push(message2);
    }
    if (userDTO.verifyPassword === "" || userDTO.password !== userDTO.verifyPassword) {
      message3 = {
        message: 3,
        contents: "Passwords must match"
      };
      response.push(message3)
    }
    return response;
  }


}
