import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import {FilterService} from './../../../services/filter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.css']
})
export class ButtonSearchComponent implements OnInit, OnDestroy {
  public sucription: Subscription;
  lastSearch = [];

  constructor(private filterService: FilterService, private router: Router) {
    this.sucription = this.filterService.SearchSubject.subscribe(() => {
      const str = localStorage.getItem('search');
      const array = str !== null ? JSON.parse(str): [];
      this.lastSearch = array.length > 0 ? array.slice(-4): [];
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sucription.unsubscribe();
  }

  onClick(item: any){
    const url = window.location.href.split('/');
    const route = item.route;
    const text = item.text;
    if(route === 'films'){
      if(url[3] === 'films'){
          this.filterService.setFilterText(text);
      }
    }
 //   this.router.navigate(['films']);
  }

}
