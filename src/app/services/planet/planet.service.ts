import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetModel } from '../../models/Planet';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PlanetModel[]>{
    return this.http.get<PlanetModel[]>(`${environment.apiUrl}planets`);
  }

  get(id: string): Observable<PlanetModel[]>{
    return this.http.get<PlanetModel[]>(`${environment.apiUrl}planets/${id}`);
  }
}
