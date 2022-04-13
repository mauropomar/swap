import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SpecieService } from '../../../services/specie';
import { SpecieModel } from '../../../models/specie';

@Component({
  selector: 'app-detail-specie',
  templateUrl: './detail-specie.component.html',
  styleUrls: ['./detail-specie.component.css']
})
export class DetailSpecieComponent implements OnInit {
  specie: SpecieModel;
  constructor(private specieService: SpecieService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
  }

  get(id: string): void{
    this.specieService.get(id).subscribe((data: any) => {
      this.specie = data;
    });
  }

  goBack(){
    this.router.navigate(['species']);
  }
}
