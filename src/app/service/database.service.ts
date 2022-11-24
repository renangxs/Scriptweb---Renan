import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

import { Fotos } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  readonly API = 'http://localhost:3000/fotos/'
  

  constructor(
    private http: HttpClient,
    ) {}


    getFoto(){
       return this.http.get<Fotos[]>(this.API);
    }

    postFoto(dados: Fotos){
      return this.http.post(this.API, JSON.stringify(dados), this.httpOptions).subscribe();
    }

    delFoto(id:number){
      return this.http.delete(this.API + id).subscribe();
    }

    updateFoto(dados: Fotos){
      return this.http.put(this.API + dados.id, JSON.stringify(dados), this.httpOptions).subscribe();
      }
}
