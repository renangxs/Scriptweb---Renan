import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FotoComponent } from "./foto/foto.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { InicioComponent } from "./inicio/inicio.component";

import { CommonModule } from "@angular/common";

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    //Determina quais componentes são de responsabilidade do modulo
    declarations: [
        FotoComponent,
        FormularioComponent,
        InicioComponent,
    
    ],

    
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
       
    ],

    //Permite que outros modulos ou componentes acessem este grupo
    exports: [
        FotoComponent,
        FormularioComponent,
      
    ]
   
})
export class FotografiaModule{}