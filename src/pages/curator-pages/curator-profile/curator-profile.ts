import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ShareService } from '../../../services/share.service';
import { HttpService } from '../../../services/http.service';
import { Curator } from '../../../models/curator';

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

  curator: Curator;  

  constructor(public navCtrl: NavController, public share: ShareService, public navParams: NavParams,
     public menuCtrl: MenuController, public http: HttpService) {
      this.curator = new Curator();

      this.http.getCurator(this.share.currentUser.id).subscribe(
        result => 
        {
          this.share.currentCurator = result;
          this.curator = this.share.currentCurator;
        },
        error => console.log(error),
      ); 
    
    //this.name = this.share.currentUser.firstName;    
  }

  ionViewDidEnter(){
    
   this.menuCtrl.enable(true, 'curatorMenu');
   this.menuCtrl.swipeEnable(true,'curatorMenu');     
  
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad CuratorProfilePage');
  }

}
