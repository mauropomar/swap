import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlanetService } from '../../../services/planet';
import { PlanetModel } from '../../../models/planet';

@Component({
  selector: 'app-detail-planet',
  templateUrl: './detail-planet.component.html',
  styleUrls: ['./detail-planet.component.css']
})
export class DetailPlanetComponent implements OnInit {
  planet: PlanetModel;
  constructor(private planetService: PlanetService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
  }

  get(id: string): void{
    this.planetService.get(id).subscribe((data: any) => {
      this.planet = data;
    });
  }

  goBack(){
    this.router.navigate(['planets']);
  }
}
