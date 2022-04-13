import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmsModel } from '../../models/films';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<FilmsModel[]>(`${environment.apiUrl}films`);
  }

  get(id: string){
    return this.http.get<FilmsModel[]>(`${environment.apiUrl}films/${id}`);
  }
}
