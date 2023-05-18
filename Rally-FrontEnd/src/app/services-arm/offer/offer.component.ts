import { Component, OnInit, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceDTO } from '../models/Service';
import { Name } from '../models/Service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  private userUrl: string;
  currentUser;
  logInStatus: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.userUrl = 'http://localhost:8080/services/offer';
   }

  ngOnInit(): void {

    this.verifyLoggedIn();
    
  }

  verifyLoggedIn() {

    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }

  }

  logOut() {
    localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus = false;
  }

  // Validations
  types = ["Offering", "Requesting"];
  typeModel = {type: this.types[0]};

  categories = ["Art", "Administrative", "Babysitting", "Dogwalking", "Event", "Music", "Other", "Photography", "Repair", "Rideshare"];
  categoryModel = {category: this.categories[0]}

  days = ["Any", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  daysModel = {day: this.days[0]}

  times = ["Any", "Morning", "Afternoon", "Evening"];
  timeModel = {time: this.times[0]}

  model = new Name(localStorage.getItem('userName'), localStorage.getItem('service'), localStorage.getItem('description'), localStorage.getItem('email'));

  submitted = false;

  // submit form method
  onSubmit(f: NgForm ) {

    this.submitted = true;

    let submitService: ServiceDTO = {
      userName: f.value.userName,
      description: f.value.description,
      category: f.value.category,
      days: f.value.days,
      email: f.value.email,
      service: f.value.service,
      time: f.value.time,
      type: f.value.type
    }
    
    
    this.http.post(this.userUrl, submitService).subscribe((res) => {
      console.log(submitService.userName);
      console.log(submitService.type);
      console.log(submitService.service);
      console.log(submitService.category);
      console.log(submitService.days);
      console.log(submitService.time);
      console.log(submitService.description);
      console.log(submitService.email);
      console.log(res);
    })

}
}
