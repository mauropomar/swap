import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  public showTBarSubject = new BehaviorSubject<boolean>(true);
  constructor() { }


  show(val: boolean){
    this.showTBarSubject.next(val);
  }

}
