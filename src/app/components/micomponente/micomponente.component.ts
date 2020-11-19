import { Component, OnInit } from '@angular/core';
import { MiservicioService } from 'src/app/services/miservicio.service';

@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.css']
})
export class MicomponenteComponent implements OnInit {

  public usuarios : Array<any>;
  constructor(private _miServicio : MiservicioService) { }

  ngOnInit(): void {
    this._miServicio.getUsuarios().subscribe(response=>{
     this.usuarios = response.data;
     console.log(response.data);
    },error=>{
      console.log(error)
    })
  }

}
