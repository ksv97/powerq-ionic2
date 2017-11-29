import { User } from './user';
import {Faculty} from './faculty'
export class Curator {
    id: number;
    user: User;
    faculty:  Faculty;
    curatedGroups: string[];

    constructor () {
        this.curatedGroups = new Array();
        this.user = new User();
        this.faculty = new Faculty();
    }
}
