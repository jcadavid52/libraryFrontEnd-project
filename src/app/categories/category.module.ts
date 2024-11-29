import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './Components/list-categories/list-categories.component';




@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule
  ],
  exports:[ListCategoriesComponent]
  
})
export class CategoryModule { }
