import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { IndexBookPageComponent } from './Book/Pages/book-page.component';
import { ReservationPageComponent } from './Reservation/Pages/reservation-page.component';
import { HomeComponent } from './Home/home.component';

const routes:Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'book',
        component:IndexBookPageComponent
    },
    {
        path:'reservation',
        component:ReservationPageComponent
    }
]

@NgModule({
   imports:[
    RouterModule.forRoot(routes)
   ],
   exports:[
    RouterModule
   ]
   
})
export class AppRoutingModule { }
