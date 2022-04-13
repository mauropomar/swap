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
      let i = 1;
      for(const item of results){
         item.id = i;
         this.planets.push(item);
         i++;
      }
    });
  }
}
