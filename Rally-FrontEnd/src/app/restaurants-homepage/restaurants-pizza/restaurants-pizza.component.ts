import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants-pizza',
  templateUrl: './restaurants-pizza.component.html',
  styleUrls: ['./restaurants-pizza.component.css']
})
export class RestaurantsPizzaComponent implements OnInit {

  pizzaRestaurant: Restaurant[] = [];
  
  restaurantList: Restaurant[];
  private getRestaurantListUrl: string = 'http://localhost:8080/restaurantList'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.getRestaurantListUrl).subscribe((response: Restaurant[]) => {
      this.restaurantList = response;
      console.log(this.restaurantList)

      for(let i = 0;i< this.restaurantList.length;i ++) {
        if(this.restaurantList[i].restaurantType === "Pizza" || this.restaurantList[i].restaurantType === "pizza") {
            this.pizzaRestaurant.push(this.restaurantList[i])
        }
      }
    })
  }

}
