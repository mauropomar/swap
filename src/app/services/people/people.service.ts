import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PeopleModel } from '../../models/people';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALPeopleResponse = {
  results: PeopleModel[]
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALPeopleResponse> {
    return this.http.get<GetALPeopleResponse>(`${environment.apiUrl}people`).pipe(
      tap((_) => console.log('fetched peoples')),
      catchError(
        this.handleError<GetALPeopleResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<PeopleModel> {
    return this.http.get<PeopleModel>(`${environment.apiUrl}people/${id}`).pipe(
      tap((_) => console.log('fetched peoples')),
      catchError(this.handleError<PeopleModel>(`get with id:${id}`, null))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
