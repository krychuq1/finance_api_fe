import { Component } from '@angular/core';
import {SocketService} from './services/socket.service';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  service: any;
  crypto: any;
  constructor(private socket: Socket) {
    this.socket.emit('getMultiCryptoPrice', 'BTC,ETH,LTC,BAT');
    this.socket.on('multiCryptoPrice', data => {
      this.crypto = data;
    });
  }
}
