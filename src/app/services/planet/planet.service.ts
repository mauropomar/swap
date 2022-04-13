import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetModel } from '../../models/Planet';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<PlanetModel[]>(`${environment.apiUrl}planets`);
  }

  get(id: string){
    return this.http.get<PlanetModel[]>(`${environment.apiUrl}planets/${id}`);
  }
}
