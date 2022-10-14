import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant';
import { RestaurantSearch } from '../interfaces/RestaurantSearch';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];

  selectedRestaurant?: Restaurant;

  @Input() restaurantSearch?: RestaurantSearch;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }
  
  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(
      restaurantDeLObservable => this.restaurants = restaurantDeLObservable);
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    if (this.restaurantSearch) {
      this.restaurantSearch!.name = restaurant.name;
    }
  }
  

}