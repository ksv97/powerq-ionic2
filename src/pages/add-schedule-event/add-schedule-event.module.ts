import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddScheduleEventPage } from './add-schedule-event';

@NgModule({
  declarations: [
    AddScheduleEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddScheduleEventPage),
  ],
})
export class AddScheduleEventPageModule {}
