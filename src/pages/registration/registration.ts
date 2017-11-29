import { LoginPage } from './../login/login';
import { ShareService } from './../../services/share.service';
import { RegistrationFinishElderPage } from './../registration-finish-elder/registration-finish-elder';
import { HttpService } from './../../services/http.service';
import { Role } from './../../models/role';
import { RegistrationFinishCuratorPage } from './../registration-finish-curator/registration-finish-curator';
import {ToastController} from 'ionic-angular'
import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {User} from '../../models/user'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  userForm: FormGroup
  submitAttempted: boolean = false;


  user: User = new User();
  roles: Role[];
  registrationErrorMessage: string;
  isRegistrationFailed: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareService,
    public menuCtrl: MenuController, private http: HttpService, public toastCtrl: ToastController, public formBuilder: FormBuilder) {
    
    this.roles = [
      {id: 1, name: "Куратор"},
      {id: 2, name: "Старший куратор"},
    ];

    this.userForm = this.formBuilder.group({
    login: ['', Validators.compose([Validators.maxLength(128), Validators.required, Validators.pattern('[a-zA-Z0-9]*')]) ],
       password: ['',Validators.compose([Validators.maxLength(128),Validators.required]) ],
       firstName: ['', Validators.compose([Validators.maxLength(128),Validators.pattern('[а-яА-Я]*'), Validators.required])],
       surName: ['', Validators.compose([Validators.maxLength(128), Validators.pattern('[а-яА-Я]*'), Validators.required])],
       role: ['', Validators.required]
    });
    // this.http.getRoles().subscribe(
    //   data => {
    //     this.roles = data
    //     let headRole = this.roles.find(i => i.name == 'Руководитель');
    //     let indexOfHeadRole = this.roles.indexOf(headRole);
    //     this.roles.splice(indexOfHeadRole, 1);
    //   },
    //   error => console.log(error)
    // );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  // ionViewDidEnter () {
  //   this.menuCtrl.swipeEnable(false,'adminMenu');
  // }

  // ionViewWillLeave() {
  //   this.menuCtrl.swipeEnable(true, 'adminMenu');
  // }

  continueRegistration () {
    this.submitAttempted = true;
    if (this.userForm.valid) {
      this.http.checkLoginOfUser(this.user).subscribe(       
        result => {
          console.log(result);
          
          // let toast = this.toastCtrl.create({
          //   message: 'Пользователь успешно зарегистрирован!',
          //   duration: 2000,
          // });
          // toast.present();
          // setTimeout(() => this.navCtrl.setRoot(LoginPage), 2000);
          this.shareService.newUser = this.user;
          if (this.user.role.name === 'Куратор') {              
            this.navCtrl.push(RegistrationFinishCuratorPage);
          }
          else if (this.user.role.name === "Старший куратор") {
            this.navCtrl.push(RegistrationFinishElderPage);
          }            
        },
        error => {
          console.log(error);
          let toast = this.toastCtrl.create({
              message: "Пользователь с таким именем уже существует!",
              duration: 3000
          });
          toast.present();
        }
     )
    }
     
     
  }

}
