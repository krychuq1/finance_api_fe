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
  metal: any;
  stock: any;
  constructor(private socket: Socket) {
    this.socket.on('connection', data => {
      if (data === 'SUCCESS') {
        this.socket.emit('getMultiCryptoPrice', 'BTC,ETH,LTC,BAT');
        this.socket.on('multiCryptoPrice', data => {
          this.crypto = data;
        });
        // this.socket.emit('getMultiMetalPrice');
        // this.socket.on('multiMetalPrice', data => {
        //   this.metal = data;
        // });
        // this.socket.emit('getMultiStockPrice', ['DNP', 'CDR', 'PKN', 'KGHM', 'CMR']);
        // this.socket.on('multiStockPrice', data => {
        //   this.stock = data;
        // });
      }
    });
  }
}
