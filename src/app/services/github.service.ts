import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly url = "https://api.github.com/users/brunogoffre";
  constructor(private http: HttpClient) { }

  ObtenerDatos() {
    return this.http.get(this.url);
  }
}
