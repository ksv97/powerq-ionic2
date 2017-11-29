import {Role} from './role';

export class User {
  id: number;
  login: string;
  password: string;

  firstName: string;
  surName: string;
  role: Role;

  constructor () {

  }
}
