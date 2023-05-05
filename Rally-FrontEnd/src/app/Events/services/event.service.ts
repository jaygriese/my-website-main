import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private getEventByIdUrl = 'http://localhost:8080/event';

  constructor(private http: HttpClient, private router: Router) { }

  getEventById(id: number) {
    return this.http.get(`${this.getEventByIdUrl}` + id);
  }


}
