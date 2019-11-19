import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../../providers/authservice/user';
import { setupUrlSerializer } from 'ionic-angular/umd/navigation/url-serializer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = "";

  constructor(
    public navCtrl: NavController,
    private auth: AuthserviceProvider,
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase
    ) {

      let uid = firebase.auth().currentUser.uid;

    this.db.database.ref('usuarios').child(uid).once('value').then((snapshot)=>{
      this.setUser(snapshot.val());
    });
   
  }

  setUser(user: any) {
    this.user = user;
    this.user.nome = this.user.nome.split(' ');
    this.user.nome = this.user.nome[0].toUpperCase();
    console.log(this.user.nome);
  }

  goToMineral(){
    this.navCtrl.push('MineralPage');
  }

  goToConcentrado(){
    this.navCtrl.push('ConcentradoPage');
  }

  goToVolumoso(){
    this.navCtrl.push('VolumosoPage');
  }

  logout(){
    this.auth.logout().then(()=>{
      this.navCtrl.setRoot('LoginPage');
    })
  }
}
