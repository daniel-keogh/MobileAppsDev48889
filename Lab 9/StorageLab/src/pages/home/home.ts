import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  status: string;

  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }

  ionViewDidEnter() {
    this.storage.get("status").then((data) => {
      this.status = data;
    });
  }

  updateStatus() {
    this.navCtrl.push(StatusPage);
  }

}
