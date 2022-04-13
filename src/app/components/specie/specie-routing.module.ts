import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSpecieComponent } from './list/list-specie.component';
import { DetailSpecieComponent } from './detail/detail-specie.component';

const routes: Routes = [{
  path: '',
  component: ListSpecieComponent
},{
  path: ':id',
  component: DetailSpecieComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecieRoutingModule { }
