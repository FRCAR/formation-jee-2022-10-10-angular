import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RestaurantSearchComponent,
    RestaurantListComponent,
    RestaurantBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }