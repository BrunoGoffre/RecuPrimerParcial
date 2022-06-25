import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';


@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css']
})
export class RepartidoresComponent implements OnInit {


  @Input() listaRepartidores!: Repartidor[];
  @Output() repartidorSelecc = new EventEmitter<Repartidor>();
  public displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['nombre', 'edad', 'capacidad translado', 'unidad propia', 'nacionalidad', 'acciones'];
  }

  ngOnInit() {

  }

  seleccionarRepartidor(rep: Repartidor) {
    this.repartidorSelecc.emit(rep);
  }
}
