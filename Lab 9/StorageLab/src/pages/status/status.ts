import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  statusVal: string; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get("status").then((data) => {
      this.statusVal = data;
    });
  }

  saveStatus() {
    this.storage.set("status", this.statusVal);
    this.navCtrl.pop();
  }

}
