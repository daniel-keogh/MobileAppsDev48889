import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnaughtPage } from './connaught';
import { ConnaughtCountiesPage } from './../connaught-counties/connaught-counties';

@NgModule({
  declarations: [
    ConnaughtPage,
    ConnaughtCountiesPage
  ],
  imports: [
    IonicPageModule.forChild(ConnaughtPage),
  ],
})
export class ConnaughtPageModule {}
