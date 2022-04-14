import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PlanetModel } from '../../models/planet';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALPlanetResponse = {
  results: PlanetModel[]
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALPlanetResponse> {
    return this.http.get<GetALPlanetResponse>(`${environment.apiUrl}planets`).pipe(
      tap((_) => console.log('fetched planets')),
      catchError(
        this.handleError<GetALPlanetResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<PlanetModel> {
    return this.http.get<PlanetModel>(`${environment.apiUrl}planets/${id}`).pipe(
      tap((_) => console.log('fetched planet')),
      catchError(this.handleError<PlanetModel>(`get with id:${id}`, null))
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
