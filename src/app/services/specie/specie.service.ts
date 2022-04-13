import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecieModel } from '../../models/Specie';


@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<SpecieModel[]>(`https://swapi.dev/api/species`);
  }

  get(id: string){
    return this.http.get<SpecieModel[]>(`https://swapi.dev/api/species/`+id);
  }
}
