import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuratorPersonalRatingPage } from './curator-personal-rating';

@NgModule({
  declarations: [
    CuratorPersonalRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(CuratorPersonalRatingPage),
  ],
})
export class CuratorPersonalRatingPageModule {}
