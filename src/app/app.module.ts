import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookModule } from './Book/book.module';
import { ReservationModule } from './Reservation/reservation.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Shared/shared.module';
import { HomeModule } from './Home/home.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BookModule,
    ReservationModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    
  
  ],
  providers:[provideHttpClient()],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
