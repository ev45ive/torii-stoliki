import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestaurantsService } from "./services/restaurants.service";

@Component({
  selector: 'restaurants',
  template: `
    <p>restaurants works!</p>

    <restaurants-list [list]="restaurantsService.restaurants"></restaurants-list>
  `,
  styles: []
})
export class RestaurantsComponent implements OnInit {


  constructor(
    public restaurantsService:RestaurantsService
  ) { }

 
  ngOnInit() {
    this.restaurantsService.fetchRestaurants()
  }

}
