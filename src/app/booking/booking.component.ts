import { Component, OnInit } from '@angular/core';
import { Booking } from '../interfaces/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  title = 'Hey !!!!';

  booking: Booking = {
    id: 1,
    name: 'My first booking'
  }

  constructor() { }

  ngOnInit(): void {
  }




}
