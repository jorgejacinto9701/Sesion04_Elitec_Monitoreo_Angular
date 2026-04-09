import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { ClienteService } from '../../services/cliente.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-registra-cliente',
  standalone: false,
  templateUrl: './registra-cliente.html',
  styleUrl: './registra-cliente.css',
})
export class RegistraCliente {

    cliente: Cliente ={
      nombre: "",
      dni : "",
      estado: 1,
      categoria:{
          idCategoria:-1
      },
    };
  
    formsRegistra: FormGroup;
    listaCategorias: Categoria[] = [];


   constructor( private formBuilder: FormBuilder,
                private categoriaService: CategoriaService,
                private clienteService: ClienteService
   ) {
        this.formsRegistra = this.formBuilder.group({
          nombre: ['', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,50}')]],
          dni: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
          categoria: ['', [Validators.required]],
        });

        this.categoriaService.listaCategorias().subscribe({
          next: (data) => { this.listaCategorias = data; },
        });
   }

   registra(){
    console.log(this.cliente);
    if(this.formsRegistra.invalid){
      this.formsRegistra.markAllAsTouched();
      return;
    }

    this.clienteService.registrar(this.cliente).subscribe({
      next: (data) => {
        alert("Cliente registrado correctamente");
        this.formsRegistra.reset();
      },
      error: (err) => {
        alert("Error al registrar el cliente");
      }
    });
      
   };

   
}
