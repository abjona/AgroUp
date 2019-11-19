import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { User } from './../../providers/authservice/user';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cad',
  templateUrl: 'cad.html',
})
export class CadPage {
  user: User = new User();
 
  @ViewChild('form') form:NgForm;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthserviceProvider,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController
    ) {
  }

  cad(){
    let load = this.loadCtrl.create();
    load.present();
    this.auth.cadastro(this.user).then((info)=>{
      console.log("Cadastrado!");
      let toast = this.toastCtrl.create({
        message : 'Usuário cadastrado com sucesso!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      
      load.dismiss();
    });

    this.user = new User();
  }


}
