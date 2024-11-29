import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [NavComponent, SelectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavComponent]
})
export class SharedModule { }
