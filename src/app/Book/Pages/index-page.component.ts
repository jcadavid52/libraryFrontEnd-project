import { Component } from '@angular/core';
import { IBook } from '../Interfaces/IBook';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
})
export class IndexPageComponent {
  constructor(private bookService:BookService){

  }

  get books():IBook[]{
    return this.bookService.books;
  }

  onNewBook(book: IBook): void{
    this.bookService.onNewBook(book);
  }

  onDeleteBook(id:number):void{
    this.bookService.onDeleteBook(id);
    
  }


}
