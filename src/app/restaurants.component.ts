import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'restaurants',
  template: `
    <p>restaurants works!</p>
    <restaurants-list></restaurants-list>
  `,
  styles: []
})
export class RestaurantsComponent implements OnInit {

  restaurants

  constructor(private http:HttpClient) { }

  fetchRestaurants(){
    this.http.get('http://localhost:3000/restaurants')
      .subscribe(restaurants => {
          this.restaurants = restaurants
      })
  }

  ngOnInit() {
    this.fetchRestaurants()
  }

}
