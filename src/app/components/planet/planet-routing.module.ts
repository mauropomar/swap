import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlanetComponent } from './list/list-planet.component';
import { DetailPlanetComponent } from './detail/detail-planet.component';

const routes: Routes = [{
  path: '',
  component: ListPlanetComponent
},{
  path: ':id',
  component: DetailPlanetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
