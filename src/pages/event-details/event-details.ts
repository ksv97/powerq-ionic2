import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { ScheduleEvent } from '../../models/schedule-event';
import { ShareService } from '../../services/share.service';

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

  constructor(public navCtrl: NavController, public shareService: ShareService, public navParams: NavParams) {
    
    
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

  }

  disableEditing () {
    this.readonly = true;
  }

  enableEditing () {
    this.readonly = false;
  }

}
