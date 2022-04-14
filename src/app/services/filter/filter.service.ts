import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private text = '';
  public filterSubject = new Subject<string>();
  public SearchSubject = new Subject<string[]>();
  constructor() { }

  setFilterText(value: string): void {
    this.text = value;
    this.filterSubject.next(value);
  }

  getFiltertext(): string {
      return this.text;
  }

  clear(): void{
    this.text = '';
  }

  reloadSearch(){
    this.SearchSubject.next();
  }

}
