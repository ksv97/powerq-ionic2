import { ElderCurator } from './../models/elder-curator';
import { Curator } from './../models/curator';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/map';
import { ScheduleEvent } from '../models/schedule-event';

@Injectable()
export class HttpService {

    baseUrl = 'http://localhost:52311/api/';
    requestOpts: RequestOptions;


    constructor(private http: Http) { 
        this.requestOpts = new RequestOptions();
        this.requestOpts.headers = new Headers();
        this.requestOpts.headers.append("Content-Type", "application/json");
    }

    createEvent (event: ScheduleEvent) {
        let url = this.baseUrl + 'events/create';
        return this.http.post(url, JSON.stringify(event), this.requestOpts);
    }

    getEvents(userId: number) {
        let url = this.baseUrl + `events?userId=${userId}`;
        let opts = new RequestOptions();
        opts.headers = this.requestOpts.headers;
        return this.http.get(url, opts).map(result => result.json());
    }    

    getRoles () {
        let url = this.baseUrl + 'roles';
        return this.http.get(url).map(result => result.json())
    }

    getFaculties() {
        let url = this.baseUrl + 'faculties';
        return this.http.get(url).map(result => result.json())
    }
    
    checkLoginOfUser (user: User) {
        let url = this.baseUrl +'users/check';        
        return this.http.post(url,JSON.stringify(user), this.requestOpts);
    }

    registerCurator (curator: Curator) {
        let url = this.baseUrl + 'users/register/curator';          
        return this.http.post(url, JSON.stringify(curator), this.requestOpts);
    }

    registerElder (elder: ElderCurator) {
        let url = this.baseUrl + 'users/register/elder';          
        return this.http.post(url, JSON.stringify(elder), this.requestOpts);
    }

    logIn(user: User) {
        let url = this.baseUrl + 'users/login';

        return this.http.post(url,JSON.stringify(user), this.requestOpts).map(result => result.json());
    }

    getCurator(userId: number) {
        let url = this.baseUrl + `users/curator?userId=${userId}`;

        let opts = new RequestOptions();
        opts.headers = this.requestOpts.headers;        
        //opts.params.append('userId', userId.toString());

        // dont have map operator
        return this.http.get(url, opts).map(result => result.json());
        
    }
}