import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuratorSchedulePage } from './curator-schedule';

@NgModule({
  declarations: [
    CuratorSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(CuratorSchedulePage),
  ],
})
export class CuratorSchedulePageModule {}
