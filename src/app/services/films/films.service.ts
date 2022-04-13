import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmsModel } from '../../models/films';
import { environment } from 'src/environments/environment';


type GetALFilmsResponse = {
  results: FilmsModel[]
}

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetALFilmsResponse>{
    return this.http.get<GetALFilmsResponse>(`${environment.apiUrl}films`)
  }

  get(id: string):Observable<FilmsModel>{
    return this.http.get<FilmsModel>(`${environment.apiUrl}films/${id}`);
  }
}
