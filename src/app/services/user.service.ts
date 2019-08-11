import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginDto} from '../dialogs/login/LoginDto';
import {Observable, Subject} from 'rxjs';
import {IUser} from '../interfaces/IUser';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.apiUrl;
  user: IUser;
  userSubject = new Subject<IUser>();
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.init();
  }
  async login(user: LoginDto) {
    // https://stackoverflow.com/questions/53656059/angular-6-async-await-not-working-on-http-request
    const res: any = await this.http.post(this.url + 'auth/login', user).toPromise();
    this.user = res.user;
    this.userSubject.next(this.user);
    return res;
  }
  logout(){
    this.user  = null;
    localStorage.removeItem('token');

  }


  async init() {
    console.log('user service inti');
    // check if local storage contains token
    const token: string = localStorage.getItem('token');
    if (token) {
      try{
        const res: any = await this.http.get(this.url + 'user/info',
          {headers: new HttpHeaders({'Authorization' : 'bearer ' + token})}).toPromise();
        console.log(res);
        this.user = {login: res.login, metals: res.metals};
        this.userSubject.next(this.user);
        // this.user.login = res.login;
        this.toastr.success('welcome back');
      }catch (e) {
        localStorage.removeItem('token');
        this.toastr.error('session expired');
      }
    }
  }

}
