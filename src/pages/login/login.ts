import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  senha:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthserviceProvider
    ) {
  }

  login(){
    this.auth.login(this.email,this.senha).then(()=>{
      this.navCtrl.setRoot(HomePage);
      
    })
  }

}
