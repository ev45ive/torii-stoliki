import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { RestaurantsComponent } from './restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
