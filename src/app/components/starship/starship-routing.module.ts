import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStarshipComponent } from './list/list-starship.component';
import { DetailStarshipComponent } from './detail/detail-starship.component';

const routes: Routes = [{
  path: '',
  component: ListStarshipComponent
},{
  path: ':id',
  component: DetailStarshipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
