import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlanetService } from '../../../services/planet';
import { FilterService } from '../../../services/filter';

@Component({
  selector: 'app-list-planet',
  templateUrl: './list-planet.component.html',
  styleUrls: ['./list-planet.component.css']
})
export class ListPlanetComponent implements OnInit {
  planets = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(private Planetervice: PlanetService, private filterService: FilterService) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      if (this.planets.length > 0) {
        this.filter(text);
      }else{
        if(this.isEmpty){
          this.planets = JSON.parse(localStorage.getItem('items'));
          this.isEmpty = false
        }
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.Planetervice.getAll().subscribe((data) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.planets.push(item);
      }
      localStorage.setItem('items', JSON.stringify(this.planets));
      const text = this.filterService.getFiltertext();
      if (text !== '') {
        this.filter(text);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }

  filter(text: string) {
    let array: any = localStorage.getItem('items');
    array = JSON.parse(array);
    text = text !== '' ? text.toLocaleLowerCase() : '';
    this.planets = array.filter(
      (item: any) =>
        item.name.toLocaleLowerCase().indexOf(text) > -1 ||
        item.climate.toLocaleLowerCase().indexOf(text) > -1 ||
        item.gravity.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.planets.length === 0;
    if (this.planets.length > 0 && text !== '') {
      let search = localStorage.getItem('search');
      let searchArray = search !== null ? JSON.parse(search) : [];
      const obj = {
        text: text,
        route: 'planets',
      };
      const elements = searchArray.filter(
        (item) => item.text === obj.text && item.route === obj.route
      );
      if (elements.length === 0) {
        searchArray.push(obj);
        localStorage.setItem('search', JSON.stringify(searchArray));
        this.filterService.reloadSearch();
      }
    }
  }
}
