import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BookModule } from "../Book/book.module";
import { CategoryModule } from '../categories/category.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BookModule,
    CategoryModule
]
})
export class HomeModule { }
