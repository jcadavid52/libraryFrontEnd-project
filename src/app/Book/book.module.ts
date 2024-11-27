import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './Components/list-book-component/list-book.component';
import { IndexBookPageComponent } from './Pages/book-page.component';
import { DetailBookComponent } from './Components/detail-book/detail-book.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListBookComponent,
    IndexBookPageComponent,
    DetailBookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IndexBookPageComponent
    
  ]

})
export class BookModule { }
