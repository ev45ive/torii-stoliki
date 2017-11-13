import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurants-list',
  template: `
    <div *ngFor="let restaurant of restaurants">{{restaurant.name}}</div>
  `,
  styles: []
})
export class RestaurantsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
