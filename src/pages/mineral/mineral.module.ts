import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MineralPage } from './mineral';

@NgModule({
  declarations: [
    MineralPage,
  ],
  imports: [
    IonicPageModule.forChild(MineralPage),
  ],
})
export class MineralPageModule {}
