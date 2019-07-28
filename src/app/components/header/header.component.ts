import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../dialogs/login/login.component';
import {UserService} from '../../services/user.service';
import {IUser} from '../../services/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: IUser;
  constructor(public dialog: MatDialog, public userService: UserService) {
    this.user = userService.user;
    this.userService.userSubject.subscribe(value => {
      this.user = value;
    });
  }
  login(): void {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: 'auto'
    });
    console.log('you are going to login ');
  }
  ngOnInit() {
  }

}
