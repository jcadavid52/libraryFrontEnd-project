import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../Interfaces/IBook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',

})
export class AddBookComponent {

  @Output()
  public onNewBook:EventEmitter<Book> = new EventEmitter();

  // public book:Book = {
  //   title: '',
  //   pageNumber: 0,
  //   datePublication: new Date(),
  //   id: 0,
  //   description: '',
  //   dateCreation: undefined,
  //   codeReference: '',
  //   author: undefined,
  //   genero: undefined
  // };

  // addBook():void{
  //   this.onNewBook.emit(this.book);
  //   this.book = {title:'',
  //     countPages:0,
  //     datePublication:new Date()}
  // }
}
