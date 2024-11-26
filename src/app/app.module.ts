import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookModule } from './Book/book.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BookModule,
  
  ],
  providers:[provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
