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
  errorMessage: string;
  constructor(private filmService: FilmsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })

    this.filmService.errorMessage.subscribe(error => {
      this.errorMessage = error
    })
  }

  get(id: string): void{
    this.filmService.get(id).subscribe((data) => {
      this.film = data;
    });
  }

  goBack(): void{
    this.router.navigate(['films']);
  }

}
