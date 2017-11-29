import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import  {FacultiesPage} from '../../pages/faculties/faculties'
import {RegistrationPage} from "../registration/registration";

@NgModule({
  declarations: [
    LoginPage,
    FacultiesPage,
    RegistrationPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
