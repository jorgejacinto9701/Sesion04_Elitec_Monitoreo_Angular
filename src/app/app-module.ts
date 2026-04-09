import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppMaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistraCliente } from './components/registra-cliente/registra-cliente';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistraCliente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
