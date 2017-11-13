import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "./services/restaurants.service";

@Component({
  selector: 'restaurant',
  template: `
    <restaurant-item [restaurant]="restaurant"></restaurant-item>
  `,
  styles: []
})
export class RestaurantComponent implements OnInit {
  restaurant

  constructor(private route:ActivatedRoute,
            private restaurantsService:RestaurantsService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']

    this.restaurantsService.fetchRestaurant(id)
        .subscribe( restaurant => {
          this.restaurant = restaurant
        })
  }

}
