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

@Injectable()
export class JwtHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const jwt = this.authService.getUser();

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
