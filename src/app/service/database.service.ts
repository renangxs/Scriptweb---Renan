import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

import { Fotos } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/fotos'
  
  constructor(
    private http: HttpClient
    ) {}


    getFoto(){
        this.http.get<Fotos[]>(this.API);
    }






}
