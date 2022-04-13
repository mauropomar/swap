import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetModel } from '../../models/Planet';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<PlanetModel[]>(`https://swapi.dev/api/planets`);
  }

  get(id: string){
    return this.http.get<PlanetModel[]>(`https://swapi.dev/api/planets/`+id);
  }
}
