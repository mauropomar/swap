import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { ListPeopleComponent } from './list/list-people.component';
import { DetailPeopleComponent } from './detail/detail-people.component';


@NgModule({
  declarations: [ListPeopleComponent, DetailPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
