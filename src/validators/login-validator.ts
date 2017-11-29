import { HttpService } from './../services/http.service';
import {FormControl} from '@angular/forms'

export class LoginValidator {

    constructor (private http: HttpService) {

    }

    static checkLogin(control: FormControl) : any {
        return new Promise (
            resolve => {
                
            }
            
        );
    }
}
