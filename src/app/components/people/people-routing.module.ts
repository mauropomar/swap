import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPeopleComponent } from './list/list-people.component';
import { DetailPeopleComponent } from './detail/detail-people.component';

const routes: Routes = [{
  path: '',
  component: ListPeopleComponent
},{
  path: ':id',
  component: DetailPeopleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
