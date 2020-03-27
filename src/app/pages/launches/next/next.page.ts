import { Component, OnInit } from '@angular/core';
import { RSpacexService } from 'src/app/api/r-spacex.service';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/interfaces/launch';

@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {
  nextLaunch$: Observable<Launch>;
  isFavorite = true;

  constructor(private rspacexService: RSpacexService) { }

  ngOnInit() {
    this.nextLaunch$ = this.rspacexService.getNextLaunch();
  }

  shareLaunch() {
    console.log('launch shared!');
  }

  toggleFavorite() {
    console.log('favorite added!');
  }

}
