import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizeService } from './authorize.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: CookieService,
              private authorize: AuthorizeService,
              private router: Router) { }

  /* Returns the userName from the token as a string */
  public getUserName(): any {

    if (this.cookieService.check('token') === false){
      this.router.navigate(['/login']);
      return;
    }

    let tokenInfo: any = this.cookieService.get('token');

    /* if token doesn't parse correctly if tampered with, log out the user */
    try {
      JSON.parse(atob(tokenInfo.split(".")[1]));
    } catch(e) {
      this.authorize.logOut();
      return;
    }

    const payload = atob(tokenInfo.split(".")[1]);
    const parsedPayload = JSON.parse(payload);
    return parsedPayload.sub;

  }
}
