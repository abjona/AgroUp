import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadPage } from './cad';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@NgModule({
  declarations: [
    CadPage,
  ],
  imports: [
    IonicPageModule.forChild(CadPage),
  ],
  providers :[
    AuthserviceProvider
  ]
})
export class CadPageModule {}
