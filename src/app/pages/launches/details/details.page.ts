import { Component, OnInit } from '@angular/core';
import { RSpacexService } from 'src/app/api/r-spacex.service';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/interfaces/launch';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  launch: Launch;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private rspacexService: RSpacexService) { }

  ionViewWillEnter() {
  }

  ngOnInit() {
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    this.rspacexService.getLaunch(flightNumber).subscribe(data => {
      this.launch = data;
    });
  }

  goBack() {
    this.location.back();
  }

}
