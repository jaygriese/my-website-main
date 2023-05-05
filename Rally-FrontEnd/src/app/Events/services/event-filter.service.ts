import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Event } from '../models/event';
// import { EventViewComponent } from '../event-view/event-view.component';

@Injectable({
  providedIn: 'root'
})
export class EventFilterService {

  private getEventByCategoryUrl = 'http://localhost:8080/events/';

  constructor(private http: HttpClient, private router: Router) { }

  public eventDetails: Event[];

 getEventByConnect() {
  return this.eventDetails.filter((event) => {
    return event.eventCategory === 'connect';
  });
 }

 getEventByLearn() {
  return this.eventDetails.filter((event) => {
    return event.eventCategory === 'learn';
  });
 }

 getEventByVolunteer() {
  return this.eventDetails.filter((event) => {
    return event.eventCategory === 'volunteer';
  });
 }

 getEventByDonate() {
  return this.eventDetails.filter((event) => {
    return event.eventCategory === 'donate';
  });
 }

 getEventByCelebrate() {
  return this.eventDetails.filter((event) => {
    return event.eventCategory === 'celebrate';
  });
 }


}
