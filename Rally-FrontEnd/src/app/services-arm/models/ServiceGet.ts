import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class ViewService {
  
    private getSearchService = 'http://localhost:8080/services/searchservice';
  
    constructor(private http: HttpClient, private router: Router) { }
  
    getService () {
      return this.http.get(`${this.getSearchService}`)
    }
  }


  @Injectable({
    providedIn: 'root'
  })
  export class ViewId {
    private getIdURL = 'http://localhost:8080/services/searchUser';

    constructor(private http: HttpClient, private router: Router) { }

    getId () {
      return this.http.get(`${this.getIdURL}`)
    }
  }
  