import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "cadastrar"
  formulario!: FormGroup;

  constructor(private FormBuilder: FormBuilder) { 
    this.formulario = FormBuilder.group({
      img: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['']
    });
  }

  ngOnInit(): void {
  }

  cadastro(){
    console.log(this.formulario);
  }
  
  
  
  /* cadastrar(bastao:any){
    alert("dados cadastrados")
  console.log(bastao.value);
  
     
  } */

}
