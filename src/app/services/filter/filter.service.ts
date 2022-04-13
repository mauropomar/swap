import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterSubject = new Subject<string>();
  constructor() { }

  setFilterText(value: string): void {
    this.filterSubject.next(value);
  }

}
