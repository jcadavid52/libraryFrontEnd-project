import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../../Interfaces/IBook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',

})
export class AddBookComponent {

  @Output()
  public onNewBook:EventEmitter<IBook> = new EventEmitter();

  public book:IBook = {
    title:'',
    countPages:0,
    datePublication:new Date()
  };

  addBook():void{
    this.onNewBook.emit(this.book);
    this.book = {title:'',
      countPages:0,
      datePublication:new Date()}
  }
}
