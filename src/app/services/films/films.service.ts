import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmsModel } from '../../models/films';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<FilmsModel[]>(`https://swapi.dev/api/films`);
  }

  get(id: string){
    return this.http.get<FilmsModel[]>(`https://swapi.dev/api/films/`+id);
  }
}
