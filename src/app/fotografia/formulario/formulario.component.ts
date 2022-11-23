import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private database: DatabaseService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.validaForm();
  
  }


  validaForm(){    this.formulario = this.FormBuilder.group({
    img: ['', [Validators.required, Validators.minLength(5)]],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    raca: ['', [Validators.required, Validators.minLength(3)]],
    idade: ['', [Validators.required, Validators.minLength(1)]],
    fone: ['', [Validators.required, Validators.minLength(3)]],
    cidade: ['', [Validators.required, Validators.minLength(3)]],
  });
}


  cadastro(){
    this.database.postFoto(this.formulario.value);
    this.router.navigate(['/fotos'])
  }

  
  

}