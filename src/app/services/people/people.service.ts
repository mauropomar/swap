import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleModel } from '../../models/people';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<PeopleModel[]>(`${environment.apiUrl}people`);
  }

  get(id: string){
    return this.http.get<PeopleModel[]>(`${environment.apiUrl}people/${id}`);
  }
}
