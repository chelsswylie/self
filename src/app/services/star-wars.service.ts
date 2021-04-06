import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface starWarsPlanet {
//   name: string
// }

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private http: HttpClient) {}

  getPlanets() {
    const api = `https://swapi.dev/api/`;
    return this.http.get(api);
  }
}
