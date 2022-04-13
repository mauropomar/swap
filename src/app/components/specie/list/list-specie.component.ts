import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter';
import { SpecieService } from '../../../services/specie';
import { SpecieModel } from '../../../models/specie';

@Component({
  selector: 'app-list-specie',
  templateUrl: './list-specie.component.html',
  styleUrls: ['./list-specie.component.css']
})
export class ListSpecieComponent implements OnInit, OnDestroy {
  species: SpecieModel[] = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(private specieService: SpecieService, private filterService: FilterService) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'species') {
        this.filter(text);
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();
  }

  getAll() {
    this.specieService.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.species.push(item);
         localStorage.setItem('items', JSON.stringify(this.species));
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
    this.species = array.filter(
      (item: any) =>
        item.name.toLocaleLowerCase().indexOf(text) > -1 ||
        item.classification.toLocaleLowerCase().indexOf(text) > -1 ||
        item.designation.toLocaleLowerCase().indexOf(text) > -1 ||
        item.language.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.species.length === 0;
  }
}
