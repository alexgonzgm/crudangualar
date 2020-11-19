import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute ,Params, Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html'
})
export class ModificarComponent implements OnInit {

  @ViewChild("cajanumero") cajanumero : ElementRef;
  @ViewChild("cajanombre") cajanombre : ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad : ElementRef;
  public departamento : Departamento ;
  constructor(private _service : DepartamentoService,
    private _activeR : ActivatedRoute ,
    private _router : Router) { 
    this.cajalocalidad = ElementRef.prototype;
    this.cajanombre = ElementRef.prototype;
    this.cajanumero = ElementRef.prototype;
    }

  ngOnInit(): void {
    this._activeR.params.subscribe((params : Params)=>{
      this.buscarDepartamento(params.id);
    })
    
  }
  buscarDepartamento(id){

    this._service.busacarDepartamento(id).subscribe(response =>{
      this.departamento = response
    })
  }

  updateDepartamento(){
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    var departamento = new Departamento(num , nom, loc);
    this._service.updateDepartamento(departamento).subscribe(res=>{
      this._router.navigate(["/"]);
    })


  }

}
