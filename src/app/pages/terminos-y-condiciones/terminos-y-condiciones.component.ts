import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrls: ['./terminos-y-condiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {

  }
  acepta() {
    this.firestore.acepta.next(true);
  }
  rechaza() {
    this.firestore.acepta.next(false);
  }

}
