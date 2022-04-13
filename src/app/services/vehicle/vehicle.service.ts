import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from '../../models/Vehicle';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<VehicleModel[]>{
    return this.http.get<VehicleModel[]>(`${environment.apiUrl}vehicles`);
  }

  get(id: string): Observable<VehicleModel[]>{
    return this.http.get<VehicleModel[]>(`${environment.apiUrl}vehicles/${id}`);
  }
}
