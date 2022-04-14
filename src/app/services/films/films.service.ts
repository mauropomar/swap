import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FilmsModel } from '../../models/films';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALFilmsResponse = {
  results: FilmsModel[];
};

@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALFilmsResponse> {
    return this.http.get<GetALFilmsResponse>(`${environment.apiUrl}films`).pipe(
      tap((_) => console.log('fetched films')),
      catchError(
        this.handleError<GetALFilmsResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<FilmsModel> {
    return this.http.get<FilmsModel>(`${environment.apiUrl}films/${id}`).pipe(
      tap((_) => console.log('fetched films')),
      catchError(this.handleError<FilmsModel>(`get with id:${id}`, null))
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
