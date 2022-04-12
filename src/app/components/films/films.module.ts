import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ListFilmsComponent } from './list/list-films.component';


@NgModule({
  declarations: [ListFilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
