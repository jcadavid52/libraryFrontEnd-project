import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListReservationComponent } from './Components/list-reservation/list-reservation.component';
import { ReservationPageComponent } from './Pages/reservation-page.component';
import { AddReservationComponent } from './Components/add-reservation/add-reservation.component';

@NgModule({
  declarations: [
    ListReservationComponent,
    ReservationPageComponent,
    AddReservationComponent,
  ],
  imports: [CommonModule],
  exports: [ReservationPageComponent],
})
export class ReservationModule {}
