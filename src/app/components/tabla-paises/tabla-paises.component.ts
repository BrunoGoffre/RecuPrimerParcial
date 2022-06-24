import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public listaPaises: any;
  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(
    private paisService: PaisesService
  ) { }

  ngOnInit(): void {
    this.paisService.obtenerPaises("all").subscribe(x => {
      this.listaPaises = x;
    });
  }

  onPais(pais: any) {
    this.paisSeleccionado.emit(pais);
  }

}