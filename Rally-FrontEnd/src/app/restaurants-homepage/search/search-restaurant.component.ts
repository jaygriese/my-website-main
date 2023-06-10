import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchRestaurantComponent implements OnInit {

  results;
  noResults: boolean= false;
  restaurantList: Restaurant[];
    private getRestaurantListUrl: string = 'http://localhost:8080/restaurantList'
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
      this.http.get(this.getRestaurantListUrl).subscribe((response: Restaurant[]) => {
        // console.log(response);
        this.restaurantList = response;
        // console.log(this.restaurantList)
      })
  }
  Search(search: NgForm){
    this.noResults= false;
    const searchResults = [];
    if(search.value.description === "") {
      this.noResults = true;
      return
    }
    localStorage.setItem('searchTerm', search.value.description)

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
    if(searchResults.length === 0) {
      this.noResults = true;
    }

    // if(searchResults.contains()) {
    //   this.noResults = true;
    // }

    return this.results = searchResults;
  }
}