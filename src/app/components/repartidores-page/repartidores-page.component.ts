import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-repartidores-page',
  templateUrl: './repartidores-page.component.html',
  styleUrls: ['./repartidores-page.component.css']
})
export class RepartidoresPageComponent implements OnInit {

  public listaRepartidores!: Repartidor[];
  public repartidorSelec!: Repartidor;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getAll('repartidores').subscribe(rep => {
      this.listaRepartidores = rep as Repartidor[];
    });
  }

  repSelec(e: any) {
    this.repartidorSelec = e;
    console.log(this.repartidorSelec);
  }

}
