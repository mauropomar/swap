import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {FilterService} from './../../services/filter';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  public sucription: Subscription;
  lastSearch = [];

  constructor(private filterService: FilterService) {

  }

  ngOnInit(): void {
    localStorage.clear();
    this.filterService.reloadSearch();
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();
  }

  changeFilter(text: string){
    if(text.length === 0 || text.length > 3)
    this.filterService.setFilterText(text);
  }

}
