import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/services/toolbar';
import { VehicleService } from '../../../services/vehicle';
import { VehicleModel } from '../../../models/vehicle';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.css']
})
export class DetailVehicleComponent implements OnInit {
  vehicle: VehicleModel;
  errorMessage: string;

  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute,
     private router: Router, private toolbarService: ToolbarService) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
    this.vehicleService.errorMessage.subscribe(error => {
      this.errorMessage = error
    })
    this.toolbarService.show(false);
  }

  get(id: string): void{
    this.vehicleService.get(id).subscribe((data) => {
      this.vehicle = data;
    });
  }

  goBack(){
    this.router.navigate(['vehicles']);
    this.toolbarService.show(true);
  }

}
