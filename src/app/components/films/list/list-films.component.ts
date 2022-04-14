import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter';
import { FilmsService } from '../../../services/films';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  films = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(
    private filmService: FilmsService,
    private filterService: FilterService
  ) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      if (this.films.length > 0) {
        this.filter(text);
      }else{
        if(this.isEmpty){
          this.films = JSON.parse(localStorage.getItem('items'));
          this.isEmpty = false
        }
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.sucription.unsubscribe();
  }

  getAll(): void {
    this.filmService.getAll().subscribe((data) => {
      const results = data.results;
      for (const item of results) {
        item.id = this.getId(item.url);
        this.films.push(item);
      }
      localStorage.setItem('items', JSON.stringify(this.films));
      const text = this.filterService.getFiltertext();
      if (text !== '') {
        this.filter(text);
      }
    });
  }

  getId(url: string): string {
    const array = url.split('/');
    const id = array[5];
    return id;
  }

  filter(text: string): void {
    let array: any = localStorage.getItem('items');
    array = JSON.parse(array);
    text = text !== '' ? text.toLocaleLowerCase() : '';
    this.films = array.filter(
      (item: any) =>
        item.title.toLocaleLowerCase().indexOf(text) > -1 ||
        item.director.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.films.length === 0;
    if (this.films.length > 0 && text !== '') {
      let search = localStorage.getItem('search');
      let searchArray = search !== null ? JSON.parse(search) : [];
      const obj = {
        text: text,
        route: 'films',
      };
      const elements = searchArray.filter(
        (item) => item.text === obj.text && item.route === obj.route
      );
      if (elements.length === 0) {
        searchArray.push(obj);
        localStorage.setItem('search', JSON.stringify(searchArray));
        this.filterService.reloadSearch();
      }
    }
  }
}
