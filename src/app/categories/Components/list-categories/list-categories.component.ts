import { Component, OnInit } from '@angular/core';
import { Category } from '../../Interfaces/ICategory';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'list-categories',
  templateUrl: './list-categories.component.html',

})
export class ListCategoriesComponent implements OnInit {
 
  public categories:Category[] = [];

  ngOnInit(): void {
    this.onGetCategories();
  }

  constructor(private categoryService:CategoryService){

  }

  onGetCategories():void{
   this.categoryService.getAllCategories()
   .subscribe(resp => {
    console.log(resp.categories)
    this.categories = resp.categories || []
   })
  }
}
