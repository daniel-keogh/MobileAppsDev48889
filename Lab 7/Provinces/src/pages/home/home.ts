import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UlsterPage } from '../ulster/ulster';
import { MunsterPage } from '../munster/munster';
import { ConnaughtPage } from '../connaught/connaught';
import { LeinsterPage } from '../leinster/leinster';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Ulster_Clicked() {
    this.navCtrl.push(UlsterPage);
  }

  Munster_Clicked() {
    this.navCtrl.push(MunsterPage);
  }

  Leinster_Clicked() {
    this.navCtrl.push(LeinsterPage);
  }

  Connaught_Clicked() {
    this.navCtrl.push(ConnaughtPage);
  }

}
