import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterText = '';
  public filterSubject = new Subject<string>();
  public SearchSubject = new Subject<string[]>();
  constructor() { }

  setFilterText(value: string): void {
    this.filterText = value;
    this.filterSubject.next(value);
  }

  reloadSearch(){
    this.SearchSubject.next();
  }

}
