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
  private deleteEventUrl = 'http://localhost:8080/events/edit/delete/';
  // private deleteEventByIdUrl = 'http://localhost:8080/events/event/';

  private getJoinByIdUrl = 'http://localhost8080/join/join'
  private updateJoinUrl = 'http://localhost8080/join/edit/event/';
  private deleteJoinUrl = 'http://localhost8080/join/edit/delete/';
  

  constructor(private http: HttpClient, private router: Router) { }

  getEvent(id: string) {
    return this.http.get(`${this.getEventByIdUrl}` + id);
  }

  updateEvent(id: string, value: any) {
    return this.http.put(`${this.updateEventUrl}` + id, value);
    //is this right?
  }

  deleteEvent(id: string) {
    // return this.http.post('http://localhost:8080/events/event', +id);
    return this.http.post('http://localhost:8080/events/edit/delete', +id);
    //is this right?
  }




  getJoin(id: string) {
    return this.http.get(`${this.getJoinByIdUrl}` + id);

  }

  updateJoin(id: string, value: any) {
    return this.http.put(`${this.updateJoinUrl}` + id, value);
  }

  deleteJoin(id: string) {
    return this.http.post('http://localhost:8080/join/edit/delete', +id);
  }


}
