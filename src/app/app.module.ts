import { CuratorSchedulePage } from '../pages/curator-pages/curator-schedule/curator-schedule';
import { CuratorRatingPage } from '../pages/curator-pages/curator-rating/curator-rating';
import { CuratorDeadlinesPage } from '../pages/curator-pages/curator-deadlines/curator-deadlines';
import { CuratorProfilePage } from '../pages/curator-pages/curator-profile/curator-profile';
import { ShareService } from './../services/share.service';
import { RegistrationFinishElderPage } from './../pages/registration-finish-elder/registration-finish-elder';
import { RegistrationFinishCuratorPage } from './../pages/registration-finish-curator/registration-finish-curator';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import {HttpModule} from '@angular/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpService} from '../services/http.service'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import  {FacultiesPage} from '../pages/faculties/faculties'
import  {UsersPage} from '../pages/users/users'
import  {RegistrationPage} from '../pages/registration/registration'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user.service';
import { CuratorPersonalRatingPage } from '../pages/curator-pages/curator-personal-rating/curator-personal-rating';
import { FacultyRatingPage } from '../pages/faculty-rating/faculty-rating';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { AddScheduleEventPage } from '../pages/add-schedule-event/add-schedule-event';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    FacultiesPage,
    UsersPage,
    RegistrationPage,
    RegistrationFinishCuratorPage,
    RegistrationFinishElderPage,
    CuratorProfilePage,
    CuratorDeadlinesPage,
    CuratorRatingPage,
    CuratorSchedulePage,
    CuratorPersonalRatingPage,
    FacultyRatingPage,
    EventDetailsPage,
    AddScheduleEventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    FacultiesPage,
    UsersPage,
    RegistrationPage,
    RegistrationFinishCuratorPage,
    RegistrationFinishElderPage,
    CuratorProfilePage,
    CuratorDeadlinesPage,
    CuratorRatingPage,
    CuratorSchedulePage,
    CuratorPersonalRatingPage,
    FacultyRatingPage,
    EventDetailsPage,
    AddScheduleEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ShareService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: "ru-RU" }
  ]
})
export class AppModule {}
