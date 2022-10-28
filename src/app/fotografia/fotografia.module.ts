import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormularioComponent } from "./formulario/formulario.component";
import { FotoComponent } from "./foto/foto.component";
import { InicioComponent } from "./inicio/inicio.component";

@NgModule({
    declarations: [
        FotoComponent,
        InicioComponent,
        FormularioComponent,
    ],

    imports: [
        BrowserModule
    ],
    
    exports: [
        FotoComponent,
        FormularioComponent,
        InicioComponent,
    ]
   
})
export class FotografiaModule {}