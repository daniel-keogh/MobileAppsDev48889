import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeinsterCountiesPage } from '../leinster-counties/leinster-counties';

@IonicPage()
@Component({
  selector: 'page-leinster',
  templateUrl: 'leinster.html',
})
export class LeinsterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterPage');
  }

  GoToCounties() {
    this.navCtrl.push(LeinsterCountiesPage);
  }

}
