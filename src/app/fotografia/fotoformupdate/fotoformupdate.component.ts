import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { Fotos } from '../foto/foto';

@Component({
  selector: 'app-fotoformupdate',
  templateUrl: './fotoformupdate.component.html',
  styleUrls: ['./fotoformupdate.component.css']
})
export class FotoformupdateComponent implements OnInit {

  caixaFotos: Fotos [] = [];

  imagem = {};

  routerId = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private dataBase: DatabaseService

  ) { }

  ngOnInit(): void {
    this.routerId = this.activatedRouter.snapshot.params['id']
    
    if(this.routerId){
      this.dataBase.getFoto().subscribe(results => {
        this.caixaFotos = results;

        for(let i = 0; i < this.caixaFotos.length; i++){
        if(this.caixaFotos[i].id == this.routerId){
          this.imagem = this.caixaFotos[i];
          
        }
        }
        
        

      });
    
    }
  }

}
