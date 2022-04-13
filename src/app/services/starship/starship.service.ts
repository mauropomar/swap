import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShipModel } from '../../models/StarShip';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarShipService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<StarShipModel[]> {
    return this.http.get<StarShipModel[]>(`${environment.apiUrl}starships`);
  }

  get(id: string): Observable<StarShipModel[]> {
    return this.http.get<StarShipModel[]>(`${environment.apiUrl}starships/${id}`);
  }
}
