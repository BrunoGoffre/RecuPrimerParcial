import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  @Input() listaPizzas!: Pizza[];
  @Output() pizzaSeleccionada = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPizza(pizza: Pizza) {
    this.pizzaSeleccionada.emit(pizza);
  }
}
