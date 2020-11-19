import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
})
export class InsertarComponent implements OnInit {
  @ViewChild("cajanumero") cajanumero : ElementRef;
  @ViewChild("cajanombre") cajanombre : ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad : ElementRef;

  constructor(private _servicio : DepartamentoService , private _router : Router) { 
    this.cajalocalidad = ElementRef.prototype;
    this.cajanombre = ElementRef.prototype;
    this.cajanumero = ElementRef.prototype;

  }

  ngOnInit(): void {
  }

  insertareDepartamento (){

    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    var departamento = new Departamento(num , nom, loc);
    this._servicio.insertarDepartamento(departamento).subscribe(res=>{
      this._router.navigate(["/"]);
    },error=>{
      console.log(error);
    })
  }

}
