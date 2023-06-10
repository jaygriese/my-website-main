import { Component, OnInit } from '@angular/core';
import { Restaurant } from './models/Restaurant';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-homepage',
  templateUrl: './restaurants-homepage.component.html',
  styleUrls: ['./restaurants-homepage.component.css']
})
export class RestaurantsHomepageComponent implements OnInit {

  results;
  restaurantList: Restaurant[];
  private getRestaurantListUrl: string = 'http://localhost:8080/restaurantList'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.getRestaurantListUrl).subscribe((response: Restaurant[]) => {
      console.log(response);
      this.restaurantList = response;
      console.log(this.restaurantList)
    })
  }
  Search(search: NgForm){
    const searchResults = [];
    localStorage.setItem('searchTerm', search.value.description)
    // this.router.navigate(["/SearchRestaurantComponent"]);

    // console.log(search.value.description)
    for(const key in this.restaurantList){

      if (this.restaurantList[key].restauntName.toLowerCase().includes(search.value.description.toLowerCase())
      || this.restaurantList[key].address.toLowerCase().includes(search.value.description.toLowerCase())
      || this.restaurantList[key].conactInfo.toLowerCase().includes(search.value.description.toLowerCase())      
      || this.restaurantList[key].restaurantType.toLowerCase().includes(search.value.description.toLowerCase())
      || this.restaurantList[key].neighborhood.toLowerCase().includes(search.value.description.toLowerCase())) {
        searchResults.push(this.restaurantList[key]);
        console.log(searchResults)
      }
    }
    return this.results = searchResults;
  }
}
