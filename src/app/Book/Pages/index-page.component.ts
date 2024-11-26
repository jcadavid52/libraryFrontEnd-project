import { Component, OnInit } from '@angular/core';
import { Book, IBook } from '../Interfaces/IBook';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
})
export class IndexPageComponent implements OnInit{
  constructor(private bookService:BookService){

  }

  public books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  // onNewBook(book: IBook): void{
  //   this.bookService.onNewBook(book);
  // }

  onDeleteBook(id:number):void{
    this.bookService.onDeleteBook(id);
    
  }

  getBooks(): void {
    this.bookService.getAllBooks()
    .subscribe(resp => {
      this.books = resp.books;
    })
  }

  


}
