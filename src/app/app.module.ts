import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoService } from './services/departamento.service';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    InsertarComponent,
    ModificarComponent,
    MicomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
