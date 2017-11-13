import { RouterModule, Routes } from '@angular/router'
import { RestaurantsComponent } from "./restaurants.component";
import { HomeComponent } from "./home.component";
import { RestaurantComponent } from "./restaurant.component";

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantComponent }
    
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})