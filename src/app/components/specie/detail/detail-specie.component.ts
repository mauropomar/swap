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
  errorMessage: string;

  constructor(private specieService: SpecieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
    this.specieService.errorMessage.subscribe(error => {
      this.errorMessage = error
    })
  }

  get(id: string): void{
    this.specieService.get(id).subscribe((data) => {
      this.specie = data;
    });
  }

  goBack(): void{
    this.router.navigate(['species']);
  }
}
