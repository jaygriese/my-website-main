import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-asian',
  templateUrl: './restaurant-asian.component.html',
  styleUrls: ['./restaurant-asian.component.css']
})
export class RestaurantAsianComponent implements OnInit {

  // asianRestaurant: Restaurant[] = [];
  
  // restaurantList: Restaurant[];
  // private getRestaurantListUrl: string = 'http://localhost:8080/restaurant/restaurantList'
  // constructor(private http:HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get(this.getRestaurantListUrl).subscribe((response: Restaurant[]) => {
  //     this.restaurantList = response;
  //     console.log(this.restaurantList)

  //     for(let i = 0;i< this.restaurantList.length;i ++) {
  //       if(this.restaurantList[i].restaurantType === "Asian") {
  //           this.asianRestaurant.push(this.restaurantList[i])
  //       }
      
  //     }
  //   })
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
