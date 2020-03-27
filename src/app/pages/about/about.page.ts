import { Component, OnInit } from '@angular/core';
import { RSpacexService } from 'src/app/api/r-spacex.service';
import { Observable } from 'rxjs';
import { ComapnyInfo } from 'src/app/interfaces/company-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  companyInformation$: Observable<ComapnyInfo>;

  constructor(private rspacexService: RSpacexService) { }

  ngOnInit() {
    this.companyInformation$ = this.rspacexService.getComapnyInfo();
  }

}
