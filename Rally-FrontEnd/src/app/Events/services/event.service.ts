import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private getEventByIdUrl = 'http://localhost:8080/event/{id}/';

  constructor(private http: HttpClient, private router: Router) { }

  getEvent(id: number) {
    return this.http.get(`${this.getEventByIdUrl}` + id);
  }


}
