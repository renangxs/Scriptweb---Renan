import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

   
  nameButton = "cadastrar"
  formulario!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder, 
    private database: DatabaseService
    ) {}

  ngOnInit(): void {
    this.validaForm();
  
  }


  validaForm(){    this.formulario = this.FormBuilder.group({
    img: ['', [Validators.required, Validators.minLength(5)]],
    titulo: ['', [Validators.required, Validators.minLength(3)]]
  });
}


  cadastro(){
    this.database.postFoto(this.formulario.value);
  }

  
  
  /* cadastrar(bastao:any){
    alert("dados cadastrados")
  console.log(bastao.value);
  
     
  } */

}