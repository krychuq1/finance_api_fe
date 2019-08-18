import { Component } from '@angular/core';
import {SocketService} from './services/socket.service';
import {Socket} from 'ngx-socket-io';
import {ICrypto} from './interfaces/ICrypto';
import {IMetal} from './interfaces/IMetal';
import {IStock} from './interfaces/IStock';
import {ICurrency} from './interfaces/ICurrency';
import {UserService} from './services/user.service';
import {PricesService} from './services/prices.service';
import {MatDialog} from '@angular/material';
import {MetalDialogComponent} from './dialogs/metal-dialog/metal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  crypto: ICrypto[];
  metals: IMetal[];
  stocks: IStock[];
  currencies: ICurrency[];
  metalTotal: number;
  constructor(private socket: Socket, public userService: UserService,
              public pricesService: PricesService, public dialog: MatDialog) {
    this.metalTotal = 0;
    this.socket.on('connection', data => {
      if (data === 'SUCCESS') {
        this.socket.emit('getMultiCryptoPrice', 'BTC,ETH,LTC');
        this.socket.on('multiCryptoPrice', data => {
          this.crypto = data;
        });
        this.socket.emit('getMultiMetalPrice');
        this.socket.on('multiMetalPrice', data => {
          this.metals = data;
          this.metals.forEach(metal => {
            switch (metal.type) {
              case 'silver':
                this.pricesService.silver = metal.price;
                break;
              case 'gold':
                this.pricesService.gold = metal.price;
                break;
            }
          });
          if(this.userService.user) {
            this.metalTotal = 0;
            this.userService.user.metals.forEach(metal => {
              this.metalTotal = this.metalTotal + (metal.oz * this.pricesService[metal.type]);
            });
          }
        });
        this.socket.emit('getMultiStockPrice', ['DNP', 'CDR', 'PKN', 'KGHM', 'CMR']);
        this.socket.on('multiStockPrice', data => {
          this.stocks = data;
        });
        this.socket.emit('getCurrencies', {base: 'PLN', symbols: 'EUR,USD,CHF'});
        this.socket.on('multiCurrencies', data => {
          this.currencies = data;
        });
      }
    });
  }
  addMetal() {
    this.dialog.open(MetalDialogComponent, {
      width: '500px',
      height: 'auto'
    });
  }
}
