import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { ScheduleEvent } from '../models/schedule-event';

@Injectable()
export class ShareService {

    newUser: User;
    currentUser: User;
    currentEvent: ScheduleEvent;
    newEvent: ScheduleEvent;

    constructor() { }

}