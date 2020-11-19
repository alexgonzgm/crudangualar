import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Global } from './Global';
import { Observable } from 'rxjs';
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private url : string;

  constructor(private _http :HttpClient ) { 
    this.url = Global.urlDepartamento;
  }

  getDepartamentos () :Observable<any>{
    var request = "/api/departamentos";
    return this._http.get(this.url + request);
  }

  insertarDepartamento(departamento : Departamento):Observable<any>{
    var request = "/api/departamentos";
    var json = JSON.stringify(departamento);
    var header = new HttpHeaders().set("Content-type","application/json");
    return this._http.post(this.url + request , json, {headers : header});

  }
  deleteDepartamento(id : string) : Observable<any>{
    // si no ponemos esos ni response ni succeess ni errror
    var request = "/api/departamentos/" + id;
    return this._http.delete(this.url+ request);

  }

  updateDepartamento(departamento : Departamento ):Observable<any>{
    let json = JSON.stringify(departamento);
    var request = "/api/departamentos";

    var header = new HttpHeaders().set("Content-type","application/json");
    return this._http.put(this.url + request , json,{headers : header});

  }
  busacarDepartamento(id : string):Observable<any>{
    var request = "/api/departamentos/" + id;
    return this._http.get(this.url + request);

  }
}
