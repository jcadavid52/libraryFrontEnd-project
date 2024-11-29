import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Interfaces/IBook';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
 
})
export class DetailBookComponent implements OnInit {
 public bookId:string | null = '';
 public book:Book = {} as Book;

 constructor(private route:ActivatedRoute,private bookService:BookService){

 }

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.bookId = params.get('id');
  });

  this.onGetBook();


}

onGetBook():void{
  if(this.bookId != null){
  
    this.bookService.getBook(parseInt(this.bookId))
    .subscribe(resp => {
      console.log(resp)
      this.book = resp.book
    })
  }
}
}
