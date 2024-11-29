import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Interfaces/IBook';

@Component({
  selector: 'list-book-by-category',
  templateUrl: './list-book-by-category.component.html',
 
})
export class ListBookByCategoryComponent implements OnInit {

  constructor(private bookService:BookService){

  }

  ngOnInit(): void {
    this.onListBooksByCategory(this.idCategory)
  }

  
  public books: Book[] = [];

  @Input()
  public idCategory:number = 0;
  
  onListBooksByCategory(idCategory:number):void{
   
    this.bookService.getBookByCategory(idCategory)
     .subscribe(resp =>{
      
      this.books = resp.books || []
     })
   }

}
