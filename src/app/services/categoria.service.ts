import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

   
  listaCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>("http://localhost:8090/rest/categoria/listaTodos");
  }
}
