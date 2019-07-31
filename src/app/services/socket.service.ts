import {Injectable, OnInit} from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    console.log('socket init ');
    this.socket.on('connection', data => {
      console.log('we have connection');
    });

  }
  test() {
    this.socket.on('connection', data => {
      console.log('we have connection');
    });
  }
}
