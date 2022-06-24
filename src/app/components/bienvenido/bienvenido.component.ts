import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private GithubService: GithubService) { }
  data: any;

  ngOnInit(): void {
    this.GithubService.ObtenerDatos().subscribe((retorno) => {
      this.data = retorno;
    });
    console.log(this.data);
  }
}
