import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuratorProfilePage } from './curator-profile';

@NgModule({
  declarations: [
    CuratorProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CuratorProfilePage),
  ],
})
export class CuratorProfilePageModule {}
