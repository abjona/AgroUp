import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthserviceProvider } from '../providers/authservice/authservice';


const firebaseConfig = {
  apiKey: "AIzaSyCcU6hi2oW2whBEp2Rgbc7I_lLrGMd-nNI",
  authDomain: "agronomia-4351f.firebaseapp.com",
  databaseURL: "https://agronomia-4351f.firebaseio.com",
  projectId: "agronomia-4351f",
  storageBucket: "agronomia-4351f.appspot.com",
  messagingSenderId: "236171109094",
  appId: "1:236171109094:web:d2af6bee7a6b75deba1127"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthserviceProvider
  ]
})
export class AppModule {}
