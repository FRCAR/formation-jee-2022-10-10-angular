import { Component, OnInit } from '@angular/core';
import { RestaurantSearch } from '../interfaces/RestaurantSearch';

@Component({
  selector: 'restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {

  restaurantSearch : RestaurantSearch = {
    name : "coucou"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
