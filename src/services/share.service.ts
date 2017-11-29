import { User } from './../models/user';
import { Injectable, EventEmitter } from '@angular/core';
import { ScheduleEvent} from '../models/schedule-event';
import { Curator } from '../models/curator';
import { ElderCurator } from '../models/elder-curator';

@Injectable()
export class ShareService {

    newUser: User;
    currentUser: User;
    currentCurator: Curator;
    currentElder: ElderCurator;
    currentEvent: ScheduleEvent;
    newEvent: ScheduleEvent;

    public deleteScheduleEvent: EventEmitter<ScheduleEvent> = new EventEmitter();

    constructor() { }

    public onScheduleEventDeleted (scheduleEvent: ScheduleEvent) {
        this.deleteScheduleEvent.emit(scheduleEvent);
    }

}