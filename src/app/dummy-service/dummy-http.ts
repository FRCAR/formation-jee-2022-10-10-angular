import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../interfaces/Booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyHttp {

  private baseUrl = "http://localhost:8080/booking/rest/v1";

  constructor(private http: HttpClient) { }

  public post(booking: Booking): Observable<Booking>{
      return this.http.post(this.baseUrl + "/bookings", booking);
  }
  
}
