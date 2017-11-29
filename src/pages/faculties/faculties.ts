import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, MenuController } from 'ionic-angular';
import { Faculty } from '../../models/faculty';

/**
 * Generated class for the FacultiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faculties',
  templateUrl: 'faculties.html',
})
export class FacultiesPage {

  faculties: Faculty[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,
              public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public http: HttpService) {

    this.http.getFaculties().subscribe(
      result => this.faculties = result,
      error => console.log(error)
    )
  }

  ionViewDidEnter(){
   this.menuCtrl.swipeEnable(true,'adminMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultiesPage');
  }

  showDetails(faculty) {
    let alert = this.alertCtrl.create({
      title: 'Элемент выбран',
      subTitle: 'Выбран элемент ' + faculty,
      buttons: ['Cool']
    });
    alert.present();
  }

  showContextMenu(fac) {
    let contextMenuActionSheet = this.actionSheetCtrl.create({
      title: "Выберите действие с факультетом " + fac,
      buttons: [
        {
          text: 'Изменить',
          handler: () => {
            this.showPromptForChangeFacultyName(fac);
          }
        },
        {
          text: 'Удалить',
          role: 'destructive',
          handler: () => {
            let deleteIndex = this.faculties.indexOf(fac);
            if (deleteIndex >= 0)
              this.faculties.splice(deleteIndex,1);
          }
        },
        {
          text: 'Отмена',
          role: 'cancel',
        }
      ]
    });
    contextMenuActionSheet.present();
  }

  showPromptForChangeFacultyName (oldName: string) {
    let prompt = this.alertCtrl.create({
      title: 'Название факультета',
      message: 'Введите новое имя факультета',
      inputs:[
        {
          name: 'name',
          placeholder: 'Название'
        }
      ],
      buttons: [
        {
          text: 'Сохранить',
          handler: data => {
            // let indexOfOldElement = this.faculties.indexOf(oldName);
            // if (indexOfOldElement >=0 ) {
            //   this.faculties[indexOfOldElement] = data.name;
            // }
          }
        },
        {
          text: 'Отмена',
          role: 'cancel'
        }
      ]
    });
    prompt.present();
  }


}
