import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ReviewDTO } from '../models/ReviewDTO';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  restaurantId;
  restaurant;
  reviewRestaurant;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.restaurantId = +this.route.snapshot.paramMap.get('id');
}


  ngOnInit(): void {
    this.http.get("http://localhost:8080/viewRestaurant/" + this.restaurantId).subscribe((response) => {
  console.log(response);
  this.restaurant = response;
  })

  this.http.get("http://localhost:8080/restaurantReviews/" + this.restaurantId).subscribe((response) => {
    console.log(response);
    this.reviewRestaurant = response;
  // console.log(this.reviewRestaurant)
    })
}

  submit(review: NgForm) {
    console.log("form submitted", review)
    let reviewDetails: ReviewDTO = {description: review.value.userReview, name: localStorage.getItem("userName"), restaurantId: this.restaurantId}
    console.log(reviewDetails);
    this.http.post("http://localhost:8080/reviews", reviewDetails).subscribe((res) => {
      location.reload();
    })
  }
}


