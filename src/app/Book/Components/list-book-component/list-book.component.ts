import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../Interfaces/IBook';
@Component({
  selector: 'list-book-component',
  templateUrl: './list-book.component.html',
})
export class ListBookComponent  {

  @Input()
  public books: Book[] = [];


  @Output()
  public onDeleteBook: EventEmitter<number> = new EventEmitter();





  // onDeleteEmit(index: number): void {
  //   this.onDeleteBook.emit(index);
  // }

  onReservationEmit(book:Book):void{
  console.log(book)
  }
}
