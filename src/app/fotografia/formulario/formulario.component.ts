import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "cadastrar"

  constructor() { }

  ngOnInit(): void {
  }

  
  
  cadastrar(bastao:any){
  alert(bastao);

  }

}
