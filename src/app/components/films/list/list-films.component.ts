import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
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
      let i = 1;
      for(const item of results){
         item.id = i;
         this.films.push(item);
         i++;
      }
    });
  }
}
