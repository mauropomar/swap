import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../../services/planet';
import { PlanetModel } from '../../../models/planet';

@Component({
  selector: 'app-list-planet',
  templateUrl: './list-planet.component.html',
  styleUrls: ['./list-planet.component.css']
})
export class ListPlanetComponent implements OnInit {
  planets: PlanetModel[] = [];
  constructor(private Planetervice: PlanetService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.Planetervice.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.planets.push(item);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }
}
