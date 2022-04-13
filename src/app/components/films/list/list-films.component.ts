import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films';
import { FilmsModel } from '../../../models/films';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
  films: FilmsModel[] = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.filmService.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.films.push(item);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }
}
