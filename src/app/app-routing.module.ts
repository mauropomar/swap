import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'films',
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./components/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'peoples',
    loadChildren: () =>
      import('./components/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./components/planet/planet.module').then((m) => m.PlanetModule),
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./components/specie/specie.module').then((m) => m.SpecieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
