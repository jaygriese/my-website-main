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
  private deleteEventUrl = 'http://localhost:8080/events/edit/delete';
  // private deleteEventByIdUrl = 'http://localhost:8080/events/event/';

  // private getJoinByIdUrl = 'http://localhost8080/join/join';
  // private getJoinByIdUrl = 'http://localhost8080/join/event';
  private updateJoinUrl = 'http://localhost8080/join/edit/join/';
  private deleteJoinUrl = 'http://localhost8080/join/edit/delete/';
  

  constructor(private http: HttpClient, private router: Router) { }

  getEvent(id: string) {
    return this.http.get(`${this.getEventByIdUrl}` + id);
  }

  updateEvent(id: string, value: any) {
    return this.http.put(`${this.updateEventUrl}` + id, value);
  }

  deleteEvent(id: string) {
    // return this.http.post('http://localhost:8080/events/edit/delete', +id);
    return this.http.post(`${this.deleteEventUrl}`, +id);
  }




  // getJoin(id: string) {
  //   return this.http.get(`${this.getJoinByIdUrl}` + id);

  // }

  updateJoin(id: string, value: any) {
    return this.http.put(`${this.updateJoinUrl}` + id, value);
  }

  deleteJoin(id: string) {
    // return this.http.post('http://localhost:8080/join/edit/delete', +id);
    return this.http.post(`${this.deleteJoinUrl}`, +id);
  }


}
