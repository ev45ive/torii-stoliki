import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RestaurantsService {

  constructor(private http:HttpClient) { }

  restaurants

  fetchRestaurants(){
    this.http.get('http://localhost:3000/restaurants')
      .subscribe(restaurants => {
          this.restaurants = restaurants
      })
  }

}
