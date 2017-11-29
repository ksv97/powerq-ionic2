import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CuratorPersonalRatingPage } from '../curator-personal-rating/curator-personal-rating';
import { FacultyRatingPage } from '../../faculty-rating/faculty-rating';

/**
 * Generated class for the CuratorRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curator-rating',
  templateUrl: 'curator-rating.html',
})
export class CuratorRatingPage {

  personalRatingRoot = CuratorPersonalRatingPage;
  facultyRatingRoot = FacultyRatingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuratorRatingPage');
  }

}
