import { Injectable } from '@angular/core';
import { UserInfoDTO } from '../../models/dto/UserInfoDTO';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserInformation } from '../../models/UserInformation';


@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private userUrl: string = 'http://localhost:8080/user/update-user-information';

  constructor(private http: HttpClient) { }



  newUpdateUserInfo( activeUserId: number, userDetails: NgForm) {

    let userInfo: UserInfoDTO = {
      userId: activeUserId,
      firstName: userDetails.value.firstName,
      lastName: userDetails.value.lastName, 
      neigborhood: userDetails.value.neigborhood,
      city: userDetails.value.city,
      state: userDetails.value.state
    }

    this.http.post(this.userUrl, userInfo).subscribe((response: UserInformation) => {
      console.log(response)
    });
  }

}
