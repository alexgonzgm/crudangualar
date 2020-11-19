import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//nos van a permitir hacer peticiones ajax a un servicio externo y modificar las cabeceras
// de esas peticiones 
import { Observable } from 'rxjs';
//con los observavbles recojemos la informacion que nos devuleve el api 
//cuando hagamos una peticion 


@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  public url : string;
  //vamos a hacer peticiones a un servicio externo , que esta en la nube
  //utilizamos  una api rest de prubras reqres.in
  constructor(private _http : HttpClient) { 
    //primero vamos a hacer peticiones a una url que nos devuleva
    // todos los usuarios del api y los listaremos  
    this.url = "https://reqres.in/";
    
    
  }

  getUsuarios(): Observable<any>{
    var request = "api/users?page=2"
   return  this._http.get(this.url + request);

  }
}
