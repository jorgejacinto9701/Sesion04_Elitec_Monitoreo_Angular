import { Component, signal } from '@angular/core';
import { AppMaterialModule } from './app.material.module';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone:  false,
  styleUrl: './app.css'
})
export class App {

  formRegistra : any;
   
  constructor(private formBuilder: FormBuilder) {
      console.log("App constructor called");
  }

  ngOnInit(): void {
      console.log("App ngOnInit called");
      
      this.formRegistra = this.formBuilder.group({
            nombre: [''],
            correo: [''],
       }) 

  }

  registra(){
      //Swal.fire("Esto es angular!!!!");
      Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
      }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) Swal.fire("Saved!", "", "success");
          else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
      });
  }

}
