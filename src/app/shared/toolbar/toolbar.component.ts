import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from './../../services/filter';
import { ToolbarService } from 'src/app/services/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  public sucription: Subscription;
  lastSearch = [];
  showTBar: boolean;

  constructor(
    private filterService: FilterService,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    // localStorage.clear();
    this.filterService.reloadSearch();
    this.sucription = this.toolbarService.showTBarSubject.subscribe((val) => {
      this.showTBar = val;
    });
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();

  }

  changeFilter(text: string) {
    if (text.length === 0 || text.length > 3)
      this.filterService.setFilterText(text);
  }
}
