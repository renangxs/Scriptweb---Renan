
//Decorar a classe - Utilizar um decorator
//Decorarator diz a função da classe

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, ObservedValueOf } from "rxjs";
import { DatabaseService } from "../../service/database.service";

import { Fotos } from './foto';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{
  nameButton = "Fotos Pares";
  nome = "Minhas Fotos";
  control = true;
  
  //Criar um array de objetos para as fotos
  imagens: Fotos[] = [];

  //O metodo contrutor de toda classe é carregada junto com o componente
  //HttpCLient é a ferramenta utilizada para conectar ao banco de dados(json-server(db.json))
  //Ela tambem permite fazer todo o crud
  //Injeção de dependencia(HttpCLient) - Que é disponiilizar a ferrammenta denttorro dos () do constru
  
  constructor(private database: DatabaseService,
    private router: Router){}

  ngOnInit(){

    try{

       this.database.getFoto().subscribe(caixa => this.imagens = caixa);

  }catch(error){

    console.log(error);
  }
}

  deletar(id:number){
    this.database.delFoto(id);
    this.router.navigate(['/fotos'])
  }


  mudar(){}
}