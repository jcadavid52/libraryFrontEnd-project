import { Injectable } from '@angular/core';
import { IBook } from '../Interfaces/IBook';

@Injectable({providedIn: 'root'})
export class BookService {
    public books: IBook[] = [{
        title: 'Libro 1',
        countPages: 450,
        datePublication: new Date('1866-01-01'),
      },
      {
        title: 'Libro 2',
        countPages: 369,
        datePublication: new Date('1940-02-02'),
      },
      {
        title: 'Libro 3',
        countPages: 220,
        datePublication: new Date('1933-03-03'),
      },
      {
        title: 'Libro 4',
        countPages: 444,
        datePublication: new Date('1944-04-04'),
      },
      {
        title: 'Libro 5',
        countPages: 369,
        datePublication: new Date('1955-05-05'),
      },];
    
      onNewBook(book: IBook): void {
        this.books.push(book);
        
      }
    
      onDeleteBook(index:number):void{
         console.log(index)
         this.books.splice(index,1)
      }
    
}