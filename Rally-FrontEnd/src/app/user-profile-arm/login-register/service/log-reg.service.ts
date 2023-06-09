import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  constructor() { }

  /* Checks the username, password, and email for blank spaces and returns a boolean */
  blankSpaceDetect(userInfo) {

    let checkName = userInfo.userName.split('');
    let checkEmail = userInfo.userEmail.split('');
    let checkPass = userInfo.password.split('');
    
    if (checkName.includes(' ') || checkEmail.includes(' ') || checkPass.includes(' ')) {
      return true;
    } else {
      return false;
    }
  }

  /* Checks the userinformation to see if first and last name meet character requirements */
  /*  if error - send an object(s) with a message stating the issue. */
  userInformationCheck(userDTO) {
    let message1: object;
    let message2: object;
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
    return response;
  }

  /* Checks the user details to see if character requirements are met */
  /* if errors - send an object(s) with a message stating the issue. */
  checkUserInformation(userDTO) {
    let response: object[] = [];
    let message1: object;
    let message2: object;
    let message3: object;
    let message4: object;
    
    if (userDTO.userName === "" || userDTO.userName.length < 3 || userDTO.userName.length > 20) {
      message1 = {
        message: 1,
        contents: "User Name must be between 3-20 characters"
      };
      response.push(message1);
    }
    if (userDTO.userEmail === "") {
      message2 = {
        message: 2,
        contents: "Please enter a valid Email address"
      }
      response.push(message2);
    }
    if ( userDTO.password === "" || userDTO.password.length < 8 || userDTO.password.length > 15) {
      message3 = {
        message: 3,
        contents: "Password must be between 8-20 characters"
      };
      response.push(message3);
    }
    if (userDTO.verifyPassword === "" || userDTO.password !== userDTO.verifyPassword) {
      message4 = {
        message: 4,
        contents: "Passwords must match"
      };
      response.push(message4);
    }
    return response;
  }
}
