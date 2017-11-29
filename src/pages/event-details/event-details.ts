import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { ScheduleEvent } from '../../models/schedule-event';
import { ShareService } from '../../services/share.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HttpService } from '../../services/http.service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {  

  event: ScheduleEvent;    
  readonly: boolean = true;

  date: string;
  // time: string;

  set someDate (value) {
    this.date = value;
    this.event.date = new Date(this.date);    
  }

  get someDate () {
    return this.date;
  }

  // set someTime (value) {
  //   this.time = value;    
  //   this.event.date = new Date(value);
  //   //this.event.date.setTime(this.event.date.getTime() + this.event.date.getTimezoneOffset()*60*1000);
  // }

  // get someTime () {
  //   return this.time;
  // }

  constructor(public navCtrl: NavController, public shareService: ShareService, public toastCtrl: ToastController,
    public navParams: NavParams, public alertsCtrl: AlertController, public http: HttpService) {
    
    
    // или редезайн страницы, чтобы была  менюшка, которая разрешает редактирование и позволяет удалить 
    this.event = this.shareService.currentEvent;
    this.date = this.event.date.toISOString();
    // this.time = this.date;
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){
    this.readonly = true;
  }

  openDatePicker (datePicker: DateTime) {    
    datePicker.open();
  }

  deleteEvent () {
    let confirm = this.alertsCtrl.create({
      title: `Подтвердите удаление`,
      message:  `Вы действительно хотите удалить мероприятие ${this.event.title}`,
      buttons: [
        {
          text: 'Отмена',
          handler: () => console.log ('Delete was canceled')
        },
        {
          text: 'Удалить',
          handler: () => {
            this.http.deleteEvent(this.event.id).subscribe(
              success => {
                this.shareService.onScheduleEventDeleted(this.event);
                this.shareService.currentEvent = null;
                this.navCtrl.pop();
              },
              error => console.log(error)
            );                        
          }
        }
      ]
    });
    confirm.present();
  }

  saveChanges () {    
    this.http.updateEvent(this.event).subscribe(
      result => {
        let toast = this.toastCtrl.create(
          {
            message: 'Данные успешно обновлены!',
            duration: 2000,
          });
          toast.present();
        },
        error => console.log(error),
      )    
    
    this.readonly = true;
  }

  enableEditing () {
    this.readonly = false;
  }

}
