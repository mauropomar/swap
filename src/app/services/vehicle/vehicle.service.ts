import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { VehicleModel } from '../../models/vehicle';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

type GetALVehicleResponse = {
  results: VehicleModel[]
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  errorMessage: BehaviorSubject<string>
  constructor(private http: HttpClient) {
    this.errorMessage = new BehaviorSubject<string>('')
   }

  getAll(): Observable<GetALVehicleResponse> {
    return this.http.get<GetALVehicleResponse>(`${environment.apiUrl}vehicles`).pipe(
      tap((_) => console.log('fetched vehicles')),
      catchError(
        this.handleError<GetALVehicleResponse>('getAll', { results: [] })
      )
    );
  }

  get(id: string): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${environment.apiUrl}vehicles/${id}`).pipe(
      tap((_) => console.log('fetched vehicle')),
      catchError(this.handleError<VehicleModel>(`get with id:${id}`, null))
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
