import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ListFilmsComponent } from './list/list-films.component';
import { DetailFilmComponent } from './detail/detail-film.component';


@NgModule({
  declarations: [ListFilmsComponent, DetailFilmComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
