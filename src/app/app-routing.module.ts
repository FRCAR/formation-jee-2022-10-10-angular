import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurant-list', pathMatch: 'full' },
  { path: 'restaurant-list', component: RestaurantListComponent },
  { path: 'restaurant-booking', component: RestaurantBookingComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
