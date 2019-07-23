import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit() {

  }
  test() {
    this.socket.on('connection', (msg) => {
      console.log('no elo mordo ', msg);
    });

    this.socket.emit('getDoc', {ha: 'kurwa'});
    console.log('socket emit');
    console.log('yo kurwa');
  }

}
