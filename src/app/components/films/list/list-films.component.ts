import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter';
import { FilmsService } from '../../../services/films';
import { FilmsModel } from '../../../models/films';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  films = [];
  isEmpty = false;

  public sucription: Subscription;

  constructor(
    private filmService: FilmsService,
    private filterService: FilterService
  ) {
    this.sucription = this.filterService.filterSubject.subscribe((message) => {
      this.filter(message);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();
  }

  getAll() {
    this.filmService.getAll().subscribe((data: any) => {
      const results = data.results;
      for (const item of results) {
        item.id = this.getId(item.url);
        this.films.push(item);
        localStorage.setItem('films', JSON.stringify(this.films));
      }
    });
  }

  getId(url: string) {
    const array = url.split('/');
    const id = array[5];
    return id;
  }

  filter(text: string) {
    let arrayFilms: any = localStorage.getItem('films');
    arrayFilms = JSON.parse(arrayFilms);
    text = text !== '' ? text.toLocaleLowerCase() : '';
    this.films = arrayFilms.filter(
      (item: any) =>
        item.title.toLocaleLowerCase().indexOf(text) > -1 ||
        item.director.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.films.length === 0;
  }
}
