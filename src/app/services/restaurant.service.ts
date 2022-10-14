import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[] = [
    { id: 45, name: 'Pizzeria' },
    { id: 99, name: 'La bonne auberge' },
    { id: 122, name: 'Le palais impérial' },
    { id: 123, name: 'Le royal cachemire' }
  ];

  constructor() { }

  getRestaurants(): Observable<Restaurant[]> {
    const restaurants = of(this.restaurants);
    return restaurants; // ←On retourne un Observable du tableau de BookingUsers
  }

}
