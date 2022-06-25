import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaRepartidorComponent } from '../alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingComponent } from '../loading/loading.component';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    TablaPaisesComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class AltaRepartidorModule { }