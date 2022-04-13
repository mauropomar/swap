import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpecieModel } from '../../models/Specie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpecieService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<SpecieModel[]> {
    return this.http.get<SpecieModel[]>(`${environment.apiUrl}species`);
  }

  get(id: string): Observable<SpecieModel[]> {
    return this.http.get<SpecieModel[]>(`${environment.apiUrl}species/${id}`);
  }
}
