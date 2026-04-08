import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  registrar(data:Cliente):Observable<any>{
    return this.http.post("http://localhost:8090/rest/cliente", data);
  }
}
