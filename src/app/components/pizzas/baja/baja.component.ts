import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {

  @Input() pizza!: Pizza;
  @Output() pizzaBorrada = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.pizza);
  }

  borrarPizza() {
    console.log(this.pizza);
    this.pizzaBorrada.emit(this.pizza);
  }

}
