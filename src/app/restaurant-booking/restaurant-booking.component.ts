import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../interfaces/Booking';
import { BookingService } from '../services/booking-service.service';

@Component({
  selector: 'restaurant-booking',
  templateUrl: './restaurant-booking.component.html',
  styleUrls: ['./restaurant-booking.component.css']
})
export class RestaurantBookingComponent  {

  booking : Booking = {};

  constructor(private bookingService : BookingService
  ) {  }

  ngOnInit(): void {
  }

  save(): void{
    this.bookingService.post(this.booking).
      subscribe(bookingRetourneParLObservable => this.booking = bookingRetourneParLObservable);
  }

}
