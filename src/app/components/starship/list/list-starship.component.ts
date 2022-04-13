import { Component, OnInit } from '@angular/core';
import { StarShipService } from '../../../services/starship';
import { StarShipModel } from '../../../models/starship';

@Component({
  selector: 'app-list-starship',
  templateUrl: './list-starship.component.html',
  styleUrls: ['./list-starship.component.css']
})
export class ListStarshipComponent implements OnInit {
  ships: StarShipModel[] = [];
  constructor(private shipService: StarShipService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.shipService.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.ships.push(item);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }
}
