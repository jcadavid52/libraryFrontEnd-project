import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './Components/list-book-component/list-book.component';
import { IndexPageComponent } from './Pages/index-page.component';
import { DetailBookComponent } from './Components/detail-book/detail-book.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListBookComponent,
    IndexPageComponent,
    DetailBookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IndexPageComponent
    
  ]

})
export class BookModule { }
