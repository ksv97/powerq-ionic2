import { CuratorProfilePage } from '../curator-pages/curator-profile/curator-profile';
import { User } from './../../models/user';
import { Role } from './../../models/role';
import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import  {FacultiesPage} from '../../pages/faculties/faculties'
import {RegistrationPage} from "../registration/registration";
import { ShareService } from '../../services/share.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService,
    public menuCtrl: MenuController, public http: HttpService, public toastCtrl: ToastController) {

  }

  ionViewDidEnter () {
    // this.menuCtrl.enable(false,'adminMenu');
    // this.menuCtrl.enable(false,'curatorMenu');
    // this.menuCtrl.enable(false,'elderMenu');
    this.menuCtrl.swipeEnable(false,'adminMenu');
    this.menuCtrl.swipeEnable(false,'curatorMenu');
    this.menuCtrl.swipeEnable(false,'elderMenu');
  }

  ionViewWillLeave() {
    //this.menuCtrl.swipeEnable(true, 'adminMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  tryLogIn () {
    this.http.logIn(this.user).subscribe(
      result => {
        this.shareService.currentUser = result;
        switch (this.shareService.currentUser.role.name)
        {

          case 'Куратор': {            
            this.navCtrl.setRoot(CuratorProfilePage); 
            break;
          }
          default: console.log(result); break;
        };
      },
      error => {
        console.log(error);
        let toast = this.toastCtrl.create(
          {
            duration: 2000,
            message: "Неверные имя пользователя или пароль!"
          }
        );
        toast.present();
      }
    )
  }

  goToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

}
