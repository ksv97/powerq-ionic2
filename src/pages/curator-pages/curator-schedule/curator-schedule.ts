import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ScheduleEvent } from '../../../models/schedule-event';
import { EventDetailsPage } from '../../event-details/event-details';
import { ShareService } from '../../../services/share.service';
import { AddScheduleEventPage } from '../../add-schedule-event/add-schedule-event';
import { HttpService } from '../../../services/http.service';


/**
 * Generated class for the CuratorSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curator-schedule',
  templateUrl: 'curator-schedule.html',
})
export class CuratorSchedulePage {

  //userEvents: ScheduleEvent[] = [];
  mockEvents: ScheduleEvent[];
  groupedEvents = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpService,
    private shareService: ShareService,  public modalCtrl: ModalController) {

      // this.http.getEvents(this.shareService.currentUser.id).subscribe(
      //   result => {
      //     // WE need something to do with data format that's fetched from server. Its like 2017-14-07T10:14:10
      //     this.userEvents = result;
      //     this.groupEvents();
      //   }
      // )
    this.mockEvents = [
      {id: 5, date: new Date(2017, 9, 12, 14, 30), description: "Lotem ipsum5", title: "test5", isDeadline: false, users: []},
      {id: 2, date: new Date(2017, 10, 12, 11, 30), description: "Lotem ipsum2", title: "test2", isDeadline: false, users: []},
      {id: 6, date: new Date(2017, 10, 12, 14, 30), description: "Lotem ipsum", title: "DEADLINE", isDeadline: true, users: []},
      {id: 1, date: new Date(2017, 10, 12, 14, 30), description: "Lotem ipsum", title: "test1", isDeadline: false, users: []},
      {id: 3, date: new Date(2017, 10, 12, 17, 30), description: "Lotem ipsum3", title: "test3", isDeadline: false, users: []},
      {id: 4, date: new Date(2017, 10, 13, 14, 0), description: "Lotem ipsum4", title: "test4", isDeadline: false, users: []},
     
     ]        
    
  }

  // only works if events are sorted by date (so I shift this to server)
  groupEvents (events: ScheduleEvent[]) {
    this.groupedEvents = new Array();
    let currentDate = new Date();
    let currentEvents = [];

    for (let ev of events) {
      if (ev.date.getMonth() != currentDate.getMonth() || ev.date.getDay() != currentDate.getDay()) {
        currentDate = ev.date;

        let newGroup = {
          date: currentDate,
          events: []
        };

        currentEvents = newGroup.events;
        this.groupedEvents.push(newGroup);
      }

      currentEvents.push(ev);
    }    
  }

  addScheduleEvent() {
    let modal = this.modalCtrl.create(AddScheduleEventPage);

    modal.onDidDismiss( (item) => {
      if (item) {
        this.mockEvents.push(item);
        this.http.createEvent(item).subscribe(
          result => console.log (result),
          error => console.log(error),
        );
        this.groupEvents(this.mockEvents);
      }
    })

    modal.present();
  }

  showDetails(event: ScheduleEvent) {    
     this.shareService.currentEvent = event;
     this.navCtrl.push(EventDetailsPage); 
  }

  ionViewDidEnter(){
    this.groupEvents(this.mockEvents);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuratorSchedulePage');
    
  }

}
