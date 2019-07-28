import {ILogin} from './ILogin';

export class LoginDto implements ILogin {
  login: string;
  password: string;
  constructor() {
    this.login = '';
    this.password = '';
  }
}
