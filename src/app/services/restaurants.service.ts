import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RestaurantsService {

  constructor(private http:HttpClient) { }

  restaurants

  fetchRestaurants(query=''){
    this.http.get('http://localhost:3000/restaurants?q='+query)
      .subscribe(restaurants => {
          this.restaurants = restaurants
      })
  }

  fetchRestaurant(id){
    return this.http.get('http://localhost:3000/restaurants/' + id) 
  }

}
