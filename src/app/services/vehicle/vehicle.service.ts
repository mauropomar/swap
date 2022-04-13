import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from '../../models/Vehicle';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<VehicleModel[]>(`${environment.apiUrl}vehicles`);
  }

  get(id: string){
    return this.http.get<VehicleModel[]>(`${environment.apiUrl}vehicles/${id}`);
  }
}
