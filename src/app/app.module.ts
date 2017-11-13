import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { RestaurantsComponent } from './restaurants.component';
import { HomeComponent } from './home.component';
import { RestaurantsListComponent } from './views/restaurants-list.component';
import { RestaurantsService } from "./services/restaurants.service";
import { RestaurantItemComponent } from './views/restaurant-item.component';
import { RestaurantComponent } from './restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HomeComponent,
    RestaurantsListComponent,
    RestaurantItemComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
