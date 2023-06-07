import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizeService } from './authorize.service';
import { Router } from '@angular/router';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: CookieService,
              private authorize: AuthorizeService,
              private router: Router) { }

  public getUserName(): any {

    if (this.cookieService.check('token') === false){
      this.router.navigate(['/login'])
      return;
    }

    let tokenInfo: any = this.cookieService.get('token')
    const payload = atob(tokenInfo.split(".")[1])

    try {
      JSON.parse(payload)
    } catch(e) {
      this.authorize.logOut();
      return;
    }
    const parsedPayload = JSON.parse(payload)
    return parsedPayload.sub;

  }
}
