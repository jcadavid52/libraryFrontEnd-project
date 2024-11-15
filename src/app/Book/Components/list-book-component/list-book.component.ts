import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { IBook } from '../../Interfaces/IBook';

@Component({
  selector: 'list-book-component',
  templateUrl: './list-book.component.html',
})
export class ListBookComponent {
 
 

  @Input()
  public books: IBook[] = [];

  @Output()
  public onDeleteBook:EventEmitter<number> = new EventEmitter();
  
  onDeleteEmit(index:number):void{
    this.onDeleteBook.emit(index)
  }
}
