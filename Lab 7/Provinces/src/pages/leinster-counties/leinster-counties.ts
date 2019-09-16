import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-leinster-counties',
  templateUrl: 'leinster-counties.html',
})
export class LeinsterCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterCountiesPage');
  }

  counties: string[] = [
    "Carlow", 
    "Dublin", 
    "Kildare", 
    "Kilkenny",
    "Laois", 
    "Longford", 
    "Louth", 
    "Meath", 
    "Offaly", 
    "Westmeath", 
    "Wexford", 
    "Wicklow"
  ];

}
