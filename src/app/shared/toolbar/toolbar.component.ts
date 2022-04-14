import { Component, OnInit } from '@angular/core';
import { FilterService } from './../../services/filter';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {

  lastSearch = [];
  showTBar: boolean = true;

  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
   // localStorage.clear()
    this.filterService.reloadSearch();

  }

  changeFilter(text: string) {
    if (text.length === 0 || text.length > 3)
      this.filterService.setFilterText(text);
  }
}
