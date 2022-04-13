import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../../../services/specie';
import { SpecieModel } from '../../../models/specie';

@Component({
  selector: 'app-list-specie',
  templateUrl: './list-specie.component.html',
  styleUrls: ['./list-specie.component.css']
})
export class ListSpecieComponent implements OnInit {
  species: SpecieModel[] = [];
  constructor(private specieService: SpecieService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.specieService.getAll().subscribe((data: any) => {
      const results = data.results;
      let i = 1;
      for(const item of results){
         item.id = i;
         this.species.push(item);
         i++;
      }
    });
  }
}
