import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
 
})
export class DepartamentosComponent implements OnInit {

  public parametros : string ;
  public departamentos : Array<Departamento>;
  constructor(private _servicio : DepartamentoService , private _activeR : ActivatedRoute , private router : Router ) { 
    this.departamentos = [];
  }

  ngOnInit(): void {
    //recibimos un parametro o no lo recibimos
    this._activeR.params.subscribe((params : Params)=>{
      if (params.id) {
        this.eliminarDepartamento(params.id);
      }else{
        this.cargarDepartamentos();
        
      }
    })
   
  }
  cargarDepartamentos(){
    this._servicio.getDepartamentos().subscribe(resposnse =>{
      this.departamentos = resposnse;
    });

  }

  eliminarDepartamento (id){
    this._servicio.deleteDepartamento(id).subscribe(res=>{
      //this.cargarDepartamentos();
      this.router.navigate(['/']);

    });

  }

}
