import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetModel } from '../../models/planet';
import { environment } from 'src/environments/environment';

type GetALPlanetResponse = {
  results: PlanetModel[]
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetALPlanetResponse>{
    return this.http.get<GetALPlanetResponse>(`${environment.apiUrl}planets`);
  }

  get(id: string): Observable<PlanetModel>{
    return this.http.get<PlanetModel>(`${environment.apiUrl}planets/${id}`);
  }
}
