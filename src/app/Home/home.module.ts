import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BookModule } from "../Book/book.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BookModule
]
})
export class HomeModule { }
