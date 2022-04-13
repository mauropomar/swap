import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpecieModel } from '../../models/specie';
import { environment } from 'src/environments/environment';

type GetALSpecieResponse = {
  results: SpecieModel[]
}

@Injectable({
  providedIn: 'root',
})
export class SpecieService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<GetALSpecieResponse> {
    return this.http.get<GetALSpecieResponse>(`${environment.apiUrl}species`);
  }

  get(id: string): Observable<SpecieModel> {
    return this.http.get<SpecieModel>(`${environment.apiUrl}species/${id}`);
  }
}
