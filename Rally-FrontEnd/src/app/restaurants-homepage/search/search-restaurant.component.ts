import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchRestaurantComponent implements OnInit {
  results: Restaurant[] = []; // Ensure results is initialized as an empty array
  noResults: boolean = false;
  restaurantList: Restaurant[] = [];
  private getRestaurantListUrl: string = 'http://localhost:8080/restaurantList';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Restaurant[]>(this.getRestaurantListUrl).subscribe(
      (response: Restaurant[]) => {
        this.restaurantList = response;
      },
      (error) => {
        console.error('Error fetching restaurant list', error);
      }
    );
  }

  Search(search: NgForm): void {
    this.noResults = false;
    const searchResults: Restaurant[] = [];
    const searchTerm: string = search.value.description.trim().toLowerCase(); // Trim and lowercase search term

    if (!searchTerm) {
      this.noResults = true;
      return;
    }

    localStorage.setItem('searchTerm', search.value.description);

    for (const restaurant of this.restaurantList) {
      if (
        (restaurant.restauntName &&
          restaurant.restauntName.toLowerCase().includes(searchTerm)) ||
        (restaurant.address &&
          restaurant.address.toLowerCase().includes(searchTerm)) ||
        (restaurant.conactInfo &&
          restaurant.conactInfo.toLowerCase().includes(searchTerm)) ||
        (restaurant.restaurantType &&
          restaurant.restaurantType.toLowerCase().includes(searchTerm)) ||
        (restaurant.neighborhood &&
          restaurant.neighborhood.toLowerCase().includes(searchTerm))
      ) {
        searchResults.push(restaurant);
      }
    }

    if (searchResults.length === 0) {
      this.noResults = true;
    }

    this.results = searchResults;
  }
}
