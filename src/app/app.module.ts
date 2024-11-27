import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookModule } from './Book/book.module';
import { ReservationModule } from './Reservation/reservation.module';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Shared/nav/nav.component';
import { SharedModule } from './Shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
   

    
    
  ],
  imports: [
    BrowserModule,
    BookModule,
    ReservationModule,
    AppRoutingModule,
    SharedModule
  
  ],
  providers:[provideHttpClient()],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
