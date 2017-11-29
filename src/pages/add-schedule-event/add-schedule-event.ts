import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ScheduleEvent } from '../../models/schedule-event';
import { ShareService } from '../../services/share.service';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the AddScheduleEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-schedule-event',
  templateUrl: 'add-schedule-event.html',
})
export class AddScheduleEventPage {

    event: ScheduleEvent;    
  
    date: string;
    // time: string;
  
    // set someDate (value) {
    //   this.date = value;
    //   this.event.date = new Date(this.date);    
    // }
  
    // get someDate () {
    //   return this.date;
    // }
  
    // set someTime (value) {
    //   this.time = value;    
    //   this.event.date = new Date(value);
    //   //this.event.date.setTime(this.event.date.getTime() + this.event.date.getTimezoneOffset()*60*1000);
    // }
  
    // get someTime () {
    //   return this.time;
    // }
  

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, 
    public shareService: ShareService, public http: HttpService) {
    this.event = new ScheduleEvent();   
    this.event.date = new Date();    
  
  }

  close() {
    this.view.dismiss();
  }

  save () {
    console.log(this.date);
    this.event.users.push(this.shareService.currentUser);
    this.event.id = -1;    
    this.event.isDeadline = false;
    this.view.dismiss(this.event); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddScheduleEventPage');
  }

}
