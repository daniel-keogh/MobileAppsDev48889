import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UlsterPage } from '../pages/ulster/ulster';
import { MunsterPage } from '../pages/munster/munster';
import { ConnaughtPage } from '../pages/connaught/connaught';
import { ConnaughtCountiesPage } from '../pages/connaught-counties/connaught-counties';
import { LeinsterPage } from '../pages/leinster/leinster';
import { LeinsterCountiesPage } from '../pages/leinster-counties/leinster-counties';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UlsterPage,
    MunsterPage,
    ConnaughtPage, 
    ConnaughtCountiesPage,
    LeinsterPage, 
    LeinsterCountiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UlsterPage,
    MunsterPage,
    ConnaughtPage, 
    LeinsterPage, 
    LeinsterCountiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
