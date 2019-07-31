import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginDto} from '../dialogs/login/LoginDto';
import {Observable, Subject} from 'rxjs';
import {IUser} from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.apiUrl;
  user: IUser;
  userSubject = new Subject<IUser>();
  constructor(private http: HttpClient) {
    console.log('user service inti');
  }
  async login(user: LoginDto) {
    // https://stackoverflow.com/questions/53656059/angular-6-async-await-not-working-on-http-request
    const res: any = await this.http.post(this.url + 'auth/login', user).toPromise();
    this.user = res.user;
    this.userSubject.next(this.user);
    return res;
  }

}
