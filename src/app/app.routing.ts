import { RouterModule, Routes } from '@angular/router'
import { RestaurantsComponent } from "./restaurants.component";
import { HomeComponent } from "./home.component";

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent }
    
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})