import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "./services/restaurants.service";

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <restaurants-list [list]="restaurantsService.restaurants"></restaurants-list>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    public restaurantsService:RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantsService.fetchRestaurants()
  }

}
