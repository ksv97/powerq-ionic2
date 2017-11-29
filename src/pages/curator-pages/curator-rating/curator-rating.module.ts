import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuratorRatingPage } from './curator-rating';

@NgModule({
  declarations: [
    CuratorRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(CuratorRatingPage),
  ],
})
export class CuratorRatingPageModule {}
