import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexCategory } from '../Interfaces/ICategory';

const url:string = 'http://localhost:9096/api/Category';
@Injectable({providedIn: 'root'})


export class CategoryService  {

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<IndexCategory>{
    return this.http.get<IndexCategory>(`${url}/GetAllCategories`)
  }
}
