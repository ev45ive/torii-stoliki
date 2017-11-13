import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'restaurants-list',
  template: `
    <div *ngFor="let item of restaurants">
      <restaurant-item [restaurant]="item"></restaurant-item>
    </div>
  `,
  styles: []
})
export class RestaurantsListComponent implements OnInit {

  @Input('list')
  restaurants

  constructor() { }

  ngOnInit() {
  }

}
