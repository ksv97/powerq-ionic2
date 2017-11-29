import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuratorDeadlinesPage } from './curator-deadlines';

@NgModule({
  declarations: [
    CuratorDeadlinesPage,
  ],
  imports: [
    IonicPageModule.forChild(CuratorDeadlinesPage),
  ],
})
export class CuratorDeadlinesPageModule {}
