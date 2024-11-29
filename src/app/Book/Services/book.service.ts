import { Injectable } from '@angular/core';
import { Book, IBook, IndexBook } from '../Interfaces/IBook';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const url:string = 'http://localhost:9096/api/Book';

@Injectable({ providedIn: 'root' })
export class BookService {
 

  public books: Book[] = [];

  constructor(private http: HttpClient) {}

  // onNewBook(book: IBook): void {
  //   this.books.push(book);
  // }

  onDeleteBook(index: number): void {
    console.log(index);
    this.books.splice(index, 1);
  }

  

  getAllBooks(): Observable<IndexBook> {
    return this.http.get<IndexBook>(url + '/GetAllBooks');
  }

  getBookByCategory(idCategory:number):Observable<IndexBook>{
    return this.http.get<IndexBook>(`${url}/GetBooksByCategory?idCategory=${idCategory}`);
  }
}
