import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraCliente } from './components/registra-cliente/registra-cliente';

const routes: Routes = [
     { path : "", component:RegistraCliente },
     { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
