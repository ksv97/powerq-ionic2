import { LoginPage } from './../login/login';
import { ShareService } from './../../services/share.service';
import { Curator } from './../../models/curator';
import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import {Faculty} from '../../models/faculty'

/**
 * Generated class for the RegistrationFinishCuratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-finish-curator',
  templateUrl: 'registration-finish-curator.html',
})
export class RegistrationFinishCuratorPage {

  curator: Curator  
  faculties: Faculty[];
  groups: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareService,
    public menuCtrl: MenuController, private http: HttpService, public toastCtrl: ToastController) {
    this.http.getFaculties().subscribe(
      result => this.faculties = result,
      error => console.log(error)
    );

    this.curator = new Curator();
    this.curator.faculty = new Faculty();
    this.curator.user = this.shareService.newUser;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationFinishCuratorPage');
  }

  // ionViewDidEnter () {
  //   this.menuCtrl.swipeEnable(false,'adminMenu');
  // }

  // ionViewWillLeave() {
  //   this.menuCtrl.swipeEnable(true, 'adminMenu');
  // }

  registerCurator() {
    if (this.validateGroupInput()) {      
      this.http.registerCurator(this.curator).subscribe(
        success => {
          let toast = this.toastCtrl.create({
            message: 'Регистрация прошла успешно!',
            duration: 2000,
          });
          toast.present();
          setTimeout(() => this.navCtrl.setRoot(LoginPage), 2000);
        },
        error => {
          console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Ошибка регистрации',
            duration: 2000,
          });
          toast.present();
        }
      )
      
      
      // this.navCtrl.setRoot(LoginPage);
    }
    
  }

  validateGroupInput () : boolean {
    let isValid: boolean = true;
    let pattern = /[0-9а-яА-Яa-zA-Z]{1,3}/g;
    let matchedGroups = this.groups.match(pattern);
    let enteredSeparatedGroups = this.groups.split(/[, -.;/]+/);
    if (matchedGroups == null) {
      let toast = this.toastCtrl.create ({
        message: 'Please, enter groups!',
        duration: 2000,
      });
      toast.present();
      isValid = false;
    }
    else {        
        if (this.groups.search(/[a-zA-ZбБг-яГ-Я]/) >=0) {
          let toast = this.toastCtrl.create ({
            message: 'One or more of entered groups aint exist!',
            duration: 2000,
          });
          toast.present();
          isValid = false;
        }
        else
        if (matchedGroups.length != enteredSeparatedGroups.length ||  (this.groups.length > 0 && matchedGroups.length == 0)) {
          let toast = this.toastCtrl.create ({
            message: 'Wrong group input. Please, follow the pattern',
            duration: 2000,
          });
          toast.present();
          isValid = false;
        }
      }
      this.curator.curatedGroups = matchedGroups;
      return isValid;
  }
}
