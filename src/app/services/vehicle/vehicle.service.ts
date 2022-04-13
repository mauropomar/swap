import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleModel } from '../../models/vehicle';
import { environment } from 'src/environments/environment';

type GetALVehicleResponse = {
  results: VehicleModel[]
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetALVehicleResponse>{
    return this.http.get<GetALVehicleResponse>(`${environment.apiUrl}vehicles`);
  }

  get(id: string): Observable<VehicleModel>{
    return this.http.get<VehicleModel>(`${environment.apiUrl}vehicles/${id}`);
  }
}
