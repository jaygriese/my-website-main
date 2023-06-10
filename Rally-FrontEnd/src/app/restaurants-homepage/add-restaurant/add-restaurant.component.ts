import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { addRestaurant } from '../models/addRestaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  restaurantName: String;
  address: String;
  contactInfo: String;
  neighborhood: String;
  restaurantType: String;
  restaurantListURL;
  addedRestaurant;

  constructor(private http: HttpClient, private router: Router) {
    this.restaurantListURL = 'http://localhost:8080/add';
   }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm ) {
    let submittedRestaurant: addRestaurant = {
      restauntName: f.value.restauntName,
      address: f.value.address,
      conactInfo: f.value.conactInfo,
      neighborhood: f.value.neighborhood,
      restaurantType: f.value.restaurantType.toLowerCase()
    }

    this.http.post(this.restaurantListURL, submittedRestaurant).subscribe((res: any) => {
      console.log(res)
      this.router.navigate(['/restaurants/'+res.restaurantType])
    })
    // route user to new added restaurant:
    // return this.addedRestaurant= submittedRestaurant;
  }
}
