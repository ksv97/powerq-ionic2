import { LoginPage } from './../login/login';
import { ElderCurator } from './../../models/elder-curator';
import { ShareService } from './../../services/share.service';
import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import {Faculty} from '../../models/faculty'
/**
 * Generated class for the RegistrationFinishElderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-finish-elder',
  templateUrl: 'registration-finish-elder.html',
})
export class RegistrationFinishElderPage {

  elderCurator: ElderCurator;
  faculties: Faculty[];
  selectedFaculty: Faculty;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareService,
    public menuCtrl: MenuController, private http: HttpService, public toastCtrl: ToastController) {
    this.http.getFaculties().subscribe(
      result => this.faculties = result,
      error => console.log(error)
    );

    this.elderCurator = new ElderCurator();
    this.elderCurator.faculty = new Faculty();
    this.elderCurator.user = this.shareService.newUser;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationFinishElderPage');
  }

  // ionViewDidEnter () {
  //   this.menuCtrl.swipeEnable(false,'adminMenu');
  // }

  // ionViewWillLeave() {
  //   this.menuCtrl.swipeEnable(true, 'adminMenu');
  // }

  registerElder () {
    this.http.registerElder(this.elderCurator).subscribe(
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
  }

}
