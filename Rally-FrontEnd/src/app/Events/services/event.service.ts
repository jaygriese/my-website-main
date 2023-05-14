import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private getEventByIdUrl = 'http://localhost:8080/events/event/';
  private updateEventUrl = 'http://localhost:8080/events/edit/event/';
  // private deleteEventByIdUrl = 'http://localhost:8080/events/event/';
  

  constructor(private http: HttpClient, private router: Router) { }

  getEvent(id: string) {
    return this.http.get(`${this.getEventByIdUrl}` + id);
  }

  updateEvent(id: string, value: any) {
    return this.http.put(`${this.updateEventUrl}` + id, value);
    //is this right?
  }

  deleteEvent(id: string) {
    return this.http.post('http://localhost:8080/events/event', +id);
    //is this right?
  }


}
