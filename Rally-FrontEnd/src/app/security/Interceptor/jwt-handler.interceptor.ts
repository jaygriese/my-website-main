import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, 
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { AuthorizeService } from '../security-service/authorize.service';
import { Observable } from 'rxjs';
import { StorageService } from '../security-service/storage-service.service';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: StorageService,
              private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const jwt = this.cookieService.get('token');
    
    if (jwt === null) {
      request = request.clone({
        withCredentials: true,
      });
      return next.handle(request);
    }

    request = request.clone({
      withCredentials: true,
      setHeaders: { authorization: `Bearer ${jwt}`}
    });

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtHandlerInterceptor, multi: true},
]
