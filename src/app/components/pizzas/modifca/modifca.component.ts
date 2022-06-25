import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-modifca',
  templateUrl: './modifca.component.html',
  styleUrls: ['./modifca.component.css']
})
export class ModifcaComponent implements OnInit {

  @Input() pizza!: Pizza;
  @Output() pizzaModificada = new EventEmitter<Pizza>();
  public updatePizzaForm: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updatePizzaForm = this.formBuilder.group({
      id: [this.pizza.id, [Validators.required]],
      nombre: [this.pizza.name, [Validators.required]],
      ingredientes: [this.pizza.ingredientes, [Validators.required]],
      price: [this.pizza.price, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(20)]],
      weight: [this.pizza.weight, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(500), Validators.max(1000)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.updatePizzaForm.controls;
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

  update() {
    this.pizza = this.updatePizzaForm.value as Pizza;
    this.pizzaModificada.emit(this.pizza);
  }

}
