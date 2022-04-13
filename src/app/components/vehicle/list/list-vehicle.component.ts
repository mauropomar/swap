import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../services/vehicle';
import { VehicleModel } from '../../../models/vehicle';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {
  vehicles: VehicleModel[] = [];
  constructor(private Vehicleervice: VehicleService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.Vehicleervice.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.vehicles.push(item);
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }
}
