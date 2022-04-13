import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleModel } from '../../models/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<PeopleModel[]>(`https://swapi.dev/api/people`);
  }

  get(id: string){
    return this.http.get<PeopleModel[]>(`https://swapi.dev/api/people/`+id);
  }
}
