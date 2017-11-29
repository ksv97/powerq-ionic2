import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ShareService } from '../../../services/share.service';

/**
 * Generated class for the CuratorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curator-profile',
  templateUrl: 'curator-profile.html',
})
export class CuratorProfilePage {

  name: string;

  constructor(public navCtrl: NavController, public share: ShareService, public navParams: NavParams, public menuCtrl: MenuController) {
    this.name = this.share.currentUser.firstName;    
  }

  ionViewDidEnter(){
    
   this.menuCtrl.enable(true, 'curatorMenu');
   this.menuCtrl.swipeEnable(true,'curatorMenu');      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuratorProfilePage');
  }

}
