import { Component, OnInit } from '@angular/core';
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
    this.userUrl = 'http://localhost:8080/service/offer';
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

  // Attempting validation
  model = new Name(localStorage.getItem('userName'));

  logOut() {
    localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus = false;
  }

  submitted = false;

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
      console.log(res);
      console.log(f.value.days);
    })

    f.reset();

}
}
