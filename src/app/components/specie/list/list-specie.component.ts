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
      for(const item of results){
         item.id = this.getId(item.url);
         this.species.push(item);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }
}
