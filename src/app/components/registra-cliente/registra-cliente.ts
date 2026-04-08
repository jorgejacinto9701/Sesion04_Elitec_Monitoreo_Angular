import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registra-cliente',
  standalone: false,
  templateUrl: './registra-cliente.html',
  styleUrl: './registra-cliente.css',
})
export class RegistraCliente {

    ejemplo: Cliente ={
      nombre: "",
      dni : "",
      estado: 1,
      categoria:{
          idCategoria:-1
      },
    };
  

   constructor(private categoriaService: CategoriaService,
          private clienteService: ClienteService,
            private formBuilder: FormBuilder) {
        console.log(">>> constructor  >>> ");
   }

}
