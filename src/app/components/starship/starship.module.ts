import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { ListStarshipComponent } from './list/list-starship.component';
import { DetailStarshipComponent } from './detail/detail-starship.component';


@NgModule({
  declarations: [ListStarshipComponent, DetailStarshipComponent],
  imports: [
    CommonModule,
    StarshipRoutingModule
  ]
})
export class StarshipModule { }
