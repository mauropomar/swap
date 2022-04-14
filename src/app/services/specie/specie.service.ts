import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SpecieModel } from '../../models/specie';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALSpecieResponse = {
  results: SpecieModel[]
}

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALSpecieResponse> {
    return this.http.get<GetALSpecieResponse>(`${environment.apiUrl}species`).pipe(
      tap((_) => console.log('fetched species')),
      catchError(
        this.handleError<GetALSpecieResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<SpecieModel> {
    return this.http.get<SpecieModel>(`${environment.apiUrl}species/${id}`).pipe(
      tap((_) => console.log('fetched specie')),
      catchError(this.handleError<SpecieModel>(`get with id:${id}`, null))
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
