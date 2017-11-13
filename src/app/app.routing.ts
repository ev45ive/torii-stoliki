import { RouterModule, Routes } from '@angular/router'
import { RestaurantsComponent } from "./restaurants.component";

const routes:Routes = [
    { path: 'restaurants', component: RestaurantsComponent }
    
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})