import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  listaPizzas!: Pizza[];
  pizzaSelecc: Pizza | any;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getAll('pizzas').subscribe(pizzas => {
      this.listaPizzas = pizzas as Pizza[];
    })
  }

  crearPizza(pizza: Pizza) {
    this.firestore.setObj('pizzas', pizza).then(x => {
      console.log(x);
    });
  }

  pizzaSeleccionada(pizza: Pizza) {
    this.pizzaSelecc = pizza;
  }

  modificarPizza(pizza: Pizza) {
    this.firestore.setObj('pizzas', pizza).then(x => {
      this.pizzaSelecc = pizza;
      console.log(x);
    });
  }

  borrarPizza(pizza: Pizza) {
    this.firestore.removeObj('pizzas', pizza).then(x => {
      this.pizzaSelecc = null;
      console.log(x);
    });
  }

}
