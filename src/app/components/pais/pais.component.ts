import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  @Input() pais: any;

  constructor() { }

  ngOnInit(): void {
  }

}
