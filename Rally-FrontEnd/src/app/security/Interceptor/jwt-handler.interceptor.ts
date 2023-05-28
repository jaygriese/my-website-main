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

@Injectable()
export class JwtHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizeService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const jwt = this.authService.getToken();

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
    console.log(request)
    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtHandlerInterceptor, multi: true},
]
