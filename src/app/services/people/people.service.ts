import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleModel } from '../../models/people';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PeopleModel[]>{
    return this.http.get<PeopleModel[]>(`${environment.apiUrl}people`);
  }

  get(id: string):Observable<PeopleModel[]>{
    return this.http.get<PeopleModel[]>(`${environment.apiUrl}people/${id}`);
  }
}
