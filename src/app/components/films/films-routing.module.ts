import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmsComponent } from './list/list-films.component';
import { DetailFilmComponent } from './detail/detail-film.component';

const routes: Routes = [
  {
    path: '',
    component: ListFilmsComponent
  },{
    path: ':id',
    component: DetailFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
