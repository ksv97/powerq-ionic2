import { CuratorDeadlinesPage } from '../pages/curator-pages/curator-deadlines/curator-deadlines';
import { CuratorSchedulePage } from '../pages/curator-pages/curator-schedule/curator-schedule';
import { CuratorRatingPage } from '../pages/curator-pages/curator-rating/curator-rating';
import { CuratorProfilePage } from '../pages/curator-pages/curator-profile/curator-profile';

import { Page } from './../models/page';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import  {LoginPage} from '../pages/login/login'
import  {FacultiesPage} from '../pages/faculties/faculties'
import {UsersPage} from "../pages/users/users";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = LoginPage;
  rootPage: any = LoginPage;

  adminPages: Array<Page>;
  curatorPages: Array<Page>;
  elderPages: Array<Page>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.adminPages = [
      { title: 'Факультеты', component: FacultiesPage },
      { title: 'Пользователи', component: UsersPage}
    ];

    this.curatorPages = [
      {title: 'Профиль', component: CuratorProfilePage},
      {title: 'Рейтинг', component: CuratorRatingPage},
      {title: 'Расписание', component: CuratorSchedulePage},
      {title: 'Дедлайны', component: CuratorDeadlinesPage},
    //   {title: 'Настройки', component: },
    ];

    // this.elderPages = [
    //   {title: 'Профиль', component: },
    //   {title: 'Рейтинг', component: },
    //   {title: 'Расписание', component: },
    //   {title: 'Дедлайны', component: },
    //   {title: 'Настройки', component: },
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
}
