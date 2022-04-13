import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../../services/films';
import { FilmsModel } from '../../../models/films';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film: FilmsModel;
  constructor(private filmService: FilmsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
  }

  get(id: string): void{
    this.filmService.get(id).subscribe((data: any) => {
      this.film = data;
    });
  }

  goBack(): void{
    this.router.navigate(['films']);
  }

}
