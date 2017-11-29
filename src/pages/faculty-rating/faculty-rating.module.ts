import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultyRatingPage } from './faculty-rating';

@NgModule({
  declarations: [
    FacultyRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultyRatingPage),
  ],
})
export class FacultyRatingPageModule {}
