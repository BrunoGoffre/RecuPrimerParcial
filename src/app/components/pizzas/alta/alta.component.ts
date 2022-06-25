import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  @Output() nuevaPizza = new EventEmitter<Pizza>();
  public altaPizzaForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    ingredientes: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(20)]],
    weight: [500, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(500), Validators.max(1000)]],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.altaPizzaForm.controls;
  }

  getErrorMessage(field: string): string {
    let retorno = "";
    if (this.f[field].hasError("required")) {
      retorno = "Empty.";
    }
    else if (this.f[field].hasError("min")) {
      if (field == "price")
        retorno = "Minimum price is $20";
      else
        retorno = "Minimum weight is 500gr";
    }
    else if (this.f[field].getError('pattern')) {
      retorno = "Invalid format"
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty == true)
      && !this.f[field].valid;
  }

  emitNewPizza() {
    let pizza = this.altaPizzaForm.value;
    let nuevaPizza: Pizza = {
      id: Guid.create().toString(),
      name: pizza.nombre as string,
      ingredientes: pizza.ingredientes as string,
      price: pizza.price as string,
      weight: pizza.weight as number
    }
    this.nuevaPizza.emit(nuevaPizza);
  }

}
