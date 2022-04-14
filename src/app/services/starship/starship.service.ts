import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StarShipModel } from '../../models/starship';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALStarShipResponse = {
  results: StarShipModel[]
}

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALStarShipResponse> {
    return this.http.get<GetALStarShipResponse>(`${environment.apiUrl}starships`).pipe(
      tap((_) => console.log('fetched starships')),
      catchError(
        this.handleError<GetALStarShipResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<StarShipModel> {
    return this.http.get<StarShipModel>(`${environment.apiUrl}starships/${id}`).pipe(
      tap((_) => console.log('fetched starship')),
      catchError(this.handleError<StarShipModel>(`get with id:${id}`, null))
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
