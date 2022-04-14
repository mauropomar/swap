import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from './../../../services/filter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.css'],
})
export class ButtonSearchComponent implements OnInit, OnDestroy {
  public sucription: Subscription;
  lastSearch = [];

  constructor(private filterService: FilterService, private router: Router) {
    this.loadSearchButton();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sucription.unsubscribe();
  }

  onClick(item: any) {
    const url = window.location.href.split('/');
    const route = item.route;
    const text = item.text;
    if (url.indexOf(route) > -1) {
      this.sucription.unsubscribe();
      this.filterService.setFilterText(text);
      this.loadSearchButton();
    } else {
      this.router.navigate([route]).then((result) => {
        this.filterService.setFilterText(text);
      });
    }
  }

  loadSearchButton() {
    this.sucription = this.filterService.SearchSubject.subscribe(() => {
      const str = localStorage.getItem('search');
      const items = str !== null ? JSON.parse(str) : [];
      if(items.length > 4){
        items.splice(0, 1);
      }
      this.lastSearch = items;
      localStorage.setItem('search', JSON.stringify(items));
    });
  }
}
