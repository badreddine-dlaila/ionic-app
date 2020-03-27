import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/interfaces/launch';
import { RSpacexService } from 'src/app/api/r-spacex.service';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-past',
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss'],
})
export class PastPage implements OnInit {
  segment = 'all';
  queryText = '';
  ios: boolean;
  showSearchbar: boolean;
  launches: Launch[];
  favoriteLaunches: Launch[] = new Array();

  constructor(
    private rspaceXService: RSpacexService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.rspaceXService.getPastLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  updateLaunchList(event: any) {
    const searchQuery = event.detail.value;
    if (searchQuery === '') {
      this.rspaceXService.getPastLaunches().subscribe(data => {
        this.launches = data;
      });
    } else {
      const filteredLaunches = this.launches.filter(x => x.mission_name.toLowerCase().includes(searchQuery));
      this.launches = filteredLaunches;
    }
  }

  async addFavorite(slidingItem: IonItemSliding, launch: Launch) {
    slidingItem.close();

    this.favoriteLaunches.push(launch);

    const toast = await this.toastCtrl.create(
      {
        header: `${launch.mission_name} was succeffully added as a favorite.`,
        duration: 3000,
        animated: true,
        color: 'success',
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

    await toast.present();
    console.table(this.favoriteLaunches);
  }

}
