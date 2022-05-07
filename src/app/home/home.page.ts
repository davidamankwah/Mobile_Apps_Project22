import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  batmanAlias: string = "";

  constructor(private storage: Storage, private navCtrl: NavController) { }


  ionViewDidEnter() {
    this.storage.create()
      .then(() => {
        this.storage.get('batman')
          .then((batman) => {
            this.batmanAlias = batman;
          }
          )
          .catch();
      })
      .catch();
  }
}

