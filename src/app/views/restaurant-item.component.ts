import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'restaurant-item',
  template: `
    <h5>{{restaurant.name}}</h5>
    <p>{{restaurant.address}}</p>
  `,
  styles: []
})
export class RestaurantItemComponent implements OnInit {

  @Input()
  restaurant

  constructor() { }

  ngOnInit() {
  }

}
