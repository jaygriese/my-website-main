import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-american',
  templateUrl: './restaurant-american.component.html',
  styleUrls: ['./restaurant-american.component.css']
})
export class RestaurantAmericanComponent implements OnInit {

  americanRestaurant: Restaurant[] = [];
  
  restaurantList: Restaurant[];
  private getRestaurantListUrl: string = 'http://localhost:8080/restaurantList'
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.getRestaurantListUrl).subscribe((response: Restaurant[]) => {
      this.restaurantList = response;
      console.log(this.restaurantList)



      for(let i = 0;i< this.restaurantList.length;i ++) {
        if(this.restaurantList[i].restaurantType === "American") {
            this.americanRestaurant.push(this.restaurantList[i])
        }
      }
    })
  }

}
