import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  
  nameButton = "cadastrar"
  formulario!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder, 
    private http: HttpClient
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
    this.http.post('http://localhost:3000/fotos/', JSON.stringify (this.formulario.value), this.httpOptions).subscribe();
  }
  
  
  
  /* cadastrar(bastao:any){
    alert("dados cadastrados")
  console.log(bastao.value);
  
     
  } */

}
