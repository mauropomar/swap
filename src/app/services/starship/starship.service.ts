import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShipModel } from '../../models/starShip';
import { environment } from 'src/environments/environment';

type GetALStarShipResponse = {
  results: StarShipModel[]
}

@Injectable({
  providedIn: 'root',
})
export class StarShipService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<GetALStarShipResponse> {
    return this.http.get<GetALStarShipResponse>(`${environment.apiUrl}starships`);
  }

  get(id: string): Observable<StarShipModel> {
    return this.http.get<StarShipModel>(`${environment.apiUrl}starships/${id}`);
  }
}
