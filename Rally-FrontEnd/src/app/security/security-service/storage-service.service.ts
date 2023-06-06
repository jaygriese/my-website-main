import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizeService } from './authorize.service';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: CookieService,
              private authorize: AuthorizeService) { }

  public getUserName(): any {
    let tokenInfo: any = this.cookieService.get('token')
    const payload = atob(tokenInfo.split(".")[1])
    try {
      JSON.parse(payload)
    } catch(e) {
      this.authorize.clean();
      return;
    }
    const parsedPayload = JSON.parse(payload)
    return parsedPayload.sub;

  }
}
